const express = require('express');
const request = require('request');
const cors = require('cors');
const port = 5001;

const app = express();
app.use(cors());

const API_KEY = 'b66c9785dec149d4aeb537c8caf5c053';
const API_URL = 'https://newsapi.org/v2/everything';

app.get('/news', (req, res) => {
  const { selectedSource } = req.query;
  const url = `${API_URL}?q=${selectedSource}&apiKey=${API_KEY}`;

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
