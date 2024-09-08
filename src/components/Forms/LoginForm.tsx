import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
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
import {
    SuccessLoginDialog,
    ErrorLoginDialog,
} from "../AlertDialog/LoginDialog";
import { useAuthStore } from "@/store/AuthStore";

export default function LoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });

    const { login, error } = useAuthStore();
    const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleLogin = async(data: z.infer<typeof loginSchema>) => {
        await login(data);

        if (!error) {
            setShowSuccessDialog(true);
        } else {
            setShowErrorDialog(true);
        }
    };

    const handleCloseErrorDialog = () => {
        setShowErrorDialog(false);
    };

    const handleCloseSuccessDialog = () => {
        setShowSuccessDialog(false);
        navigate("/compte");
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

                    <Button type="submit">Se connecter</Button>

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

            {error ? (
                <ErrorLoginDialog
                    error={error}
                    open={showErrorDialog}
                    onClose={handleCloseErrorDialog}
                />
            ) : (
                <SuccessLoginDialog
                    open={showSuccessDialog}
                    onClose={handleCloseSuccessDialog}
                />
            )}
        </>
    );
}
