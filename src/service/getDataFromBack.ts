const BASE_URL = "http://localhost:3001";

import { Question, User, QCMQuestion } from "@/lib/types";

export async function getMathQuestions(type: string): Promise<Question[]> {
    try {
        const response = await fetch(`${BASE_URL}/algebra/${type}`, {
            method: "GET",
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

export async function getGeometryQuestions(type: string): Promise<QCMQuestion[]> {
    try {
        const response = await fetch(`${BASE_URL}/geometry/${type}`, {
            method: "GET",
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
            method: "GET",
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
            method: "GET",
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

export async function getTop5DailyScores(): Promise<User[]> {
    try {
        const response = await fetch(`${BASE_URL}/scores/daily-five`, {
            method: "GET",
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

export async function getTop5GlobalScores(): Promise<User[]> {
    try {
        const response = await fetch(`${BASE_URL}/scores/global-five`, {
            method: "GET",
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
