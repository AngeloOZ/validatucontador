import React from "react";
import { StyledBurgerButton } from "./navbar.styles";
import { useSidebarContext } from "@/context/dash";
import { FaBars } from "react-icons/fa";

export const BurguerButton = () => {
    const { collapsed, setCollapsed } = useSidebarContext();

    return (
        <div
            className={StyledBurgerButton()}
            open={collapsed}
            onClick={setCollapsed}
        >
            <FaBars size={23} />
        </div>
    );
};
