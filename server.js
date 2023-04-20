const express = require('express');
const { fetchNews } = require('./src/API/NewsAPI');

const app = express();
const port = 3000;

app.get('/news', async (req, res) => {
  try {
    const { source, sortBy } = req.query;
    const articles = await fetchNews(source, sortBy);
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
