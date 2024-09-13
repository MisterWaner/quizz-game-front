const BASE_URL = "http://localhost:3001";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { User } from "@/lib/types";

export async function regiserUser(user: User) {
    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData, "Les données sont enregistrées");
            return responseData;
        } else {
            throw new Error("Une erreur est survenue lors de l'enregistrement");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
}

export async function loginUser(user: User) {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const { token } = await response.json();
            const { username, userId, isRegistered, score, global_score } =
                jwtDecode<User>(token);

            Cookies.set("token", token, {
                expires: 1,
                secure: true,
                sameSite: "None",
            });
            console.log(username, userId, isRegistered, score, global_score);
            return { username, userId, isRegistered, score, global_score };
        } else {
            throw new Error("Une erreur est survenue lors de la connexion");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
}

export async function checkAuth(token: string) {
    try {
        const response = await fetch(`${BASE_URL}/auth/check-auth`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const { userId, username, isRegistered, score, global_score } =
                jwtDecode<User>(token);
            const user = {
                userId,
                username,
                isRegistered,
                score,
                global_score,
            };
            console.log(user, "Les données sont enregistrées");
            const responseData = await response.json();
            console.log(responseData, "Les données sont enregistrées");
            return responseData;
        } else {
            throw new Error("Une erreur est survenue lors de la connexion");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
}

export async function logOutUser() {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        Cookies.remove("token");
        return response;
    } else {
        throw new Error("Une erreur est survenue lors de la déconnexion");
    }
}
