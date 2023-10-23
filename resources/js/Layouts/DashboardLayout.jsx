import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { SidebarContext } from "@/context/dash";
import { NavbarWrapper, SidebarWrapper, useLockedBody } from "@/Components/Dash";

export const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [_, setLocked] = useLockedBody(false);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setLocked(!sidebarOpen);
    };

    return (
        <NextThemesProvider defaultTheme="system" attribute="class">
            <SidebarContext.Provider
                value={{
                    collapsed: sidebarOpen,
                    setCollapsed: handleToggleSidebar,
                }}
            >
                <section className="flex">
                    <SidebarWrapper />
                    <NavbarWrapper>{children}</NavbarWrapper>
                </section>
            </SidebarContext.Provider>
        </NextThemesProvider>
    );
};
