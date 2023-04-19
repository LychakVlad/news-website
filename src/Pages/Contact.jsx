import React from 'react';
import SecondTitle from '../Components/Titles/SecondTitle';
import { ReactComponent as Telegram } from '../assets/telegram.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Google } from '../assets/google.svg';

const Contact = () => {
  return (
    <div className=" w-full mt-10 h-full flex flex-col items-center">
      <SecondTitle title="Check out our social media" />
      <div className="flex w-full max-w-xl justify-between mb-10">
        <a
          href="mailto: lycakvladislav@gmail.com"
          className="hover:opacity-70  transition-opacity duration-300 "
        >
          <Google style={{ width: 100, height: 100 }} />
        </a>
        <a
          href="https://t.me/Relast1"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70  transition-opacity duration-300 "
        >
          <Telegram style={{ width: 100, height: 100 }} />
        </a>

        <a
          href="https://www.linkedin.com/in/vladislav-lychak/"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70  transition-opacity duration-300 "
        >
          <Linkedin style={{ width: 100, height: 100 }} />
        </a>

        <a
          href="https://github.com/LychakVlad"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70  transition-opacity duration-300 "
        >
          <Github style={{ width: 90, height: 95 }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
