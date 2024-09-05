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
        label: "Géometrie",
        courses: [
            {
                id: 5,
                title: "Cercle",
                path: "cercle",
                type: "cercle",
            },
            {
                id: 6,
                title: "Cylindre",
                path: "cylindre",
                type: "cylindre",
            },
            {
                id: 7,
                title: "Sphere",
                path: "sphere",
                type: "sphere",
            },
        ],
    },
];
