import React from "react";
import clsx from "clsx";
import { Link } from "@inertiajs/react";

import { useSidebarContext } from "@/context/dash";

export const SidebarItem = ({ icon, title, isActive, href = "" }) => {
    const { _, setCollapsed } = useSidebarContext();

    const handleClick = () => {
        if (window.innerWidth < 768) {
            setCollapsed();
        }
    };
    return (
        <Link
            href={href}
            className="text-default-900 active:bg-none max-w-full"
        >
            <div
                className={clsx(
                    isActive
                        ? "bg-primary-100 [&_svg_path]:fill-primary-500"
                        : "hover:bg-default-100",
                    "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
                )}
                onClick={handleClick}
            >
                {icon}
                <span className="text-default-900">{title}</span>
            </div>
        </Link>
    );
};
