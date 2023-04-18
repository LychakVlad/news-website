import React, { useState, useEffect } from 'react';
import SideBlock from '../NewsBlocks/SideBlock';
import SecondTitle from '../Titles/SecondTitle';
import { fetchNews } from '../../API/NewsAPI';

const SideNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await fetchNews(4);
      setNews(newsData);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white ml-10 px-6 max-w-xs max-h-[1450px] overflow-auto">
      <SecondTitle title={'News scroll'} />
      {news.map((item) => {
        return <SideBlock content={item} />;
      })}
    </div>
  );
};

export default SideNews;
