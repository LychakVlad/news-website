import React from 'react';
import SmallBlock from '../NewsBlocks/SmallBlock';
import SecondTitle from '../../Components/UI/Titles/SecondTitle';
import BgBlock from '../NewsBlocks/BgBlock';
import NoImgBlock from '../NewsBlocks/NoImgBlock';

const SecondaryNews = ({ news }) => {
  return news.length ? (
    <div>
      <SecondTitle title="Editor's Choice 🤌" />
      <div className="text-neutral-800 grid grid-cols-3 grid-rows-1 gap-4 max-xl:grid-cols-2 max-lg:grid-cols-1 max-lg:grid-rows-3">
        {news.map((item, index) => {
          if (index === 0) {
            return <BgBlock content={item} key={index} />;
          } else if (index < 3 && index > 0) {
            return <SmallBlock content={item} key={index} />;
          } else if (index < 5 && index > 2) {
            return <NoImgBlock content={item} key={index} />;
          } else return null;
        })}
      </div>
    </div>
  ) : null;
};

export default SecondaryNews;
