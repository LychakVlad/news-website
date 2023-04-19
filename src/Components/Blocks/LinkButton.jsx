import React from 'react';

const LinkButton = ({ title, url }) => {
  return (
    <a
      href={url}
      className=" mt-5 flex items-start bg-zinc-900 text-white p-4 max-w-[140px] hover:opacity-60 transition-opacity duration-300
  "
    >
      {title}
    </a>
  );
};

export default LinkButton;
