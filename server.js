const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3001', credentials: true }));

app.use(`/`, (req ,res) => {
  axios.get(`https://geocoding-api.open-meteo.com/v1/search?`, {
    params: {
      name: `${req.body.city}`,
      count: req.body.count,
      language: 'ru',
      format: 'json',
    }
  })
    .then(response => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
})

app.listen(3000);