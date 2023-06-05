import axios from 'axios';

async function fetchNews(selectedSource) {
  const params = {
    selectedSource,
  };

  try {
    const res = await axios.get('https://sore-bee-underclothes.cyclic.app', {
      params,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default fetchNews;
