import React from 'react';
import SecondTitle from '../Titles/SecondTitle';
import { useNavigate } from 'react-router-dom';

const BgBlock = ({ content }) => {
  const router = useNavigate();
  return (
    <div
      onClick={() => router(`/news-website/${content.id}`)}
      className="bg-white col-start-1 col-end-3 z-50 overflow-hidden group cursor-pointer"
      key={content.id}
    >
      <div className="w-full h-full relative">
        <div className=" absolute left-0 top-0 h-full w-full ">
          <img
            src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
            alt="img"
            className=" object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className=" p-10 relative w-full h-full flex flex-col justify-end bg-gray-950 bg-opacity-40 text-white">
          <SecondTitle title={content.title} />
          <div className="flex text-lg">
            <p className="mr-4 ">{content.release_date}</p>
            <p className="">{content.original_title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgBlock;
