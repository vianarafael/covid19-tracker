import React, { useEffect } from 'react';
import './App.css';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.modules.css';
import { fetchData } from './api';

function App() {
  useEffect(() => {
    const fun = async () => {
      const data = await fetchData();
      console.log(data);
    };
    fun();
  }, []);
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
