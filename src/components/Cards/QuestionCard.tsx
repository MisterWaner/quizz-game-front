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
import {SaveScoreModal, EndedDiscoverModal} from "@/components/Modals/SaveScoreModal";
import { useCourseStore } from "@/store/CoursesStore";
import { getMathQuestions } from "@/service/getDataFromBack";
import { updateScore } from "@/service/sendDataToBack";
import { QCMQuestion, Question } from "@/lib/types";
import useAuthToken from "@/hooks/useAuthToken";

export default function QuestionCard({ type }: { type: string }) {
    const { token } = useAuthToken();
    const [dialogTitle, setDialogTitle] = useState<string>("");
    const [dialogTitleColor, setDialogTitleColor] = useState<string>("");
    const [dialogActionColor, setDialogActionColor] = useState<string>("");
    const [questions, setQuestions] = useState<Question[] | QCMQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(15);
    const navigate = useNavigate();

    //const dailyScore = useCourseStore((state) => state.dailyScore);
    const score = useCourseStore((state) => state.score);
    const username = useCourseStore((state) => state.username);
    const playerAnswer = useCourseStore((state) => state.playerAnswer);
    const progress = useCourseStore((state) => state.progress);
    const totalProgress = useCourseStore((state) => state.totalProgress);
    const incrementScore = useCourseStore((state) => state.incrementScore);
    const incrementDailyScore = useCourseStore(
        (state) => state.incrementDailyScore
    );
    const incrementProgress = useCourseStore(
        (state) => state.incrementProgress
    );
    //const setPlayer = useCourseStore((state) => state.setPlayer);
    const resetProgress = useCourseStore((state) => state.resetProgress);
    const resetScore = useCourseStore((state) => state.resetScore);
    const resetQuestionCounter = useCourseStore(
        (state) => state.resetQuestionCounter
    );
    //const player = setPlayer(userId, username, score, dailyScore);

    useEffect(() => {
        const loadQuestions = async () => {
            const questions = await getMathQuestions(type);
            setQuestions(questions);
            setCurrentQuestionIndex(0);
        };

        loadQuestions();
    }, [type]);

    useEffect(() => {
        if (isTimerRunning && timer > 0) {
            const intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [isTimerRunning, timer]);

    const currentQuestion = questions[currentQuestionIndex];

    function handleNextQuestion() {
        if (progress !== totalProgress) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            incrementProgress();
        } else if (progress === totalProgress) {
            setDialogTitle("Le quizz est terminé !");
            setDialogTitleColor("text-black");
            setDialogActionColor("bg-black text-slate-50 hover:bg-black/90");
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        useCourseStore.setState({
            playerAnswer: value,
        });
    }

    function checkPlayerAnswer(playerAnswer: string | number) {
        if (currentQuestion) {
            if (Number(playerAnswer) === Number(currentQuestion.correct_answer)) {
                setDialogTitle("Bravo ! Bonne réponse !");
                setDialogTitleColor("text-green-500");
                setDialogActionColor(
                    "bg-green-500 text-slate-50 hover:bg-green-500/90"
                );
                incrementScore();
            } else if (
                Number(playerAnswer) !== Number(currentQuestion.correct_answer)
            ) {
                setDialogTitle(
                    `Dommage ! Mauvaise réponse! La bonne réponse est ${currentQuestion.correct_answer}`
                );
                setDialogTitleColor("text-red-500");
                setDialogActionColor(
                    "bg-red-500 text-slate-50 hover:bg-red-500/90"
                );
            } else if (!Number(playerAnswer) && timer === 0) {
                setDialogTitle(
                    `Dommage ! le temps est écoulé ! La bonne réponse est ${currentQuestion.correct_answer}`
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
    }

    function handleSubmit() {
        checkPlayerAnswer(playerAnswer);
        useCourseStore.setState({
            playerAnswer: "",
        });
        setIsTimerRunning(false);
    }

    function handleTimeOut() {
        handleSubmit();
        setIsTimerRunning(false);
    }

    function handleSaveScoreInLocalStorage() {
        let savedScore = localStorage.getItem("score");
        if (savedScore) {
            const numberSavedScore = Number(savedScore);
            savedScore = (numberSavedScore + score).toString();
            localStorage.setItem("score", savedScore);
            return savedScore;
        } else {
            return localStorage.setItem("score", score.toString());
        }
    }

    if (isTimerRunning && timer === 0) {
        handleTimeOut();
    }

    function resetTimer() {
        setTimer(15);
    }

    const handleRestart = () => {
        incrementDailyScore();
        handleSaveScoreInLocalStorage();
        updateScore(score)
        resetProgress();
        resetScore();
        resetQuestionCounter;
    };

    const handleSaveScore = () => {
        console.log(score);
        incrementDailyScore();
        handleSaveScoreInLocalStorage();
        updateScore(score)
        resetProgress();
        resetScore();
        resetQuestionCounter();
        navigate("/jouer");
    };

    const handleRegister = () => {
        resetProgress();
        resetScore();
        resetQuestionCounter();
        navigate("/inscription");
    }

    const handleCancel = () => {
        resetProgress();
        resetScore();
        resetQuestionCounter();
        navigate("/");
    }

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
                            Bravo {username} ! tu as terminé le quizz !
                        </p>
                    </CardContent>
                    <CardFooter className="justify-end">
                        {token ? (
                        <SaveScoreModal
                            handleSaveScore={handleSaveScore}
                            handleRestart={handleRestart}
                        /> ) : (
                            <EndedDiscoverModal handleCancel={handleCancel} handleRegister={handleRegister} />
                        )}
                    </CardFooter>
                </Card>
            ) : (
                <Card
                    className="md:w-1/2 mx-auto mt-24"
                    onMouseEnter={() => setIsTimerRunning(true)}
                >
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
                                disabled={timer === 0}
                            />
                        </div>
                        {isTimerRunning && timer > 10 ? (
                            <div className="font-bold text-3xl flex w-full justify-center mt-4 text-green-500">
                                {timer}
                            </div>
                        ) : isTimerRunning && timer > 5 && timer <= 10 ? (
                            <div className="font-bold text-3xl flex w-full justify-center mt-4 text-orange-500">
                                {timer}
                            </div>
                        ) : isTimerRunning && timer > 0 && timer <= 5 ? (
                            <div className="font-bold text-3xl flex w-full justify-center mt-4 text-red-500  animate-ping">
                                {timer}
                            </div>
                        ) : (
                            <div className="font-bold text-3xl flex w-full justify-center mt-4 text-slate-500">
                                {timer}
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="justify-end">
                        <ResultModal
                            dialogTitle={dialogTitle}
                            dialogTitleColor={dialogTitleColor}
                            dialogActionColor={dialogActionColor}
                            handleSubmit={handleSubmit}
                            resetTimer={resetTimer}
                            handleNextQuestion={handleNextQuestion}
                        />
                    </CardFooter>
                </Card>
            )}
        </>
    );
}
