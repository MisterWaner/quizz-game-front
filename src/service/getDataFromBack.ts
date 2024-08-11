const BASE_URL = "http://localhost:3001";

import { Question } from "@/lib/types";

export const getQuestions = async (type: string): Promise<Question[]> => {
    try {
        const response = await fetch(`${BASE_URL}/algebra/${type}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response);

    if (response.ok) {
        const responseData = await response.json();
        return responseData;
    } else {
        throw new Error("Une erreur est survenue lors de la creation");
    }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};
