import React from 'react';
import SmallBlock from '../NewsBlocks/SmallBlock';
import BigBlock from '../NewsBlocks/BigBlock';
import SecondTitle from '../../Components/UI/Titles/SecondTitle';

const MainNews = ({ news, title }) => {
  return news.length ? (
    <div>
      <SecondTitle title={title} />
      <div className="text-neutral-800 grid grid-cols-3 grid-rows-1 gap-4 min-h-full w-full max-xl:grid-cols-2  max-md:grid-cols-1 ">
        {news.map((item, index) => {
          if (index === 0) {
            return <BigBlock key={index} content={item} />;
          } else if (index < 8 && index > 0) {
            return <SmallBlock key={index} content={item} />;
          } else return null;
        })}
      </div>
    </div>
  ) : null;
};

export default MainNews;
