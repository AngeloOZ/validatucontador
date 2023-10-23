import React from "react";

export const SidebarMenu = ({ title, children }) => {
    if (!title) {
        return (
            <div className="flex gap-2 flex-col">
                {children}
            </div>
        );
    }

    return (
        <div className="flex gap-2 flex-col">
            <span className="text-xs font-normal ">{title}</span>
            {children}
        </div>
    );
};
