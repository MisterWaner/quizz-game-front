import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useState } from "react";

import { registerSchema } from "@/lib/zod-schemas";
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
import { regiserUser } from "@/service/authToBack";
import RegisterDialog from "../AlertDialog/RegisterDialog";


export default function SignUpForm() {

    const [error, setError] = useState<string>("");

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            password: "",
            confirmation: ""
        },
    });

    function onSubmit(values: z.infer<typeof registerSchema>) {
        try {
            regiserUser(values);
            return (
                <RegisterDialog error={error} />
            )
        } catch (error) {
            console.error(error, "Erreur d'envoie des données au back");
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Une erreur est survenue lors de l'enregistrement");
            }
            return (
                <RegisterDialog error={error instanceof Error ? error.message : "Une erreur est survenue lors de l'enregistrement"} />
            )
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pseudo</FormLabel>
                            <FormControl>
                                <Input placeholder="Pseudo" {...field} />
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
                            <FormLabel>Mot de Passe</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Mot de passe"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirmation</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Confirme ton mot de passe"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <Button type="submit" className="col-start-2">S&apos;enregistrer</Button>
                </div>
            </form>
        </Form>
    );
}
