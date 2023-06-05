import axios from 'axios';

async function fetchNews(selectedSource) {
  const params = {
    selectedSource,
  };

  try {
    const res = await axios.get(
      'https://news-website-production-57df.up.railway.app/news',
      {
        params,
      }
    );
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default fetchNews;
