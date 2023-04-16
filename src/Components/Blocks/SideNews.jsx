import React from 'react';
import SideBlock from '../NewsBlocks/SideBlock';

const SideNews = () => {
  return (
    <div className="bg-white ml-10 px-6 max-w-xs">
      <div className="my-4 font-bold text-4xl">News scroll</div>
      <SideBlock />
      <SideBlock />
      <SideBlock />
      <SideBlock />
      <SideBlock />
    </div>
  );
};

export default SideNews;
