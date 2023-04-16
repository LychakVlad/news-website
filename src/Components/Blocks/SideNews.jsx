import React from 'react';
import SideBlock from '../NewsBlocks/SideBlock';
import SecondTitle from '../Titles/SecondTitle';

const SideNews = () => {
  return (
    <div className="bg-white ml-10 px-6 max-w-xs">
      <SecondTitle title={'News scroll'} />

      <SideBlock />
      <SideBlock />
      <SideBlock />
      <SideBlock />
      <SideBlock />
    </div>
  );
};

export default SideNews;
