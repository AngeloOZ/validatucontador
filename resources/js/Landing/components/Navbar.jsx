import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar bg-dimPrimary">
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                <Link href={route("login")}>
                    <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mr-10">
                        Iniciar sesión
                    </li>
                </Link>
                <Link href={route("register")}>
                    <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite">
                        Registrarme
                    </li>
                </Link>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                <div
                    className={`${
                        !toggle ? "hidden" : "flex"
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        <Link href={route("login")}>
                            <li className="font-poppins font-medium cursor-pointer text-[16px] text-white mb-4">
                                Iniciar sesión
                            </li>
                        </Link>
                        <Link href={route("register")}>
                            <li className="font-poppins font-medium cursor-pointer text-[16px] text-white">
                                Registrarme
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
