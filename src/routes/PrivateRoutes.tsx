import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/AuthStore";

export default function PrivateRoute() {
    const { user } = useAuthStore();

    return user ? <Outlet /> : <Navigate to="/connexion" />;
}
