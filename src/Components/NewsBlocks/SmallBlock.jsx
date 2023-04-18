import React from 'react';

const SmallBlock = ({ content }) => {
  return (
    <div
      className="bg-white w-full h-full flex-col group cursor-pointer"
      key={content.url}
    >
      <div className=" max-w-lg overflow-hidden">
        <img
          src={content.urlToImage}
          alt="img "
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="max-w-sm p-4">
        <h2 className=" text-2xl font-bold mb-6">{content.title}</h2>
        <p className="mb-6">{content.description}</p>
        <div className="flex">
          <p className="mr-4 text-rose-600">{content.publishedAt}</p>
          <p className="text-neutral-400">{content.author}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallBlock;
