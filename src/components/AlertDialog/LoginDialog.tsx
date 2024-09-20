import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ErrorLoginDialog({ error, open, onClose }: { error: string, open: boolean, onClose: () => void }) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Erreur</DialogTitle>
                    <DialogDescription>
                        {error.toString()}
                    </DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <div className="flex h-full justify-end">
                        <Button className="w-1/3" variant="destructive" onClick={onClose}>
                            Fermer
                        </Button>
                    </div>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}

export function SuccessLoginDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Connexion réussie</DialogTitle>
                    <DialogDescription>
                        Vous êtes maintenant connecté.
                    </DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <div className="flex h-full justify-end">
                        <Button
                            className="w-1/3"
                            variant="default"
                            onClick={onClose}
                        >
                            Fermer
                        </Button>
                    </div>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
