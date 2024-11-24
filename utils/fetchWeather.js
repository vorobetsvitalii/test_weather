const axios = require('axios');

const fetchWeatherData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch weather data: ${error.message}`);
  }
};

module.exports = fetchWeatherData;
