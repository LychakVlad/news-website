import React from 'react';
import SecondTitle from '../UI/Titles/SecondTitle';
import LinkButton from '../UI/LinkButton';

const NoImgBlock = ({ content }) => {
  return (
    <div className="bg-white w-full h-full flex-col" key={content.title}>
      <div className="max-w-sm p-4 flex flex-col h-full justify-between max-lg:m-auto">
        <p className="text-neutral-400">{content.source.name}</p>
        <div>
          <SecondTitle title={content.title} />
          <p className="mb-6 text-lg">
            {content.description.length > 100
              ? content.description.slice(0, 100) + '...'
              : content.description}
          </p>
        </div>
        <div className="mr-4 text-rose-600 flex justify-between">
          {content.publishedAt.slice(11, 16)}
          <p className="text-neutral-400">{content.author}</p>
        </div>
        <LinkButton url={content.url} title={'Link to original'} />
      </div>
    </div>
  );
};

export default NoImgBlock;
