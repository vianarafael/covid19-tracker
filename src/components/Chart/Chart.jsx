import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.modules.css';

export default function Chart() {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };

    console.log(dailyData);
    fetchAPI();
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: '',
        datasets: [{}, {}],
      }}
    />
  ) : null;

  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
}
