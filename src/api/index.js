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
    const response = await axios.get(`${url}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
