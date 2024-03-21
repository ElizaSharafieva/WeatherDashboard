const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3001', credentials: true }));

app.use(`/`, (req ,res) => {
  console.log(req.query);
    axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${req.query.name}&count=5&language=ru&format=json`)
      .then(response => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      }

    )
})

app.listen(3000);