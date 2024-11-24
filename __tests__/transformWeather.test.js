const transformWeatherData = require('../utils/transformWeather');

describe('transformWeatherData', () => {
  const mockData = {
    main: { temp: 293.15, humidity: 80 },
    weather: [{ description: 'clear sky' }],
    wind: { speed: 5 },
  };

  it('should transform weather data correctly', () => {
    const transformed = transformWeatherData(mockData);

    expect(transformed).toEqual({
      date: expect.any(String),
      city: 'London',
      temperatureC: 20.00,
      weatherDescription: 'clear sky',
      humidity: 80,
      windSpeed: 5,
    });
  });
});
