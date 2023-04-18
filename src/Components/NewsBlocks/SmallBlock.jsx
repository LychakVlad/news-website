import React from 'react';
import { useNavigate } from 'react-router-dom';

const SmallBlock = ({ content }) => {
  const router = useNavigate();
  return (
    <div
      onClick={() => router(`/news-website/${content.id}`)}
      className="bg-white w-full h-full flex-col group cursor-pointer"
      key={content.id}
    >
      <div className=" max-w-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
          alt="img "
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="max-w-sm p-4">
        <h2 className=" text-2xl font-bold mb-6">{content.title}</h2>
        <p className="mb-6">{content.overview}</p>
        <div className="flex">
          <p className="mr-4 text-rose-600">{content.release_date}</p>
          <p className="text-neutral-400">{content.original_title}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallBlock;
