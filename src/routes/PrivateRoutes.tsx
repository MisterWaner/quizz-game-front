import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRoute() {
    const token = Cookies.get("token") as string;

    return token ? <Outlet /> : <Navigate to="/connexion" />;
}
