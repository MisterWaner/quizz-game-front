import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function useRedirect() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            navigate("/compte");
        } else {
            navigate("/connexion");
        }
    }, [navigate]);
}

export default useRedirect;