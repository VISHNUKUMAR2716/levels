const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const journalRoutes = require('./journalRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/journals', journalRoutes);

mongoose.connect('mongodb://localhost:27017/journalApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(5000, () => console.log('Backend running at http://localhost:5000'));
}).catch(err => console.error(err));
