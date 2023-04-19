import React from 'react';
import LinkButton from '../Blocks/LinkButton';

const BigBlock = ({ content }) => {
  return (
    <div
      className="bg-white col-start-1 col-end-3 relative group cursor-pointer"
      key={content.title}
    >
      <div className="flex h-full">
        <div className="w-full h-full  overflow-hidden">
          <img
            src={content.urlToImage}
            alt="img"
            className="w-full h-full object-center object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="max-w-sm px-8 py-4 flex flex-col justify-between">
          <p className="text-neutral-400 mb-5">{content.source.name}</p>
          <h2 className=" text-2xl font-bold mb-6">{content.title}</h2>
          <p className="mb-6">{content.description}</p>
          <div className="flex justify-between">
            <p className="mr-4 text-rose-600">
              {content.publishedAt.slice(11, 16)}
            </p>
            <p className="text-neutral-400">{content.author}</p>
          </div>
          <LinkButton url={content.url} title={'Link to original'} />
        </div>
      </div>
    </div>
  );
};

export default BigBlock;
