import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
} from "@/components/ui/table";
import { getDailyScores } from "@/service/getDataFromBack";
import { User } from "@/lib/types";

export default function DailyRankingTable() {
    const [dailyScores, setDailyScores] = useState<User[]>([]);

    useEffect(() => {
        const loadDailyScores: Promise<User[]> = getDailyScores();
        loadDailyScores
            .then((data) => {
                setDailyScores(data);
            })
            .catch((error) => {
                console.error(
                    error,
                    "Une erreur est survenue lors de la récupération des données"
                );
            });
    }, []);
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Position</TableHead>
                    <TableHead>Pseudo</TableHead>
                    <TableHead>Score</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {dailyScores.map((user, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.score}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
