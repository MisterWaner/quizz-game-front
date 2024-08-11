import { z } from "zod";

export const registerSchema = z
    .object({
        username: z
            .string()
            .trim()
            .min(2, {
                message:
                    "Le nom d'utilisateur doit contenir au moins 2 caractères",
            })
            .max(50, {
                message:
                    "Le nom d'utilisateur doit contenir moins de 50 caractères",
            }),
        password: z
            .string()
            .trim()
            .min(2, {
                message: "Le mot de passe doit contenir au moins 2 caractères",
            })
            .max(20, {
                message: "Le mot de passe doit contenir moins de 20 caractères",
            })
            .regex(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{2,20}$/,
                {
                    message:
                        "Votre mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial et doit faire 2 caractères minimum et 20 caractères maximum",
                }
            ),
        confirmation: z
            .string()
            .trim()
            .min(2, {
                message: "Le mot de passe doit contenir au moins 2 caractères",
            })
            .max(20, {
                message: "Le mot de passe doit contenir moins de 20 caractères",
            })
            .regex(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{2,20}$/,
                {
                    message:
                        "Votre mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial et doit faire 2 caractères minimum et 20 caractères maximum",
                }
            )
    })
    .refine((data) => data.password === data.confirmation, {
        message: "Le mot de passe et la confimation ne sont pas identiques",
        path: ["confirmation"],
    });

export const loginSchema = z.object({
    username: z
        .string()
        .trim()
        .min(2, {
            message: "Le nom d'utilisateur doit contenir au moins 2 caractères",
        })
        .max(50, {
            message:
                "Le nom d'utilisateur doit contenir moins de 50 caractères",
        }),
    password: z
        .string()
        .trim()
        .min(2, {
            message: "Le mot de passe doit contenir au moins 2 caractères",
        })
        .max(50, {
            message: "Le mot de passe doit contenir moins de 50 caractères",
        }),
});
