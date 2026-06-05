"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { RevenuePoint } from "@/lib/dashboard-data";

type RevenueChartProps = {
  data: RevenuePoint[];
};

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 0,
});

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <div className="chart-card" aria-label="Haftalık ciro, kar ve reklam harcaması grafiği">
      <ResponsiveContainer width="100%" height={310}>
        <AreaChart data={data} margin={{ top: 20, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.42} />
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="profitGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#34d399" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#34d399" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#1f2a44" strokeDasharray="4 4" vertical={false} />
          <XAxis
            axisLine={false}
            dataKey="day"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            tickFormatter={(value) => `${Number(value) / 1000}K`}
            tickLine={false}
            width={44}
          />
          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #26334f",
              borderRadius: 18,
              color: "#e2e8f0",
            }}
            formatter={(value, name) => [
              currencyFormatter.format(Number(value ?? 0)),
              name === "revenue" ? "Ciro" : name === "profit" ? "Kar" : "Reklam",
            ]}
            labelStyle={{ color: "#f8fafc", fontWeight: 700 }}
          />
          <Area
            dataKey="revenue"
            fill="url(#revenueGradient)"
            name="Ciro"
            stroke="#38bdf8"
            strokeWidth={3}
            type="monotone"
          />
          <Area
            dataKey="profit"
            fill="url(#profitGradient)"
            name="Kar"
            stroke="#34d399"
            strokeWidth={3}
            type="monotone"
          />
          <Area
            dataKey="adSpend"
            fill="transparent"
            name="Reklam"
            stroke="#f59e0b"
            strokeDasharray="6 6"
            strokeWidth={2}
            type="monotone"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
