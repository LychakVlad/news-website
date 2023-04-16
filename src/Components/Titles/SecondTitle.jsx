import React from 'react';

const SecondTitle = ({ ...props }) => {
  return (
    <h2 className="flex flex-col justify-start my-7 font-bold text-4xl">
      {props.title}
    </h2>
  );
};

export default SecondTitle;
