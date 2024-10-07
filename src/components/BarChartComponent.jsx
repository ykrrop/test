import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BarChartComponent({ data }) {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => [value, "Количество"]} />
        <Bar dataKey="count" fill="#5b21b6" />
      </BarChart>
    </ResponsiveContainer>
  );
}
