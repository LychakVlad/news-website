import React from 'react';

import Photo from '../../assets/test.jpeg';
import SmallBlock from '../NewsBlocks/SmallBlock';
import SecondTitle from '../Titles/SecondTitle';
import BgBlock from '../NewsBlocks/BgBlock';

const SecondaryNews = () => {
  return (
    <div>
      <SecondTitle title="Editor's Choice 🤌" />
      <div className="text-neutral-800 grid grid-cols-3 grid-rows-1 gap-4">
        <BgBlock photo={Photo} />
        <SmallBlock photo={Photo} />
        <SmallBlock photo={Photo} />
        <SmallBlock photo={Photo} />
        <SmallBlock photo={Photo} />
      </div>
    </div>
  );
};

export default SecondaryNews;
