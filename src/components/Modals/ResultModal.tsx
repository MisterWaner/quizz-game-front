import { useState, useEffect, useCallback } from "react";

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useCourseStore } from "@/store/CoursesStore";

export default function ResultModal({
    dialogTitle,
    dialogTitleColor,
    dialogActionColor,
    handleSubmit,
}: {
    dialogTitle: string;
    dialogTitleColor: string;
    dialogActionColor: string;
    handleSubmit: () => void;
}) {
    const type = useCourseStore((state) => state.type);
    const generateQuestion = useCourseStore((state) => state.generateQuestion);
    const questionCounter = useCourseStore((state) => state.questionCounter);
    const incrementQuestionCounter = useCourseStore(
        (state) => state.incrementQuestionCounter
    );
    const progress = useCourseStore((state) => state.progress);
    const totalProgress = useCourseStore((state) => state.totalProgress);
    const incrementProgress = useCourseStore(
        (state) => state.incrementProgress
    );

    const handleNextQuestion = () => {
        generateQuestion(type);
        incrementQuestionCounter();
        incrementProgress();
        console.log({ progress, totalProgress, questionCounter });
    };

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
            <AlertDialogTrigger asChild aria-pressed="true">
                <Button className="font-semibold w-2/6" onClick={handleSubmit}>
                    Valider
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
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
                        }}
                    >
                        Suivant
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
