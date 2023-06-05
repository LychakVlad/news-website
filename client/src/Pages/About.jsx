import React from 'react';
import SecondTitle from '../Components/UI/Titles/SecondTitle';

const About = () => {
  return (
    <div className="px-20 bg-gray-100 grow max-lg:px-4">
      <SecondTitle title={'Welcome to our news website'} />
      <div className="text-lg max-w-3xl">
        <p className="mb-5">
          {' '}
          The News Website is a responsive web application developed using
          Tailwind, React, and Node.js. It offers users the latest news and
          information on various topics. The project includes filtering news by
          source sites (such as Engadget, BBC, NYT, and Lifehacker) and a search
          bar for keyword-based article searches. It aims to simplify news
          discovery and address the problem of information overload.
        </p>
      </div>
    </div>
  );
};

export default About;
