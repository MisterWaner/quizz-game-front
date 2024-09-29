import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { chartData } from "@/lib/dummy-data";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "bg-green-500",
    },
    mobile: {
        label: "Mobile",
        color: "bg-red-500",
    },
} satisfies ChartConfig;

const data = chartData;

export default function ChartCard() {
    return (
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Progression</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart data={data}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey="desktop"
                            fill="var(--chart-color-desktop)"
                            radius={4}
                        />
                        <Bar
                            dataKey="mobile"
                            fill="var(--chart-color-mobile)"
                            radius={4}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
