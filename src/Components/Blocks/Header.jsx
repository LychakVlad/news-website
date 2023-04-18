import React from 'react';
import FirstTitle from '../Titles/FirstTitle';

const Header = () => {
  return (
    <header className="bg-zinc-800 px-20 h-24 w-full flex items-center justify-between">
      <FirstTitle title={'NEWS'} />
      <div className="text-white font-semibold text-xl">
        <button className="px-6 py-3 rounded-2xl focus:bg-zinc-700 hover:bg-zinc-700 transition-colors duration-300 mr-4">
          All
        </button>
        <button className="px-6 py-3 rounded-2xl focus:bg-zinc-700 hover:bg-zinc-700 transition-colors duration-300 mr-4">
          Business
        </button>
        <button className="px-6 py-3 rounded-2xl focus:bg-zinc-700 hover:bg-zinc-700 transition-colors duration-300 mr-4">
          Politic
        </button>
        <button className="px-6 py-3 rounded-2xl focus:bg-zinc-700 hover:bg-zinc-700 transition-colors duration-300 mr-4">
          Animals
        </button>
        <button className="px-6 py-3 rounded-2xl focus:bg-zinc-700 hover:bg-zinc-700 transition-colors duration-300">
          World
        </button>
      </div>
    </header>
  );
};

export default Header;
