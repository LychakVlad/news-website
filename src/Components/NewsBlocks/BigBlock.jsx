import React from 'react';

const BigBlock = ({ content }) => {
  console.log(content);
  return (
    <div
      className="bg-white col-start-1 col-end-4 relative group cursor-pointer"
      key={content.url}
    >
      <div className="flex min-h-full">
        <div className=" max-w-lg min-h-full overflow-hidden">
          <img
            src={content.urlToImage}
            alt="img"
            className="w-full h-full  object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="max-w-sm p-10">
          <h2 className=" text-2xl font-bold mb-6">{content.title}</h2>
          <p className="mb-6">{content.description}</p>
          <div className="flex">
            <p className="mr-4 text-rose-600">{content.publishedAt}</p>
            <p className="text-neutral-400">{content.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBlock;
