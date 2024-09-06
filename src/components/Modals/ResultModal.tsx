import { useState, useEffect, useCallback } from "react";

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogDescription
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function ResultModal({
    dialogTitle,
    dialogTitleColor,
    dialogActionColor,
    handleSubmit,
    resetTimer,
    handleNextQuestion
}: {
    dialogTitle: string;
    dialogTitleColor: string;
    dialogActionColor: string;
    handleSubmit: () => void;
    resetTimer: () => void;
    handleNextQuestion: () => void;
}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                setIsOpen(true);
                handleSubmit();
            }
        },
        [handleSubmit]
    );

    

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
                <Button className="font-semibold w-2/6" onClick={handleSubmit}>
                    Valider
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogDescription style={{visibility: "hidden"}}>
                    Fenêtre de confirmation
                </AlertDialogDescription>
                <AlertDialogHeader>
                    <AlertDialogTitle className={`${dialogTitleColor}`}>
                        {dialogTitle}
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction
                        className={`${dialogActionColor} font-semibold`}
                        onClick={() => {
                            handleNextQuestion();
                            resetTimer();
                        }}
                    >
                        Suivant
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
