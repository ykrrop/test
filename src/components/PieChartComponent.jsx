import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

export default function PieChartComponent({ data, colors }) {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <PieChart>
        <Pie
          data={data}
          dataKey="requests"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [value, "Количество"]} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
