import React from 'react';
import FirstTitle from '../Titles/FirstTitle';

const Header = () => {
  return (
    <header className="bg-zinc-800 px-20 h-24 w-full flex items-center justify-between">
      <FirstTitle title={'NEWS'} />
      <div className="text-white text-2xl">
        <a
          href="/about"
          className="mr-20 hover:opacity-50 transition-opacity duration-300"
        >
          About
        </a>
        <a
          href="/contact"
          className="hover:opacity-50 transition-opacity duration-300"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
