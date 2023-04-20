const axios = require('axios');

module.exports = async function fetchNews(source, sortByWhat) {
  const params = {
    q: 'Social',
    from: '2023-04-01',
    sortBy: sortByWhat,
    apiKey: 'b66c9785dec149d4aeb537c8caf5c053',
  };

  const res = await axios.get('/news', { params });

  let filteredArticles = res.data.articles;

  if (source) {
    filteredArticles = res.data.articles.filter(
      (article) => article.source.name === source
    );
  }

  return filteredArticles;
};
