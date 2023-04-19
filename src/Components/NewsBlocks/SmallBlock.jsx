import React from 'react';

import LinkButton from '../Blocks/LinkButton';

const SmallBlock = ({ content }) => {
  return (
    <div className="h-full grid  bg-white relative group" key={content.title}>
      <div className=" max-h-52 h-full overflow-hidden">
        <img
          src={content.urlToImage}
          alt="img "
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className=" p-4 flex flex-col justify-between">
        <h2 className=" text-2xl font-bold mb-6">{content.title}</h2>
        <p className="mb-6">
          {content.description.length > 100
            ? content.description.slice(0, 100) + '...'
            : content.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="mr-4 text-rose-600">
            {content.publishedAt.slice(11, 16)}
          </p>
          <p className="text-neutral-400">{content.source.name}</p>
          <p className="text-neutral-400">{content.author}</p>
        </div>
        <LinkButton url={content.url} title={'Link to original'} />
      </div>
    </div>
  );
};

export default SmallBlock;
