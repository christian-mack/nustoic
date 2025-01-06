"use client";

import { Bar, BarChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { day: "Sat", withdraw: 450, deposit: 250 },
  { day: "Sun", withdraw: 350, deposit: 150 },
  { day: "Mon", withdraw: 320, deposit: 220 },
  { day: "Tue", withdraw: 450, deposit: 350 },
  { day: "Wed", withdraw: 300, deposit: 200 },
  { day: "Thu", withdraw: 400, deposit: 250 },
  { day: "Fri", withdraw: 380, deposit: 280 },
];

export function WeeklyActivity() {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-6">Weekly Activity</h3>
      <ChartContainer
        config={{
          withdraw: {
            label: "Withdraw",
            color: "hsl(241 94% 58%)", // #4543E8
          },
          deposit: {
            label: "Deposit",
            color: "hsl(186 84% 61%)", // #4BDFEA
          },
        }}
        className="h-[300px]"
      >
        <BarChart data={data}>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <Bar
            dataKey="withdraw"
            fill="var(--color-withdraw)"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="deposit"
            fill="var(--color-deposit)"
            radius={[4, 4, 0, 0]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
