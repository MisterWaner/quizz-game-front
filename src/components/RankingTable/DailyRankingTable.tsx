import { useState, useEffect } from "react";
import useAuthToken from "@/hooks/useAuthToken";
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
} from "@/components/ui/table";
import { getDailyScores, getTop5DailyScores } from "@/service/getDataFromBack";
import { User } from "@/lib/types";

export function DailyRankingTable() {
    const [dailyScores, setDailyScores] = useState<User[]>([]);
    const { userInfo } = useAuthToken();
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
                    <TableRow
                        key={index}
                        className={
                            (userInfo && userInfo?.username) === user.username
                                ? "bg-green-400 hover:bg-green-500"
                                : ""
                        }
                    >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.score}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export function DailyTop5RankingTable() {
    const [dailyScores, setDailyScores] = useState<User[]>([]);

    useEffect(() => {
        const loadDailyScores: Promise<User[]> = getTop5DailyScores();
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
