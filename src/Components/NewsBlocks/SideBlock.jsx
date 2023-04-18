import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBlock = ({ content }) => {
  const router = useNavigate();
  return (
    <div onClick={() => router(`/news-website/${content.id}`)}>
      <div className="relative mb-8 cursor-pointer" key={content.id}>
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
