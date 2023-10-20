import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { AnimatePresence } from "framer-motion";
import { Login, Register, ImageCenter } from "./components";

export default function LoginPage({ canResetPassword }) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Head title="Iniciar sesión" />
            <div className="hidden md:grid place-content-center w-2/3">
                <h1 className="text-4xl font-bold text-center mb-6">
                    Valida tu contador
                </h1>
                <ImageCenter height="350" className="fill-dimPerseo" />
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-center">
                <Login canResetPassword={canResetPassword} />
            </div>
        </div>
    );
}
