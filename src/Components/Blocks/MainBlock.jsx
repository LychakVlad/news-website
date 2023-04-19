import React, { useState, useEffect } from 'react';
import MainNews from './MainNews';
import SecondaryNews from './SecondaryNews';
import Filter from './Filter';
import { fetchNews } from '../../API/NewsAPI';

const MainBlock = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await fetchNews();
      setNews(newsData);
    };
    fetchData();
  }, []);

  const topNews = news.slice(0, 8);
  const secondaryNews = news.slice(9, 14);
  const bestsellerNews = news.slice(15, 20);

  return (
    <div className="px-20">
      <Filter />
      <MainNews news={topNews} title={'Hot News 🔥'} />
      <SecondaryNews news={secondaryNews} />
      <MainNews news={bestsellerNews} title={'Bestsellers 🔥'} />
    </div>
  );
};

export default MainBlock;
