import React from 'react';
import LinkButton from '../Blocks/LinkButton';

const BigBlock = ({ content }) => {
  return (
    <div
      className="bg-white col-start-1 col-end-4 relative group max-xl:col-end-3 max-lg:col-end-3 max-md:col-end-2"
      key={content.title}
    >
      <div className="flex h-full max-lg:flex-col">
        <div className="w-full h-full  overflow-hidden">
          <img
            src={content.urlToImage}
            alt="img"
            className="w-full h-full object-center object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="max-w-sm px-8 py-4 flex flex-col justify-between max-lg:max-w-xl">
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
