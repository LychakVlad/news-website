import React, { useState } from 'react';
import FirstTitle from '../../Components/UI/Titles/FirstTitle';
import HeaderMenu from '../UI/HeaderMenu';
import { Slant as Hamburger } from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const menuHandler = () => {
    setOpen(!isOpen);
  };

  return (
    <header className=" bg-zinc-800 px-20 py-3 w-full flex items-center justify-between max-lg:px-4 relative ">
      <FirstTitle title={'NEWS'} />
      <div className="text-white text-2xl max-sm:hidden">
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
      <div className="text-white hidden max-sm:block">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <HeaderMenu opened={isOpen} menuHandler={menuHandler} />
    </header>
  );
};

export default Header;
