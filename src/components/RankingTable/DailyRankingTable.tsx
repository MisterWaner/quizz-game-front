import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
} from "@/components/ui/table";

export default function DailyRankingTable() {
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
                    <TableCell>Pseudossss</TableCell>
                    <TableCell>Score</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
