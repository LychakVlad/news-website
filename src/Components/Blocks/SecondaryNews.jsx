import React, { useEffect, useState } from 'react';
import SmallBlock from '../NewsBlocks/SmallBlock';
import SecondTitle from '../Titles/SecondTitle';
import BgBlock from '../NewsBlocks/BgBlock';
import NoImgBlock from '../NewsBlocks/NoImgBlock';
import { fetchNews } from '../../API/NewsAPI';

const SecondaryNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsData = await fetchNews(3);
      setNews(newsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <SecondTitle title="Editor's Choice 🤌" />
      <div className="text-neutral-800 grid grid-cols-3 grid-rows-1 gap-4">
        {news.map((item, index) => {
          if (index === 0) {
            return <BgBlock content={item} />;
          } else if (index < 3 && index > 0) {
            return <SmallBlock content={item} />;
          } else if (index < 5 && index > 2) {
            return <NoImgBlock content={item} />;
          } else return void 0;
        })}
      </div>
    </div>
  );
};

export default SecondaryNews;
