import React from 'react';

const HeaderMenu = ({ opened, menuHandler }) => {
  return (
    <div
      className={`text-white text-2xl hidden max-sm:flex absolute top-24 items-center justify-center left-0 bg-zinc-600 h-full w-full px-2 transition-opacity duration-300 ${
        opened ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <a onClick={menuHandler} href="/about" className="mr-20">
        About
      </a>
      <a onClick={menuHandler} href="/contact">
        Contact
      </a>
    </div>
  );
};

export default HeaderMenu;
