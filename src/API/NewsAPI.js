import axios from 'axios';

export const fetchNews = async (page, pageSize = 100) => {
  const res = await axios.get(
    'https://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2023-03-18&' +
      'sortBy=popularity&' +
      'apiKey=b66c9785dec149d4aeb537c8caf5c053'
  );

  return res.data.articles;
};

export const fetchNewsById = async (id) => {
  const res = await axios.get(
    'https://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2023-03-18&' +
      'sortBy=popularity&' +
      'apiKey=b66c9785dec149d4aeb537c8caf5c053'
  );
  return res.data;
};
