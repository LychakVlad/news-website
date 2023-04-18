import React from 'react';
import SmallBlock from '../NewsBlocks/SmallBlock';
import BigBlock from '../NewsBlocks/BigBlock';

const MainNews = ({ news }) => {
  return (
    <div className="text-neutral-800 grid grid-cols-3 grid-rows-1 gap-4">
      {news.map((item, index) => {
        if (index === 0) {
          return <BigBlock content={item} />;
        } else if (index < 3 && index > 0) {
          return <SmallBlock content={item} />;
        } else return void 0;
      })}
    </div>
  );
};

export default MainNews;
