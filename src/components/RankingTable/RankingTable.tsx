import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import GlobalRankingTable from "@/components/RankingTable/GlobalRankingTable";
import DailyRankingTable from "@/components/RankingTable/DailyRankingTable";

export default function RankingTable() {
    return (
        <Tabs defaultValue="global-ranking" className="mt-10 md:w-1/2 mx-auto flex flex-col gap-4">
            <TabsList className="flex flex-row ">
                <TabsTrigger value="global-ranking">Classement Général</TabsTrigger>
                <TabsTrigger value="daily-ranking">Classement Journalier</TabsTrigger>
            </TabsList>
            <TabsContent value="global-ranking">
                <GlobalRankingTable />
            </TabsContent>
            <TabsContent value="daily-ranking">
                <DailyRankingTable />
            </TabsContent>
        </Tabs>
    )
}
