import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsById } from '../API/NewsAPI';

const NewsIdPage = () => {
  const params = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNewsById(params.id);
      setNews(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <div className="bg-white px-20" key={news.id}>
      <div className="flex h-full flex-col">
        <h2 className=" text-6xl font-bold my-6">{news.title}</h2>
        <div className="w-full h-full overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original${news.poster_path}`}
            alt="img"
            className="w-full h-full  object-contain object-center "
          />
        </div>
        <div className="max-w-3xl py-10">
          <p className="mb-6 text-2xl">{news.overview}</p>
          <div className="flex">
            <p className="mr-4 text-rose-600">{news.release_date}</p>
            <p className="text-neutral-400">{news.original_title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsIdPage;
