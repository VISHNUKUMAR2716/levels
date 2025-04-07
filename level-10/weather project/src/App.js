import React, { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "c3699961093a233efb3599f2ee6fb5b0";

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
        setError("");
      } else {
        setWeather(null);
        setError("City not found!");
      }
    } catch (err) {
      setWeather(null);
      setError("Failed to fetch data.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌤️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.input}
      />
      <button onClick={fetchWeather} style={styles.button}>
        Get Weather
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {weather && (
        <div className="row">
        <div style={styles.card } id='weather' className="col bg-dark text-white w-25">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>🌡️ Temp: {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
        </div>
          </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
    textAlign: "center",
    padding: "50px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    marginRight: "10px",
    width: "200px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  card: {
    marginTop: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    display: "inline-block",
   fontFamily :"Time",
  
  },
  error: {
    color: "red",
    marginTop: "15px",
  },
};

export default App;
