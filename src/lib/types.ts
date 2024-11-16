export type Course = {
    id: number;
    title: string;
    path: string;
    type: string;
};

export type Question = {
    id: number;
    question: string;
    correct_answer: string;
};

export type QCMQuestion = {
    id: number;
    question: string;
    correct_answer: string;
    options: string[];
}

export type User = {
    userId?: number;
    username?: string;
    password?: string;
    isRegistered?: boolean;
    score?: number;
    current_month_score?: number,
    last_month_score?: number,
};
