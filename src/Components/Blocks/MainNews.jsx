import React from 'react';
import SmallBlock from '../NewsBlocks/SmallBlock';
import BigBlock from '../NewsBlocks/BigBlock';
import SecondTitle from '../Titles/SecondTitle';

const MainNews = ({ news, title }) => {
  return (
    <div>
      <SecondTitle title={title} />
      <div className="text-neutral-800 grid grid-cols-3 grid-rows-1 gap-4">
        {news.map((item, index) => {
          if (index === 0) {
            return <BigBlock content={item} />;
          } else if (index < 4 && index > 0) {
            return <SmallBlock content={item} />;
          } else return void 0;
        })}
      </div>
    </div>
  );
};

export default MainNews;
