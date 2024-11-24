const fetchWeatherData = require('./utils/fetchWeather');
const transformWeatherData = require('./utils/transformWeather');
const axios = require('axios');

const OPENWEATHER_API_KEY = 'eb52de8aeec7f52c70920b17224d8628';
const OPENWEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${OPENWEATHER_API_KEY}`;

const MOCK_API_URL = 'https://67433708b7464b1c2a640496.mockapi.io/api/weather/mock';

const main = async () => {
    try {
      //Отримуємо дані про погоду
      console.log('Fetching weather data...');
      const weatherData = await fetchWeatherData(OPENWEATHER_URL);
      console.log('Weather data fetched successfully:', weatherData);
  
      //Трансформуємо дані
      console.log('Transforming weather data...');
      const transformedData = transformWeatherData(weatherData);
      console.log('Transformed data:', transformedData);
  
      //Надсилаємо дані до Mock API
      console.log('Sending data to Mock API...');
      const response = await axios.post(MOCK_API_URL, transformedData);
      console.log('Data sent successfully. Response:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  main()