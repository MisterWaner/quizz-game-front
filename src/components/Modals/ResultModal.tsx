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

    const handleNextQuestion: () => void = () => {
        generateQuestion(type);
        incrementQuestionCounter();
        incrementProgress();
        console.log({ progress, totalProgress, questionCounter });
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
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
                        onClick={handleNextQuestion}
                    >
                        Suivant
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
