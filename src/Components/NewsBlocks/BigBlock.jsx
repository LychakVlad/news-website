import React from 'react';

const BigBlock = ({ content }) => {
  console.log(content.poster_path);
  return (
    <div
      className="bg-white col-start-1 col-end-4 relative group cursor-pointer"
      key={content.id}
    >
      <div className="flex h-full">
        <div className="w-full h-full max-h-[500px] overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
            alt="img"
            className="w-full h-full object-center object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="max-w-sm p-10">
          <h2 className=" text-2xl font-bold mb-6">{content.title}</h2>
          <p className="mb-6">{content.overview}</p>
          <div className="flex">
            <p className="mr-4 text-rose-600">{content.release_date}</p>
            <p className="text-neutral-400">{content.original_title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBlock;
