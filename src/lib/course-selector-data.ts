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
        ],
    },
    {
        label: "Géometrie",
        courses: [
            {
                id: 4,
                title: "Cercle",
                path: "cercle",
                type: "cercle",
            },
            {
                id: 5,
                title: "Cylindre",
                path: "cylindre",
                type: "cylindre",
            },
            {
                id: 6,
                title: "Sphere",
                path: "sphere",
                type: "sphere",
            },
        ],
    },
];
