"use client";

import { Pie, PieChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const data = [
  { name: "Entertainment", value: 30 },
  { name: "Bill Expense", value: 15 },
  { name: "Investment", value: 20 },
  { name: "Others", value: 35 },
];

export function ExpenseStatistics() {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-6">Expense Statistics</h3>
      <ChartContainer
        config={{
          entertainment: {
            label: "Entertainment",
            color: "hsl(241 94% 58%)", // #4543E8
          },
          billExpense: {
            label: "Bill Expense",
            color: "hsl(15 100% 71%)", // #FF8F6B
          },
          investment: {
            label: "Investment",
            color: "hsl(315 100% 65%)", // #FF4DCD
          },
          others: {
            label: "Others",
            color: "hsl(186 84% 61%)", // #4BDFEA
          },
        }}
        className="h-[300px]"
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="var(--color-entertainment)"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
