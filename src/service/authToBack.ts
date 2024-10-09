import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { User } from "@/lib/types";

const BASE_URL = "http://localhost:3001";

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
            const {
                username,
                userId,
                isRegistered,
                score,
                current_month_score,
            } = jwtDecode<User>(token);

            Cookies.set("token", token, {
                expires: 1,
                secure: true,
                sameSite: "None",
            });
            console.log(
                username,
                userId,
                isRegistered,
                score,
                current_month_score
            );
            return {
                username,
                userId,
                isRegistered,
                score,
                current_month_score,
            };
        } else {
            throw new Error("Une erreur est survenue lors de la connexion");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
}

export async function logoutUser(user: User) {
    try {
        const response = await fetch(`${BASE_URL}/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        // Log the API response status and body
        console.log("Logout API response status:", response.status);
        const responseBody = await response.text();
        console.log("Logout API response body:", responseBody);

        if (response.ok) {
            console.log("Déconnexion réussie");
        } else {
            throw new Error(
                "Une erreur est survenue lors de la déconnexion côté serveur."
            );
        }
    } catch (error) {
        console.error("An error occurred during logout", error);
        throw error;
    } finally {
        Cookies.remove("token");
        localStorage.removeItem("score");
    }
}
