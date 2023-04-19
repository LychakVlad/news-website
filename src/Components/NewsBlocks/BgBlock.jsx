import React from 'react';
import SecondTitle from '../Titles/SecondTitle';

const BgBlock = ({ content }) => {
  return (
    <a
      href={content.url}
      className="bg-white col-start-1 col-end-3 z-50 overflow-hidden group cursor-pointer"
      key={content.title}
    >
      <div className="w-full h-full relative">
        <div className=" absolute left-0 top-0 h-full w-full ">
          <img
            src={content.urlToImage}
            alt="img"
            className=" object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className=" p-10 relative w-full h-full flex flex-col justify-end bg-gray-950 bg-opacity-40 text-white">
          <SecondTitle title={content.title} />
          <div className="flex text-lg">
            <p className="mr-4 ">{content.publishedAt}</p>
            <p className="">{content.author}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BgBlock;
