import React from "react";

const StatsCard = ({ title, value, color }) => (
  <div className={`rounded-xl shadow-md text-white p-4 w-40 ${color}`}>
    <div className='text-sm font-bold'>{title}</div>
    <div className='text-2xl font-semibold'>{value}</div>
    <div className='text-xs opacity-70'>0.002%</div>
  </div>
);

export default StatsCard;
