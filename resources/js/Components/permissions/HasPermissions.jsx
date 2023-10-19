import { useAuth } from "@/context";

export const HasPermissions = ({ permission, children }) => {
    const { loggedUser } = useAuth();

    if (!loggedUser) return null;

    const { listPermissions } = loggedUser;

    if (!listPermissions.includes(permission)) return null;

    return children;
};
