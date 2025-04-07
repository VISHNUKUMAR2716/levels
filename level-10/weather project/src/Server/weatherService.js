import axios from 'axios';

export const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
      params: {
        lat,
        lon,
        units: 'metric',
        exclude: 'minutely,hourly,alerts',
        appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
      },
    });
    console.log("Weather API response:", response.data); // ✅ log it!
    return response.data;
  } catch (err) {
    console.error('Weather API error:', err.response?.data || err.message);
    return null;
  }
};
