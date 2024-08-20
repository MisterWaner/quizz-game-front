import ContentSection from "@/components/ContentSection";
import ScoreCard from "@/components/Cards/ScoreCard";
import { GlobalRankingTable } from "@/components/RankingTable/GlobalRankingTable";
import { DailyRankingTable } from "@/components/RankingTable/DailyRankingTable";

export default function Ranks() {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mt-10">
                Classements
            </h2>
            <ContentSection>
                <ScoreCard title="Classement Général">
                    <GlobalRankingTable />
                </ScoreCard>
            </ContentSection>
            <ContentSection>
                <ScoreCard title="Classement Journalier">
                    <DailyRankingTable />
                </ScoreCard>
            </ContentSection>
        </>
    );
}
