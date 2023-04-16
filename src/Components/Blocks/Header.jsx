import React from 'react';
import FirstTitle from '../Titles/FirstTitle';

const Header = () => {
  return (
    <div className="bg-zinc-800 h-24 w-full flex items-center justify-center">
      <FirstTitle title={'NEWS'} />
    </div>
  );
};

export default Header;
