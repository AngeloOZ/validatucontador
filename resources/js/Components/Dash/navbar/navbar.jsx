import React from "react";

import { Navbar, NavbarContent } from "@nextui-org/react";

import { UserDropdown, NotificationsDropdown, BurguerButton } from ".";

export const NavbarWrapper = ({ children }) => {
    return (
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Navbar
                isBordered
                className="w-full"
                classNames={{
                    wrapper: "w-full max-w-full",
                }}
            >
                <NavbarContent className="md:hidden">
                    <BurguerButton />
                </NavbarContent>

                <NavbarContent className="w-full max-md:hidden" />

                <NavbarContent
                    justify="end"
                    className="w-fit data-[justify=end]:flex-grow-0"
                >
                    <NotificationsDropdown />

                    <NavbarContent>
                        <UserDropdown />
                    </NavbarContent>
                </NavbarContent>
            </Navbar>
            <div className="p-5">{children}</div>
        </div>
    );
};
