import React from 'react';
import SecondTitle from '../Components/Titles/SecondTitle';
import { ReactComponent as Telegram } from '../assets/telegram.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Google } from '../assets/google.svg';

const Contact = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center m-auto bg-gray-100 grow">
      <SecondTitle title="You can use any of the following methods to contact me" />
      <div className="flex w-full max-w-xl justify-between mt-10">
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
