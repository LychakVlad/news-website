import React, { useState, useEffect } from 'react';
import MainNews from './MainNews';
import SecondaryNews from './SecondaryNews';
import Filter from './Filter';
import { fetchNews } from '../../API/NewsAPI';
import LoadingBlock from '../NewsBlocks/LoadingBlock';

const MainBlock = () => {
  const [news, setNews] = useState([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const newsData = await fetchNews(selectedSource, sortBy);
      setNews(newsData);
      setLoading(false);
    };
    fetchData();
  }, [selectedSource, sortBy]);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const topNews = filteredNews.slice(0, 7);
  const secondaryNews = filteredNews.slice(9, 14);
  const bestsellerNews = filteredNews.slice(15, 19);

  return (
    <div className="px-20 bg-gray-100 h-full grow">
      <div className="flex justify-center items-center mt-10 ">
        <input
          className="outline-none py-3 px-32 text-center font-golos text-lg rounded"
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Filter setSelectedSource={setSelectedSource} setSortBy={setSortBy} />

      {loading ? (
        <LoadingBlock />
      ) : (
        <>
          <MainNews news={topNews} title={'Hot News 🔥'} />
          <SecondaryNews news={secondaryNews} />
          <MainNews news={bestsellerNews} title={'Controversial 🤯'} />
        </>
      )}
    </div>
  );
};

export default MainBlock;
