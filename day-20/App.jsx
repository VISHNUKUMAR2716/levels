import { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [historical, setHistorical] = useState([]);

  const getWeather = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/weather/current?city=${city}`);
      const data = res.data;
      setWeather(data);

      const lat = data.coord.lat;
      const lon = data.coord.lon;

      const timestamps = [...Array(5)].map((_, i) =>
        Math.floor((Date.now() - i * 86400000) / 1000)
      );

      const histData = await Promise.all(
        timestamps.map((ts) =>
          axios.get(`http://localhost:5000/api/weather/historical?lat=${lat}&lon=${lon}&timestamp=${ts}`)
        )
      );

      setHistorical(histData.map((h) => h.data));
    } catch (err) {
      alert('Error fetching data');
    }
  };

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">🌤️ WeatherDash</h1>
      <div className="flex gap-2">
        <input
          type="text"
          className="px-4 py-2 rounded border"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={getWeather}
        >
          Search
        </button>
      </div>

      {weather && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">{weather.name}</h2>
          <p>🌡️ Temp: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind: {weather.wind.speed} m/s</p>
        </div>
      )}

      {historical.length > 0 && (
        <div className="mt-8 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-2">📅 Past 5 Days</h3>
          <ul>
            {historical.map((h, i) => (
              <li key={i} className="bg-white p-3 rounded shadow mb-2">
                <p>📆 {new Date(h.current.dt * 1000).toLocaleDateString()}</p>
                <p>🌡️ Temp: {h.current.temp} °C</p>
                <p>{h.current.weather[0].description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
