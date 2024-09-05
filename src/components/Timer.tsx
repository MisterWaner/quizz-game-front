import { useCourseStore } from "@/store/CoursesStore";
import { useEffect } from "react";

type TimerProps = {
    onTimeOut: () => void;
}

export default function Timer({ onTimeOut }: TimerProps) {
    const timer = useCourseStore((state) => state.timer);
    const decrementTimer = useCourseStore((state) => state.decrementTimer);

    useEffect(() => {
        if (timer <= 0) {
            onTimeOut();
            return;
        }

        const intervalId = setInterval(() => {
            decrementTimer();
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timer, onTimeOut, decrementTimer]);

    if (timer > 10) {
        return (
            <div className="font-bold text-7xl flex w-full justify-center mt-4 text-green-500">
                {timer}
            </div>
        );
    } else if (timer > 5 && timer <= 10) {
        return (
            <div className="font-bold text-7xl flex w-full justify-center mt-4 text-orange-500">
                {timer}
            </div>
        );
    } else if (timer > 0 && timer <= 5) {
        return (
            <div className="font-bold text-7xl flex w-full justify-center mt-4 text-red-500">
                {timer}
            </div>
        );
    } else {
        return (
            <div className="font-bold text-7xl flex w-full justify-center mt-4 text-slate-500">
                {timer}
            </div>
        );
    }
}
