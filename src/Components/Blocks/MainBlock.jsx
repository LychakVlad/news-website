import React, { useEffect, useState } from 'react';
import MainNews from './MainNews';
import SideNews from './SideNews';
import SecondaryNews from './SecondaryNews';
import SecondTitle from '../Titles/SecondTitle';
import axios from 'axios';

const MainBlock = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get('https://reqres.in/api/users');
      setNews(res);
      console.log(news);
    };
    fetchNews();
  }, []);

  return (
    <div className="flex w-full min-h-screen flex-col  px-20">
      <SecondTitle title="Hot News 🔥" />
      <div className="flex mb-2">
        <MainNews news={news} />
        <SideNews />
      </div>
      {/* <SecondaryNews /> */}
    </div>
  );
};

export default MainBlock;
