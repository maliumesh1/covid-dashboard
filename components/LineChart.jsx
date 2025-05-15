import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const formatData = (timeline) => {
  const cases = timeline.cases;
  const deaths = timeline.deaths;
  const recovered = timeline.recovered;

  return Object.keys(cases).map((date) => ({
    date,
    cases: cases[date] / 1000000,
    deaths: deaths[date] / 1000000,
    recovered: recovered[date] / 1000000,
  }));
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white p-2 border rounded shadow text-xs'>
        <p>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value.toFixed(2)}M
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const LineChartComponent = ({ data }) => {
  const formatted = formatData(data).slice(-50); // limit to last 50 days

  return (
    <div>
      <h3 className='text-lg font-semibold mb-2'>Line Chart</h3>
      <LineChart width={500} height={300} data={formatted}>
        <XAxis dataKey='date' hide />
        <YAxis domain={[0, 1]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type='monotone' dataKey='cases' stroke='#8884d8' name='Cases' />
        <Line
          type='monotone'
          dataKey='recovered'
          stroke='#28a745'
          name='Recoveries'
        />
        <Line type='monotone' dataKey='deaths' stroke='#dc3545' name='Deaths' />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
