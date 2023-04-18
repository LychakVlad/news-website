import axios from 'axios';

const API_KEY = '66eb3bde9cca0487f03e78b512b451e4';

export const fetchNews = async (page) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
  );
  return res.data.results;
};
