import React from 'react';
import SecondTitle from '../Titles/SecondTitle';
import { ReactComponent as Telegram } from '../../assets/telegram.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Google } from '../../assets/google.svg';

const SocialLinks = () => {
  return (
    <div className="bg-gray-400 w-full mt-10 h-full flex flex-col items-center">
      <SecondTitle title="Check out our social media" />
      <div className="flex">
        <Google style={{ width: 100, height: 100 }} />
        <Telegram style={{ width: 100, height: 100 }} />
        <Linkedin style={{ width: 100, height: 100 }} />
        <Github style={{ width: 100, height: 100 }} />
      </div>
    </div>
  );
};

export default SocialLinks;
