import { create } from "zustand";
import Cookies from "js-cookie";
import { loginUser, checkAuth } from "@/service/authToBack";
import { User } from "@/lib/types";

interface AuthState {
    user: User | null;
    error: string | null;
    login: (userData: { username: string; password: string }) => Promise<void>;
    logout: () => void;
    checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    error: null,

    login: async (userData) => {
        try {
            const response = await loginUser(userData);
            set({ user: response, error: null });

            Cookies.set("token", response.token, { expires: 1 });
        } catch (error) {
            if (error instanceof Error) {
                set({ error: error.message });
            } else {
                set({ error: "Une erreur est survenue lors de la connexion" });
            }
        }
    },

    logout: () => {
        Cookies.remove("token");
        set({ user: null, error: null });
    },

    checkAuth: async () => {
        const token = Cookies.get("token");
        if (token) {
            const response = await checkAuth(token);
            if (response.ok) {
                const userData = await response.json();
                set({ user: userData, error: null });
            } else {
                set({ user: null, error: null });
                Cookies.remove("token");
            }
        } else {
            set({ user: null, error: null });
            Cookies.remove("token");
        }
    },
}));
