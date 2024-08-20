import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {GlobalTop5RankingTable} from "@/components/RankingTable/GlobalRankingTable";
import {DailyTop5RankingTable} from "@/components/RankingTable/DailyRankingTable";

export default function RankingTable() {
    return (
        <Tabs defaultValue="global-ranking" className="md:w-1/2 mx-auto flex flex-col gap-4">
            <TabsList className="flex flex-row ">
                <TabsTrigger value="global-ranking">Classement Général</TabsTrigger>
                <TabsTrigger value="daily-ranking">Classement Journalier</TabsTrigger>
            </TabsList>
            <TabsContent value="global-ranking">
                <GlobalTop5RankingTable />
            </TabsContent>
            <TabsContent value="daily-ranking">
                <DailyTop5RankingTable />
            </TabsContent>
        </Tabs>
    )
}
