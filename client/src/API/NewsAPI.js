import axios from 'axios';

async function fetchNews(selectedSource) {
  const params = {
    selectedSource,
  };

  try {
    const res = await axios.get('https://news-website-doli.onrender.com/news', {
      params,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default fetchNews;
