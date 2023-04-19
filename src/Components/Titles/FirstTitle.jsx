import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FirstTitle = ({ title }) => {
  const { pathname } = useLocation();
  const isOnNewsWebsite = pathname === '/news-website';

  return (
    <h1 className="text-white text-7xl font-bold">
      {isOnNewsWebsite ? (
        <span className=" pointer-events-none">{title}</span>
      ) : (
        <Link to="/news-website">{title}</Link>
      )}
    </h1>
  );
};

export default FirstTitle;
