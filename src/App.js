import React, { useState, useEffect } from 'react';
import './App.css';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.modules.css';
import { fetchData } from './api';

function App() {
  const [country, setCountry] = useState(null);
  const [data, setData] = useState({});

  const handleCountryChange = async (c) => {
    // fetch the data
    const fetchedData = await fetchData(c);
    // set the state
    setData(fetchedData);
    setCountry(c);
  };

  useEffect(() => {
    const fun = async () => {
      const data = await fetchData();
      setData(data);
    };
    fun();

    // handleCountryChange('Japan');
  }, []);
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
