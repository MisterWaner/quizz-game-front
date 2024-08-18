const BASE_URL = "http://localhost:3001";

import { Question, User } from "@/lib/types";

export async function getQuestions(type: string): Promise<Question[]> {
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
}

export async function getDailyScores(): Promise<User[]> {
    try {
        const response = await fetch(`${BASE_URL}/scores/daily`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error(
                "Une erreur est survenue lors de la récupération des scores"
            );
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
}

export async function getGlobalScores(): Promise<User[]> {
    try {
        const response = await fetch(`${BASE_URL}/scores/global`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);

        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error(
                "Une erreur est survenue lors de la récupération des scores"
            );
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
}