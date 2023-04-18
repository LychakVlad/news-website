import React, { useEffect, useState } from 'react';
import MainNews from './MainNews';
import SideNews from './SideNews';
import SecondaryNews from './SecondaryNews';
import SecondTitle from '../Titles/SecondTitle';
import { fetchNews } from '../../API/NewsAPI';

const MainBlock = () => {
  const [news, setNews] = useState([]);
  const [secondNews, setSecondNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await fetchNews(1);
      setNews(newsData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await fetchNews(4);
      setSecondNews(newsData);
    };
    fetchData();
  }, []);

  return (
    <div className="flex w-full min-h-screen flex-col  px-20">
      <div className="flex mb-2">
        <MainNews news={news} title={'Hot News 🔥'} />
        <SideNews />
      </div>
      <SecondaryNews />
      <MainNews news={secondNews} title={'Bestsellers 🔥'} />
    </div>
  );
};

export default MainBlock;
