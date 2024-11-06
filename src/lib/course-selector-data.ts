import { Course } from "@/lib/types";

type CourseSeclectorData = {
    label: string;
    courses: Course[];
};

export const courseSelectorData: CourseSeclectorData[] = [
    {
        label: "Algèbre",
        courses: [
            {
                id: 1,
                title: "Addition",
                path: "addition",
                type: "addition",
            },
            {
                id: 2,
                title: "Soustraction",
                path: "soustraction",
                type: "soustraction",
            },
            {
                id: 3,
                title: "Multiplication",
                path: "multiplication",
                type: "multiplication",
            },
            {
                id: 4,
                title: "Quizz aléatoire",
                path: "random",
                type: "random",
            }
        ],
    },
    {
        label: "Géométrie",
        courses: [
            {
                id: 5,
                title: "Aire et Périmètre",
                path: "aire-perimetre",
                type: "aire-perimetre",
            },
            {
                id: 6,
                title: "Propriétés",
                path: "proprietes",
                type: "proprietes",
            },
        ],
    },
];
