import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function ErrorRegisterDialog({ error }: { error: string }) {
    return (
        <Dialog>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Erreur</DialogTitle>
                    <DialogDescription>
                        Une erreur est survenue lors de l&apos;enregistrement de
                        ton compte.
                        {error}
                    </DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <div className="flex h-full justify-end">
                        <Button className="w-1/3" variant="destructive">
                            Fermer
                        </Button>
                    </div>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}

function SuccessRegisterDialog() {
    const navigate = useNavigate();

    return (
        <Dialog>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Inscription réussie</DialogTitle>
                    <DialogDescription>
                        Tu fais maintenant parti de la communauté MathémaQuiz.
                    </DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <div className="flex h-full justify-end">
                        <Button className="w-1/3" variant="destructive" onClick={() => navigate("/connexion")}>
                            Fermer
                        </Button>
                    </div>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}

export default function RegisterDialog( {error}: {error: string}) {
    if (error) {
        return <ErrorRegisterDialog error={error} />;
    } else {
        return <SuccessRegisterDialog />;
    }
}
