import { Head } from "@inertiajs/react";
import { ImageCenter, Register } from "./components";

export default function RegisterPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Head title="Registrarse" />
            <div className="hidden md:grid place-content-center w-2/3">
                <h1 className="text-4xl font-bold text-center mb-6">
                    Valida tu contador
                </h1>
                <ImageCenter height="350" className="fill-perseo" />
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-center">
                <Register />
            </div>
        </div>
    );
}
