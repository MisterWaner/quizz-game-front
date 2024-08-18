export type Course = {
    id: number;
    title: string;
    path: string;
    type: string;
};

export type Question = {
    id: number;
    question: string;
    answer: string;
};

export type User = {
    id: number;
    username: string;
    password: string;
    isRegistered: boolean;
    score: number;
    global_score: number;
};
