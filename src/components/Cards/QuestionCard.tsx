import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ResultModal from "@/components/Modals/ResultModal";
import SaveScoreModal from "@/components/Modals/SaveScoreModal";
import Timer from "@/components/Timer";

import { useCourseStore } from "@/store/CoursesStore";
import { getQuestions } from "@/service/getDataFromBack";
import { Question } from "@/lib/types";

export default function QuestionCard({ type }: { type: string }) {
    const [dialogTitle, setDialogTitle] = useState<string>("");
    const [dialogTitleColor, setDialogTitleColor] = useState<string>("");
    const [dialogActionColor, setDialogActionColor] = useState<string>("");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
    const navigate = useNavigate();

    const playerAnswer = useCourseStore((state) => state.playerAnswer);
    const progress = useCourseStore((state) => state.progress);
    const totalProgress = useCourseStore((state) => state.totalProgress);
    const incrementScore = useCourseStore((state) => state.incrementScore);
    const resetProgress = useCourseStore((state) => state.resetProgress);
    const resetScore = useCourseStore((state) => state.resetScore);
    const resetQuestionCounter = useCourseStore(
        (state) => state.resetQuestionCounter
    );
    const incrementDailyScore = useCourseStore(
        (state) => state.incrementDailyScore
    );
    const resetTimer = useCourseStore((state) => state.resetTimer);

    useEffect(() => {
        const loadQuestions = async () => {
            const questions = await getQuestions(type);
            setQuestions(questions);
            setCurrentQuestionIndex(0);

            setTimeout(() => {
                resetTimer(15);
                setIsTimerRunning(true);
            }, 1000);
        };

        loadQuestions();
    }, [resetTimer, type]);

    const currentQuestion = questions[currentQuestionIndex];

    const handleNextQuestion = () => {
        setIsTimerRunning(false);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeout(() => {
                
                setIsTimerRunning(true);
            }, 2000);
        } else {
            setDialogTitle("Le quizz est terminé !");
            setDialogTitleColor("text-black");
            setDialogActionColor("bg-black text-slate-50 hover:bg-black/90");
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        useCourseStore.setState({
            playerAnswer: value,
        });
    };

    const checkPlayerAnswer = (playerAnswer: string | number) => {
        if (currentQuestion) {
            if (Number(playerAnswer) === Number(currentQuestion.answer)) {
                setDialogTitle("Bravo ! Bonne réponse !");
                setDialogTitleColor("text-green-500");
                setDialogActionColor(
                    "bg-green-500 text-slate-50 hover:bg-green-500/90"
                );
                incrementScore();
            } else if (
                Number(playerAnswer) !== Number(currentQuestion.answer)
            ) {
                setDialogTitle(
                    `Dommage ! Mauvaise réponse! La bonne réponse est ${currentQuestion.answer}`
                );
                setDialogTitleColor("text-red-500");
                setDialogActionColor(
                    "bg-red-500 text-slate-50 hover:bg-red-500/90"
                );
            } else {
                setDialogTitle("");
                setDialogTitleColor("");
                setDialogActionColor("");
            }
            setIsTimerRunning(false);
        }

        if (progress === totalProgress) {
            setDialogTitle("Bravo ! Tu as terminé le quizz !");
            setDialogTitleColor("text-green-500");
            setDialogActionColor(
                "bg-green-500 text-slate-50 hover:bg-green-500/90"
            );
        }
    };

    const handleSubmit = () => {
        checkPlayerAnswer(playerAnswer);
        useCourseStore.setState({
            playerAnswer: "",
        });
        setIsTimerRunning(false);
        handleNextQuestion();
    };

    const handleTimeOut = () => {
        handleSubmit();
        setIsTimerRunning(false);
    };

    const data = useCourseStore((state) => ({
        score: state.score,
    }));

    const handleRestart = () => {
        incrementDailyScore();
        resetProgress();
        resetScore();
        resetQuestionCounter;
    };

    const handleSaveScore = () => {
        incrementDailyScore();
        updateDailyScore(player?.id, data);
        resetProgress();
        resetQuestionCounter();
        navigate("/jouer");
    };

    return (
        <>
            {progress === totalProgress ? (
                <Card className="md:w-1/2 mx-auto mt-24">
                    <CardHeader>
                        <CardTitle className="text-center uppercase text-green-500">
                            Fin !
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm font-bold text-green-500 uppercase">
                            Bravo {player?.username} ! tu as terminé le quizz !
                        </p>
                    </CardContent>
                    <CardFooter className="justify-end">
                        <SaveScoreModal
                            handleSaveScore={handleSaveScore}
                            handleRestart={handleRestart}
                        />
                    </CardFooter>
                </Card>
            ) : (
                <Card className="md:w-1/2 mx-auto mt-24">
                    <CardHeader>
                        <CardTitle>Question</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm italic">
                            {currentQuestion?.question}
                        </p>
                        <div
                            className="grid grid-cols-3 items-center gap-4 mt-4"
                            tabIndex={0}
                        >
                            <Label>Ta réponse :</Label>
                            <Input
                                className="col-span-2"
                                type="text"
                                onChange={handleInputChange}
                                value={playerAnswer}
                            />
                        </div>
                        {isTimerRunning && <Timer onTimeOut={handleTimeOut} />}
                    </CardContent>
                    <CardFooter className="justify-end">
                        <ResultModal
                            dialogTitle={dialogTitle}
                            dialogTitleColor={dialogTitleColor}
                            dialogActionColor={dialogActionColor}
                            handleSubmit={handleSubmit}
                        />
                    </CardFooter>
                </Card>
            )}
        </>
    );
}
