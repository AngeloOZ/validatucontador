import { createContext, useContext } from "react";


export const SidebarContext = createContext({});

export const useSidebarContext = () => {
    return useContext(SidebarContext);
};
