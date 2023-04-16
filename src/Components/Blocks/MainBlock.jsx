import React from 'react';
import MainNews from './MainNews';
import SideNews from './SideNews';
import SecondaryNews from './SecondaryNews';
import SecondTitle from '../Titles/SecondTitle';

const MainBlock = () => {
  return (
    <div className="flex w-full min-h-screen flex-col  px-20">
      <SecondTitle title="Hot News 🔥" />

      <div className="flex mb-2">
        <MainNews />
        <SideNews />
      </div>
      <SecondaryNews />
    </div>
  );
};

export default MainBlock;
