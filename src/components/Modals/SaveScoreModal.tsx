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

export default function SaveScoreModal({
    handleSaveScore,
    handleRestart,
}: {
    handleSaveScore: () => void;
    handleRestart: () => void;
}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="font-semibold w-3/6">
                    Enregistrer mon score
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Ton score a été enregistré !
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex flex-row gap-2">
                    <AlertDialogAction asChild>
                        <Button
                            className="font-semibold w-3/6"
                            onClick={handleRestart}
                        >
                            Recommencer
                        </Button>
                    </AlertDialogAction>
                    <AlertDialogAction asChild>
                        <Button
                            className="font-semibold w-3/6"
                            onClick={handleSaveScore}
                        >
                            Tous les quizz
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
