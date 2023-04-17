import React from 'react';
import FirstTitle from '../Titles/FirstTitle';

const Header = () => {
  return (
    <header className="bg-zinc-800 px-20 h-24 w-full flex items-center justify-around">
      <FirstTitle title={'NEWS'} />
      <div className="text-white justify-evenly flex w-full font-semibold text-xl">
        <button className="px-6 py-3 rounded-full bg-zinc-700">Business</button>
        <button>Lifestyle</button>
        <button>Politic</button>
        <button>Animals</button>
      </div>
    </header>
  );
};

export default Header;
