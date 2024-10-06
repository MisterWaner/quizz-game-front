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

export default function RegisterDialog({
    registerStatus,
    registerMessage,
    open,
    onOpenChange,
    colorTitle,
}: {
    registerStatus: string;
    registerMessage: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    colorTitle: string;
}) {
    const navigate = useNavigate();

    console.log(registerStatus, registerMessage);
    const handleNavigate = () => {
        if (registerStatus === "Inscription réussie") {
            navigate("/connexion");
        } else {
            navigate("/inscription");
        }
    };
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={colorTitle}>
                        {registerStatus}
                    </DialogTitle>
                    <DialogDescription>{registerMessage}</DialogDescription>
                </DialogHeader>
                <DialogClose asChild>
                    <div className="flex h-full justify-end">
                        <Button
                            className="w-1/3"
                            variant="destructive"
                            onClick={() => {
                                handleNavigate();
                                onOpenChange(false);
                            }}
                        >
                            Fermer
                        </Button>
                    </div>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
