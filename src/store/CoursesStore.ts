import { create } from "zustand";

export type CourseState = {
    title: string;
    isSelected: boolean;
    type: string;
    question: {
        statement: string | null;
        answer: number | string | null;
    } | null;

    username: string;
    userId: number;
    score: number;
    dailyScore: number;
    playerAnswer: number | string;
    questionCounter: number;
    totalQuestions: number;
    progress: number;
    totalProgress: number;
    globalTotalQuestions: number;
};

type Action = {
    selectCourse: (
        title: CourseState["title"],
        isSelected: CourseState["isSelected"],
        type: CourseState["type"]
    ) => void;
    setPlayer: (
        userId: CourseState["userId"],
        username: CourseState["username"],
        score: CourseState["score"],
        dailyScore: CourseState["dailyScore"]
    ) => void;
    generateQuestion: (type: string) => void;
    incrementScore: () => void;
    incrementDailyScore: () => void;
    incrementQuestionCounter: () => void;
    resetQuestionCounter: () => void;
    resetScore: () => void;
    setGlobalTotalQuestions: () => void;
    incrementProgress: () => void;
    resetProgress: () => void;
};

export const useCourseStore = create<CourseState & Action>()((set, get) => ({
    type: "",
    title: "",
    isSelected: false,
    question: null,
    score: 0,
    dailyScore: 0,
    username: "",
    userId: 0,
    dailyPercentage: 0,
    playerAnswer: "",
    questionCounter: 0,
    totalQuestions: 10,
    progress: 0,
    totalProgress: 100,
    globalTotalQuestions: 0,

    selectCourse(title, isSelected, type) {
        set({ title, isSelected, type });
        console.log({ title, isSelected, type });
    },
    setPlayer(userId, username, score, dailyScore) {
        set({ userId, username, score, dailyScore });
        console.log({ userId, username, score, dailyScore });
    },
    incrementQuestionCounter: () => {
        const { questionCounter, totalQuestions } = get();
        for (let i = 0; i < totalQuestions; i++) {
            set({ questionCounter: questionCounter + 1 });
        }
    },
    incrementScore: () => {
        set((state) => ({ score: state.score + 1 }));
    },
    incrementDailyScore: () => {
        const { score } = get();
        set((state) => ({
            dailyScore: state.dailyScore + score,
        }));
    },
    // Reset the score
    resetScore: () => {
        set((state) => ({ score: (state.score = 0) }));
    },
    // Reset the question counter
    resetQuestionCounter: () => {
        set({ questionCounter: 0 });
    },
    incrementProgress: () => {
        const { progress, totalProgress } = get();
        for (let i = 0; i < totalProgress; i++) {
            set({ progress: progress + 10 });
        }
    },
    resetProgress: () => {
        set({ progress: 0 });
    },
    setGlobalTotalQuestions: () => {
        const { globalTotalQuestions } = get();
        set({ globalTotalQuestions: globalTotalQuestions + 1 });
    },
    generateQuestion: (type) => {
        let question;
        if (type === "addition") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 100);
            question = {
                statement: `Quelle est la somme de ${number1} + ${number2} ?`,
                answer: number1 + number2,
            };
        } else if (type === "soustraction") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 100);
            if (number1 < number2) {
                question = {
                    statement: `Quelle est la différence de ${number2} - ${number1} ?`,
                    answer: number2 - number1,
                };
            } else {
                question = {
                    statement: `Quelle est la déduction de ${number1} - ${number2} ?`,
                    answer: number1 - number2,
                };
            }
        } else if (type === "multiplication") {
            const number1 = Math.floor(Math.random() * 10);
            const number2 = Math.floor(Math.random() * 10);
            question = {
                statement: `Quelle est le produit de ${number1} x ${number2} ?`,
                answer: number1 * number2,
            };
        } else if (type === "division") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 10);
            question = {
                statement: `Quelle est la quotient de ${number1} / ${number2} ?`,
                answer: number1 / number2,
            };
        } else {
            question = null;
        }
        set({ question, type });
    },
}));
