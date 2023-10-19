import { Link, useForm } from "@inertiajs/react";
import { Button, Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { InputPassword } from ".";

export const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="py-8 px-8 w-[400px] mx-auto bg-white rounded-xl shadow-xl space-y-4"
        >
            <h2 className="text-2xl font-bold text-center">
                Que gusto que te unas
            </h2>
            <form className="space-y-4" onSubmit={submit}>
                <Input
                    label="Nombres"
                    type="text"
                    name="name"
                    value={data.name}
                    variant="bordered"
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    autoComplete="name"
                    isInvalid={!!errors.name}
                    errorMessage={errors.name}
                />

                <Input
                    label="Correo electrónico"
                    type="email"
                    name="email"
                    value={data.email}
                    variant="bordered"
                    onChange={(e) => setData("email", e.target.value)}
                    required
                    autoComplete="email"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email}
                />

                <InputPassword
                    label="Contraseña"
                    name="password"
                    type="password"
                    value={data.password}
                    variant="bordered"
                    onChange={(e) => setData("password", e.target.value)}
                    required
                    placeholder="********"
                    autoComplete="new-passwor"
                    isInvalid={!!errors.password}
                    errorMessage={errors.password}
                />

                <InputPassword
                    label="Confirmar contraseña"
                    name="password_confirmation"
                    type="password"
                    value={data.password_confirmation}
                    variant="bordered"
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    required
                    placeholder="********"
                    autoComplete="new-passwor"
                    isInvalid={!!errors.password_confirmation}
                    errorMessage={errors.password_confirmation}
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
