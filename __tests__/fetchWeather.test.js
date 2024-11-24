const fetchWeatherData = require('../utils/fetchWeather');
const axios = require('axios');

jest.mock('axios');

describe('fetchWeatherData', () => {
  const mockUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=test_api_key';

  it('should fetch weather data successfully', async () => {
    const mockData = { main: {}, weather: [{}], wind: {} };
    axios.get.mockResolvedValue({ data: mockData });

    const data = await fetchWeatherData(mockUrl);
    expect(data).toEqual(mockData);
  });

  it('should throw an error if the API request fails', async () => {
    axios.get.mockRejectedValue(new Error('API error'));

    await expect(fetchWeatherData(mockUrl)).rejects.toThrow('Failed to fetch weather data: API error');
  });
});
