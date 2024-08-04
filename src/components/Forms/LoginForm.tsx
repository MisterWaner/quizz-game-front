import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import SignUp from "../Modals/SignUp";

export default function LoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema)
    });

    const handleLogin = (data: z.infer<typeof loginSchema>) => {
        console.log(data);
    };
    return (
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
                    <SignUp
                        className="text-slate-950 hover:bg-transparent underline underline-offset-4"
                        label="Inscris - toi !"
                    />
                </div>
            </form>
        </Form>
    );
}
