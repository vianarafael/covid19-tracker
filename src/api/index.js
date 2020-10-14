import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    // this url is not working
    const { data } = await axios.get(
      'https://api.covidtracking.com/v1/us/daily.json'
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
