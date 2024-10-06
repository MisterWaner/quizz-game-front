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
    const [registerStatus, setRegisterStatus] = useState<string>("");
    const [registerMessage, setRegisterMessage] = useState<string>("");
    const [showRegisterDialog, setShowRegisterDialog] =
        useState<boolean>(false);
    const [colorTitle, setColorTitle] = useState<string>("");

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            password: "",
            confirmation: "",
        },
    });

    async function onSubmit(values: z.infer<typeof registerSchema>) {
        try {
            await regiserUser(values);
            setColorTitle("text-green-500");
            setRegisterStatus("Inscription réussie");
            setRegisterMessage("Bravo tu fais maintenant parti des ninjas !");
            setShowRegisterDialog(true);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error, "Erreur d'envoie des données au back");
                setColorTitle("text-red-500");
                setRegisterStatus("Erreur d'enregistrement");
                setRegisterMessage(error.message);
                setShowRegisterDialog(true);
            }
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
                    <Button
                        type="submit"
                        className="col-start-2"
                        onClick={() => setShowRegisterDialog(true)}
                    >
                        S&apos;enregistrer
                    </Button>

                    <RegisterDialog
                        registerStatus={registerStatus}
                        registerMessage={registerMessage}
                        colorTitle={colorTitle}
                        open={showRegisterDialog}
                        onOpenChange={(open) => setShowRegisterDialog(open)}
                    />
                </div>
            </form>
        </Form>
    );
}
