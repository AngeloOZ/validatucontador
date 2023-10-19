import { useEffect } from "react";
import { Link, useForm } from "@inertiajs/react";

import { motion } from "framer-motion";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { InputPassword } from ".";

export const Login = ({ canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="py-8 px-8 w-[400px] mx-auto bg-white rounded-xl shadow-xl space-y-4"
        >
            <h2 className="text-3xl font-bold text-center">
                Bienvenido de vuelta
            </h2>
            <form className="space-y-4" onSubmit={submit}>
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={data.email}
                    variant="bordered"
                    onChange={(e) => setData("email", e.target.value)}
                    required
                    placeholder="correo@dominio.com"
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
                    autoComplete="current-password"
                    isInvalid={!!errors.password}
                    errorMessage={errors.password}
                />

                <Checkbox
                    value={data.remember}
                    onChange={(e) => setData("remember", e.target.checked)}
                >
                    Recordarme
                </Checkbox>

                <Button
                    isLoading={processing}
                    type="submit"
                    color="primary"
                    fullWidth
                >
                    Iniciar Sesión
                </Button>

                {canResetPassword && (
                    <div>
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
                        >
                            He olvidado mi contraseña
                        </Link>
                    </div>
                )}
            </form>
            <p className="text-center text-gray-500 text-sm">
                ¿Aún no te unes?{" "}
                <Link
                    href={route("register")}
                    className="text-blue-500 hover:text-blue-600"
                >
                    Registrate
                </Link>
            </p>
        </motion.div>
    );
};
