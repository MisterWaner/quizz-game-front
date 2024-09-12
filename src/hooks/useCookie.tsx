import { useState, useEffect } from "react";
import { User } from "@/lib/types";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function useCookie() {
    const token = Cookies.get("token") as string;
    const { username, userId, isRegistered, score, global_score }: User =
        jwtDecode(token);

    const [cookie, setCookie] = useState<User>({
        username,
        userId,
        isRegistered,
        score,
        global_score,
    });

    useEffect(() => {
        if (token) {
            setCookie({
                username,
                userId,
                isRegistered,
                score,
                global_score,
            });
        }
    }, [token, username, userId, isRegistered, score, global_score]);

    return cookie;
}

export default useCookie;
