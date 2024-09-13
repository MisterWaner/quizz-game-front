import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRoute({children}: {children: React.ReactNode}) {
    const token = Cookies.get("token") as string;

    if (!token) {
        return <Navigate to="/connexion" />;
    }

    return children
}
