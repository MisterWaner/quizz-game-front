import { useState, useEffect } from "react";
import { User } from "@/lib/types";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const useAuthToken = () => {
    const [token, setToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<User | null>(null);

    useEffect(() => {
        const fetchTokenAndUserInfo =  () => {
            try {
                const token = Cookies.get("token");

                if (!token) {
                    throw new Error("Aucun token trouvé");
                }

                const { username, userId, isRegistered, score, current_month_score }: User =
                    jwtDecode(token);

                setToken(token);
                setUserInfo({
                    username,
                    userId,
                    isRegistered,
                    score,
                    current_month_score,
                });
            } catch (error) {
                console.error("Erreur lors de la récupération du token", error);
            }
        }
        fetchTokenAndUserInfo();
    }, []);

    console.log(userInfo);
    return { token, userInfo };
};

export default useAuthToken;

