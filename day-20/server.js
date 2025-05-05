const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

// Current Weather
app.get('/api/weather/current', async (req, res) => {
  const { city } = req.query;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          units: 'metric',
          appid: OPENWEATHER_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'City not found' });
  }
});

// Historical Weather (last 5 days using lat/lon + timestamp)
app.get('/api/weather/historical', async (req, res) => {
  const { lat, lon, timestamp } = req.query;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall/timemachine`,
      {
        params: {
          lat,
          lon,
          dt: timestamp,
          units: 'metric',
          appid: OPENWEATHER_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Historical data fetch failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
