import React from 'react';
import SecondTitle from '../Components/Titles/SecondTitle';

const About = () => {
  return (
    <div className="px-20 bg-gray-100 grow max-lg:px-4">
      <SecondTitle title={'Welcome to our news website'} />
      <div className="text-lg max-w-3xl">
        <p className="mb-5">
          {' '}
          Stay up-to-date with the latest news and current events from around
          the world. Our goal is to provide you with high-quality, unbiased news
          reporting that you can trust.
        </p>
        <p className="mb-5">
          {' '}
          At our news website, we believe that staying informed is essential in
          today's fast-paced world. That's why we offer a wide range of news
          categories, including politics, business, entertainment, technology,
          and sports, so that you can find the information you need quickly and
          easily.
        </p>

        <p className="mb-5">
          Our team of experienced journalists and editors works tirelessly to
          bring you the latest news and analysis, backed by thorough research
          and fact-checking. We are committed to providing accurate and reliable
          reporting, without bias or sensationalism.
        </p>

        <p className="mb-5">
          In addition to breaking news stories, we also offer in-depth coverage
          of important issues and events, as well as opinion pieces and
          editorials from experts in various fields. Our aim is to foster
          informed discussion and debate, and to provide you with the tools you
          need to form your own opinions and make informed decisions.
        </p>

        <p className="mb-5">
          We value your feedback and welcome your comments and suggestions.
          Please feel free to contact us with any questions or concerns you may
          have, and thank you for choosing our news website as your trusted
          source for news and information.
        </p>
      </div>
    </div>
  );
};

export default About;
