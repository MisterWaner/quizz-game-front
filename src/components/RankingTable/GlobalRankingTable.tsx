import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
} from "@/components/ui/table";

export default function GlobalRankingTable() {
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
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Pseudo</TableCell>
                    <TableCell>Score</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
