import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FormCard({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    return (
        <Card className="max-sm:w-10/12 max-md:w-8/12 md:w-6/12 lg:w-4/12 flex flex-col items-center">
            <CardHeader className="w-full flex justify-center items-center">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}
