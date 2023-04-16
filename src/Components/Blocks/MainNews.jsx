import React from 'react';
import Photo from '../../assets/test.jpeg';
import SmallBlock from '../NewsBlocks/SmallBlock';
import BigBlock from '../NewsBlocks/BigBlock';

const MainNews = () => {
  return (
    <div className="text-neutral-800 grid grid-cols-3 grid-rows-1 gap-4">
      <BigBlock photo={Photo} />
      <SmallBlock photo={Photo} />
      <SmallBlock photo={Photo} />
      <SmallBlock photo={Photo} />
    </div>
  );
};

export default MainNews;
