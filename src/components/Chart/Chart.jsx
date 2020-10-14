import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.modules.css';
// import './Chart.modules.css';

console.log(styles.container);

export default function Chart() {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };

    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ positive }) => positive),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ death }) => death),
            label: 'Death',
            borderColor: 'red',
            backgroundColor: 'rgba(2555, 0, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className="container">{lineChart}</div>;
}
