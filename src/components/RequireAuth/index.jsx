import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const RequireAuth = () => {
    const { auth } = useAuth();

    return auth?.user ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
