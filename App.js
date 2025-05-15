import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import LineChartComponent from "./components/LineChart";
import PieChartComponent from "./components/PieChart";

function App() {
  const [country, setCountry] = useState("USA");
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    const fetchCovidData = async () => {
      try {
        const res = await axios.get(
          `https://disease.sh/v3/covid-19/historical/${country}?lastdays=1500`
        );
        setCovidData(res.data.timeline);
      } catch (err) {
        console.error("Error fetching COVID data", err);
      }
    };

    fetchCovidData();
  }, [country]);

  return (
    <div className='min-h-screen bg-blue-100 p-6'>
      <h1 className='text-2xl font-bold mb-4 text-center'>
        COVID-19 and Population Dashboard
      </h1>

      <Header
        countries={[]} // we’ll populate this later
        selected={country}
        onChange={setCountry}
      />

      <div className='flex flex-wrap justify-around gap-4 my-6'>
        <StatsCard title='Total Cases' value='5M' color='bg-blue-500' />
        <StatsCard title='Recoveries' value='4.2M' color='bg-green-500' />
        <StatsCard title='Deaths' value='0.2M' color='bg-red-500' />
      </div>

      <div className='flex flex-col lg:flex-row justify-around gap-6 mt-8'>
        {covidData && <LineChartComponent data={covidData} />}
        <PieChartComponent />
      </div>
    </div>
  );
}

export default App;
