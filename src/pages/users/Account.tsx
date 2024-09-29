import useAuthToken from "@/hooks/useAuthToken";
import useRedirect from "@/hooks/useRedirect";
import { useEffect, useState } from "react";
import StatCard from "@/components/Cards/StatCard";
import ChartCard from "@/components/Cards/ChartCard";
import ContentSection from "@/components/ContentSection";


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
        <>
            <h1 className="text-3xl text-center font-semibold">Salut {userInfo?.username}</h1>
            
            <ContentSection>
                <StatCard>
                    <p>Aujourd'hui ton score est de : {score === 0 ? userInfo?.score : score + (userInfo?.score ?? 0) } pts</p>
                    <p>Ce mois-ci ton score mensuel est de : {userInfo?.global_score} pts</p>
                </StatCard>
            </ContentSection>
            <ContentSection>
                <ChartCard />
            </ContentSection>
        </>
    )
}
