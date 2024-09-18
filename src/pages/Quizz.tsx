import { useParams } from "react-router-dom";

import Wrapper from "@/components/Wrapper";
import ContentSection from "@/components/ContentSection";
import QuestionCard from "@/components/Cards/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import ScoreIndicator from "@/components/ScoreIndicator";

export default function Quizz() {
    const { type } = useParams();
    return (
        <Wrapper>
            <h2 className="text-2xl font-bold text-center mt-10">
                {type?.toLocaleUpperCase()}
            </h2>
            <ContentSection>
                <QuestionCard type={`${type}`} />
            </ContentSection>
            <ContentSection>
                <div className="mt-10">
                    <ScoreIndicator />
                </div>
                <ProgressBar />
            </ContentSection>
        </Wrapper>
    );
}
