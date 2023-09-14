import { createContext, useCallback, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
