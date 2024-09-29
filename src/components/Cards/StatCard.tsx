import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatCard({ children }: { children: React.ReactNode }) {
    return (
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Statistiques</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}
