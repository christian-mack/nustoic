"use client";

import { Line, LineChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "Jul", balance: 400 },
  { month: "Aug", balance: 500 },
  { month: "Sep", balance: 700 },
  { month: "Oct", balance: 400 },
  { month: "Nov", balance: 500 },
  { month: "Dec", balance: 600 },
  { month: "Jan", balance: 700 },
];

export function BalanceHistory() {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-6">Balance History</h3>
      <ChartContainer
        config={{
          balance: {
            label: "Balance",
            color: "hsl(241 94% 58%)", // #4543E8
          },
        }}
        className="h-[300px]"
      >
        <LineChart data={data}>
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="var(--color-balance)"
            strokeWidth={2}
            dot={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
