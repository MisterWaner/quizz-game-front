import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { User } from "@/lib/types";

const BASE_URL = "http://localhost:3001";

export async function updateScore(score: number) {
    const token = Cookies.get("token");

    if (!token) {
        throw new Error("Aucun token trouvé");
    }

    const { userId }: User = jwtDecode(token);
    
    try {
        const response = await fetch(`${BASE_URL}/users/${userId}/score`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ score, userId }),
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData, "Les données sont enregistrées");
            return responseData;
        } else {
            const responseData = await response.json();
            console.log(responseData);
            throw new Error(
                "Une erreur est survenue lors de la mise à jour du score"
            );
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
}
