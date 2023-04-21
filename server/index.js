const express = require('express');
const request = require('request');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5001;
const MY_KEY = process.env.REACT_APP_API_KEY;

const app = express();
app.use(cors());

const API_URL = 'https://newsapi.org/v2/everything';

app.get('/news', (req, res) => {
  const { selectedSource } = req.query;
  const url = `${API_URL}?q=${selectedSource}&apiKey=${MY_KEY}`;

  const options = {
    url,
    headers: {
      'User-Agent': 'my-news-app/1.0',
    },
    json: true,
  };

  request(options, (error, response, body) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(body.articles);
  });
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
