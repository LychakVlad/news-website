import React from 'react';

const Footer = () => {
  return (
    <div className="bg-zinc-800 text-white text-lg h-24 w-full flex items-center justify-center m-auto">
      <a
        href="https://github.com/LychakVlad"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-70  transition-opacity duration-300 "
      >
        Designed and developed using React, Tailwind and Figma
      </a>
    </div>
  );
};

export default Footer;
