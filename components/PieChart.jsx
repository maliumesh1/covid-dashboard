import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Recoveries", value: 4.2, color: "#28a745" },
  { name: "Deaths", value: 0.2, color: "#dc3545" },
  { name: "Remaining Population", value: 135.6, color: "#e5e5a4" },
];

const PieChartComponent = () => (
  <div>
    <h3 className='text-lg font-semibold mb-2'>Pie Chart</h3>
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey='value'
        nameKey='name'
        cx='50%'
        cy='50%'
        innerRadius={60}
        outerRadius={100}
        label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);

export default PieChartComponent;
