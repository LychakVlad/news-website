import React from 'react';

const Filter = () => {
  return (
    <div className="text-zinc-700 font-semibold text-xl mt-10 flex justify-center">
      <button className="px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700  focus:text-white hover:text-white transition-colors duration-300 mr-4">
        All
      </button>
      <button className="px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700  focus:text-white hover:text-white transition-colors duration-300 mr-4">
        A
      </button>
      <button className="px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700  focus:text-white hover:text-white transition-colors duration-300 mr-4">
        B
      </button>
      <button className="px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700  focus:text-white hover:text-white transition-colors duration-300 mr-4">
        C
      </button>
      <button className="px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700  focus:text-white hover:text-white transition-colors duration-300 ">
        D
      </button>
    </div>
  );
};

export default Filter;
