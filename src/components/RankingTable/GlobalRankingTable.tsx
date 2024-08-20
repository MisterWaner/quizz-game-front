import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
} from "@/components/ui/table";
import { User } from "@/lib/types";
import {
    getGlobalScores,
    getTop5GlobalScores,
} from "@/service/getDataFromBack";

export function GlobalRankingTable() {
    const [globalScores, setGlobalScores] = useState<User[]>([]);

    useEffect(() => {
        const loadGlobalScores: Promise<User[]> = getGlobalScores();
        loadGlobalScores
            .then((data) => {
                setGlobalScores(data);
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
                {globalScores.map((user, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.global_score}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export function GlobalTop5RankingTable() {
    const [globalScores, setGlobalScores] = useState<User[]>([]);

    useEffect(() => {
        const loadGlobalScores: Promise<User[]> = getTop5GlobalScores();
        loadGlobalScores
            .then((data) => {
                setGlobalScores(data);
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
                {globalScores.map((user, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.global_score}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
