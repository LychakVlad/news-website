import React from 'react';

const SideBlock = ({ content }) => {
  return (
    <div>
      <div className="relative mb-8 cursor-pointer">
        <p className="mb-2">
          {content.overview.length > 100
            ? content.overview.slice(0, 100) + '...'
            : content.overview}
        </p>
        <div className="flex mb-3">
          <p className="mr-4 text-rose-600">{content.release_date}</p>
          <p className="text-neutral-400">{content.original_title}</p>
        </div>
        <span className="absolute h-[2px] bg-neutral-300 w-full rounded "></span>
      </div>
    </div>
  );
};

export default SideBlock;
