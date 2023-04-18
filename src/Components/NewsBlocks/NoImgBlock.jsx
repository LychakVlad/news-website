import React from 'react';
import SecondTitle from '../Titles/SecondTitle';

const NoImgBlock = ({ content }) => {
  return (
    <div className="bg-white w-full h-full flex-col cursor-pointer">
      <div className="max-w-sm p-4 flex flex-col h-full justify-between">
        <p className="text-neutral-400">{content.original_title}</p>
        <div>
          <SecondTitle title={content.title} />
          <p className="text-lg mb-6">{content.overview}</p>
        </div>
        <p className="mr-4 text-rose-600">{content.release_date}</p>
      </div>
    </div>
  );
};

export default NoImgBlock;
