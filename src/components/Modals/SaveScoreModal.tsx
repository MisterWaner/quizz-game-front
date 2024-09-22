import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function SaveScoreModal({
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
                    <AlertDialogTitle className="text-slate-950">
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

export function EndedDiscoverModal({
    handleCancel,
    handleRegister,
}: {
    handleCancel: () => void;
    handleRegister: () => void;
}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="font-semibold w-3/6">Terminer</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-slate-950">
                        Tu as terminé la découverte !
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    Tu peux créer ton compte pour continuer à jouer et
                    sauvegarder ton score.
                </AlertDialogDescription>
                <AlertDialogFooter className="flex flex-row gap-2">
                    <AlertDialogAction asChild>
                        <Button
                            className="font-semibold w-3/6"
                            onClick={handleRegister}
                        >
                            Créer mon compte
                        </Button>
                    </AlertDialogAction>
                    <AlertDialogCancel asChild>
                        <Button
                            className="font-semibold w-3/6"
                            variant="destructive"
                            onClick={handleCancel}
                        >
                            Terminer
                        </Button>
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
