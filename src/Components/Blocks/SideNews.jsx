import React from 'react';
import SideBlock from '../NewsBlocks/SideBlock';
import SecondTitle from '../Titles/SecondTitle';

const SideNews = ({ news }) => {
  return (
    <div className="bg-white ml-10 px-6 max-w-xs overflow-auto mt-24">
      <SecondTitle title={'News scroll'} />
      {news.map((item) => {
        return <SideBlock content={item} />;
      })}
    </div>
  );
};

export default SideNews;
