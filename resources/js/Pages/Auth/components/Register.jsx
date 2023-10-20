import { useEffect } from "react";

import { Link, useForm } from "@inertiajs/react";
import { Button, Input } from "@nextui-org/react";

import { motion } from "framer-motion";
import * as Yup from "yup";
import axios from "axios";

import { ValidationCustomError, handleErrorsYup } from "@/utils";
import { InputPassword } from ".";

export const Register = () => {
    const schema = Yup.object().shape({
        name: Yup.string().required("El nombre es requerido"),
        email: Yup.string()
            .email("El correo no es válido")
            .required("El correo es requerido"),
        password: Yup.string()
            .required("La contraseña es requerida")
            .min(8, "La contraseña debe tener mínimo 8 caracteres"),
        identification: Yup.string()
            .required("El RUC es requerido")
            .length(13, "El RUC debe tener 13 dígitos"),
        bussness_name: Yup.string().required("La razón social es requerida"),
        whatsapp: Yup.string().required("El whatsapp es requerido"),
    });

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        setError,
        clearErrors,
    } = useForm({
        identification: "",
        name: "",
        bussness_name: "",
        whatsapp: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = async (e) => {
        try {
            e.preventDefault();
            clearErrors();
            await schema.validate(data, { abortEarly: false });
            post(route("register"));
        } catch (err) {
            handleErrorsYup(err, setError);
        }
    };

    /**
     *
     * @param {string} value
     * @returns
     */
    const sanitizeIdentification = (value) => {
        return value.replace(/[^0-9]/g, "");
    };

    /**
     *
     * @param {string} identification
     */
    const requestCustomerData = async (identification) => {
        try {
            if (identification.length == 0) {
                throw new ValidationCustomError("El RUC es requerido");
            }

            if (identification.length < 13) {
                throw new ValidationCustomError("El RUC debe tener 13 dígitos");
            }

            if (!identification.endsWith("001")) {
                throw new ValidationCustomError(
                    "El RUC ingresado no es válido"
                );
            }

            clearErrors("identification");

            const { data: cliente } = await axios.post(
                "https://www.perseo.app/api/datos/datos_consulta",
                { identificacion: identification },
                {
                    headers: {
                        usuario: "perseo",
                        clave: "Perseo1232*",
                    },
                }
            );

            if (cliente.identificacion) {
                setData({
                    ...data,
                    name: cliente.razon_social,
                    bussness_name: cliente.nombre_comercial,
                    email: cliente.correo.split("\r\n")[0],
                    whatsapp: cliente.telefono2,
                });
            }
        } catch (error) {
            if (error instanceof ValidationCustomError) {
                setError("identification", error.message);
            } else {
                console.error(error);
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="py-8 px-8 w-[400px] mx-auto bg-white rounded-xl shadow-xl space-y-4"
        >
            <Link href={route("landing")}>
                <h1 className="text-center text-6xl">Logo</h1>
            </Link>
            <h2 className="text-2xl font-bold text-center">
                Que gusto que te unas
            </h2>
            <form className="space-y-4" onSubmit={submit} noValidate>
                <Input
                    label="RUC"
                    type="text"
                    name="identification"
                    value={data.identification}
                    variant="bordered"
                    onChange={(e) =>
                        setData(
                            "identification",
                            sanitizeIdentification(e.target.value)
                        )
                    }
                    onBlur={() => requestCustomerData(data.identification)}
                    autoComplete="identification"
                    isInvalid={!!errors.identification}
                    errorMessage={errors.identification}
                    maxLength={13}
                    size="sm"
                />

                <Input
                    label="Nombres"
                    type="text"
                    name="name"
                    value={data.name}
                    variant="bordered"
                    onChange={(e) => setData("name", e.target.value)}
                    autoComplete="name"
                    isInvalid={!!errors.name}
                    errorMessage={errors.name}
                    maxLength={255}
                    size="sm"
                />

                <Input
                    label="Razón Social"
                    type="text"
                    name="bussness_name"
                    value={data.bussness_name}
                    variant="bordered"
                    onChange={(e) => setData("bussness_name", e.target.value)}
                    autoComplete="bussness_name"
                    isInvalid={!!errors.bussness_name}
                    errorMessage={errors.bussness_name}
                    maxLength={255}
                    size="sm"
                />

                <Input
                    label="Whatsapp"
                    type="tel"
                    name="whatsapp"
                    value={data.whatsapp}
                    variant="bordered"
                    onChange={(e) => setData("whatsapp", e.target.value)}
                    autoComplete="phone"
                    isInvalid={!!errors.whatsapp}
                    errorMessage={errors.whatsapp}
                    maxLength={10}
                    size="sm"
                />

                <Input
                    label="Correo electrónico"
                    type="email"
                    name="email"
                    value={data.email}
                    variant="bordered"
                    onChange={(e) => setData("email", e.target.value)}
                    autoComplete="new-email"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email}
                    size="sm"
                />

                <InputPassword
                    label="Contraseña"
                    name="password"
                    type="password"
                    value={data.password}
                    variant="bordered"
                    onChange={(e) => setData("password", e.target.value)}
                    autoComplete="new-passwor"
                    isInvalid={!!errors.password}
                    errorMessage={errors.password}
                    size="sm"
                />

                <Button
                    isLoading={processing}
                    type="submit"
                    color="primary"
                    fullWidth
                >
                    Iniciar Sesión
                </Button>

                {/* <div>
                    <label
                        htmlFor="razon_social"
                        className="block text-base font-medium text-gray-700 mb-1"
                    >
                        RUC
                    </label>

                    <input
                        id="razon_social"
                        name="razon_social"
                        type="text"
                        autoComplete="razon_social"
                        placeholder="17XXXXXX00"
                        required
                        className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="razon_social"
                        className="block text-base font-medium text-gray-700 mb-1"
                    >
                        Razón Social
                    </label>
                    <input
                        id="razon_social"
                        name="razon_social"
                        type="text"
                        autoComplete="razon_social"
                        placeholder="Perseo"
                        required
                        className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-base font-medium text-gray-700 mb-1"
                    >
                        Correo
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="correo@dominio.com"
                        required
                        className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="whatsapp"
                        className="block text-base font-medium text-gray-700 mb-1"
                    >
                        Whatsapp
                    </label>
                    <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="0987654321"
                        required
                        className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block text-base font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Registrarme
                    </button>
                </div> */}
            </form>

            <p className="text-center text-gray-500 text-sm">
                ¿Ya tienes una cuenta?{" "}
                <Link
                    href={route("login")}
                    className="text-blue-500 hover:text-blue-600"
                >
                    Iniciar sesión
                </Link>
            </p>
        </motion.div>
    );
};
