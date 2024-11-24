# Weather Data Integration

This project is a simple integration that fetches weather data from the OpenWeatherMap API, transforms it, and sends it to a mock API endpoint.

Prerequisites: You need Node.js installed, an API key from [OpenWeatherMap](https://openweathermap.org/), and a mock API endpoint created using [MockAPI](https://mockapi.io/).

Setup: Clone the repository using `git clone <repository_url>` and navigate to the project folder with `cd weather-integration`. Install the required dependencies by running `npm install`. Open the `index.js` file and replace `your_openweathermap_api_key` with your OpenWeatherMap API key, and replace `MOCK_API_URL` with the URL of your MockAPI endpoint.

How to Run: Execute the script with the command `node index.js`.

Project Details: The script retrieves current weather data for London from the OpenWeatherMap API, including temperature, weather description, humidity, and wind speed. It transforms the temperature from Kelvin to Celsius and structures the data into a JSON format that includes the current date, city name, temperature in Celsius, weather description, humidity, and wind speed. The transformed data is then sent to the mock API using a POST request.

Error Handling: Basic error handling is implemented to log errors in case of API request failures or other issues.

Notes: Ensure your OpenWeatherMap API key is active (it may take up to 2 hours to activate after registration). The Mock API endpoint must be created in advance to test data submission.
