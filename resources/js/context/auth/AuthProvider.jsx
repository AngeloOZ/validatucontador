import { useEffect, useState } from "react";
import { AuthContext } from ".";

export const AuthProvider = ({ user, children }) => {
    const [loggedUser, setloggedUser] = useState(null);

    useEffect(() => {
        if (user.loggedUser) {
            setloggedUser(user.loggedUser);
        }
    }, [user]);
    
    return (
        <AuthContext.Provider
            value={{
                loggedUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
