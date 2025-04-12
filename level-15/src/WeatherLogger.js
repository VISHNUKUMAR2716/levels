import React, { useState } from 'react';
import axios from 'axios';

const WeatherLogger = () => {
  const [city, setCity] = useState('');
  const [log, setLog] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'c3699961093a233efb3599f2ee6fb5b0';

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const { temp, humidity } = res.data.main;
      const weatherData = {
        city,
        temperature: temp,
        humidity,
        date: new Date().toLocaleString(),
      };

      setLog([weatherData, ...log]);
      setCity('');
    } catch (err) {
      alert('City not found!');
    }
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h2>🌦️ Weather Data Logger</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={fetchWeather}
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Log Weather'}
        </button>
      </div>

      {log.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (°C)</th>
              <th>Humidity (%)</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {log.map((entry, index) => (
              <tr key={index}>
                <td>{entry.city}</td>
                <td>{entry.temperature}</td>
                <td>{entry.humidity}</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WeatherLogger;
