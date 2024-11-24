const transformWeatherData = (data) => {
    const { main, weather, wind } = data;
    const temperatureC = (main.temp - 273.15).toFixed(2);
  
    return {
      date: new Date().toISOString(),
      city: 'London',
      temperatureC: parseFloat(temperatureC),
      weatherDescription: weather[0].description,
      humidity: main.humidity,
      windSpeed: wind.speed,
    };
  };
  
  module.exports = transformWeatherData;
  