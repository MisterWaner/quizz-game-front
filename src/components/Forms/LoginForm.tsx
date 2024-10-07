import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";
import { useState } from "react";

import { loginSchema } from "@/lib/zod-schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginDialog from "../AlertDialog/LoginDialog";
import { loginUser } from "@/service/authToBack";

export default function LoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });

    const [loginStatus, setLoginStatus] = useState<string>("");
    const [loginMessage, setLoginMessage] = useState<string>("");
    const [showLoginDialog, setShowLoginDialog] = useState<boolean>(false);
    useState<boolean>(false);
    const [colorTitle, setColorTitle] = useState<string>("");

    const resetForm = (): void => form.reset({
        username: "",
        password: "",
    });

    const handleLogin = async (data: z.infer<typeof loginSchema>) => {
        try {
            await loginUser(data);
            setColorTitle("text-green-500");
            setLoginStatus("Connexion réussie");
            setLoginMessage("Bravo tu es maintenant connecté !");
            setShowLoginDialog(true);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error, "Erreur d'envoie des données au back");
                setColorTitle("text-red-500");
                setLoginStatus("Erreur de connexion");
                setLoginMessage(error.message);
                setShowLoginDialog(true);
            }
        }
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleLogin)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pseudo</FormLabel>
                                <FormControl>
                                    <Input placeholder="pseudo" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mot de passe</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Mot de passe"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Button
                            type="submit"
                            onClick={() => setShowLoginDialog(true)}
                        >
                            Se connecter
                        </Button>

                        <LoginDialog
                            loginMessage={loginMessage}
                            loginStatus={loginStatus}
                            colorTitle={colorTitle}
                            open={showLoginDialog}
                            onOpenChange={(open) => setShowLoginDialog(open)}
                            onClose={resetForm}
                        />
                    </div>

                    <div className="text-sm text-slate-950 dark:text-slate-400">
                        Pas encore de compte ?{" "}
                        <Link
                            to="/inscription"
                            className="text-slate-950 hover:bg-transparent underline underline-offset-4"
                        >
                            Inscris - toi !
                        </Link>
                    </div>
                </form>
            </Form>
        </>
    );
}
