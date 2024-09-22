import useAuthToken from "@/hooks/useAuthToken";
import useRedirect from "@/hooks/useRedirect";
import { useEffect, useState } from "react";


export default function Account() {
    const { userInfo } = useAuthToken();
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        const fetchScore = async () => {
            const savedScore = localStorage.getItem("score");
            if (savedScore) {
                setScore(Number(savedScore));
            } else {
                setScore(0);
            }
        };
        fetchScore();
    }, []);
    
    useRedirect();
    return (
        <div>
            <h1 className="text-3xl">Salut {userInfo?.username}</h1>
            
            <p>Ton score journalier est : {score === 0 ? userInfo?.score : score + (userInfo?.score ?? 0) }</p>
            <p>Ton score mensuel est : {userInfo?.global_score}</p>
        </div>
    )
}
