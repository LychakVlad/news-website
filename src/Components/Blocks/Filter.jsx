import React, { useState } from 'react';

const Filter = ({ setSelectedSource, setSortBy }) => {
  const [selectedButton, setSelectedButton] = useState('all');

  const handleClick = (source, button) => {
    setSelectedButton(button);
    setSelectedSource(source);
  };

  return (
    <div className="flex justify-between font-semibold text-xl items-end text-zinc-700  mt-10">
      <div>
        <button
          onClick={() => handleClick('', 'all')}
          className={`px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700 focus:text-white hover:text-white transition-colors duration-300 mr-4 ${
            selectedButton === 'all' ? 'bg-zinc-700 text-white' : ''
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleClick('Engadget', 'engadget')}
          className={`px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700 focus:text-white hover:text-white transition-colors duration-300 mr-4 ${
            selectedButton === 'engadget' ? 'bg-zinc-700 text-white' : ''
          }`}
        >
          Engadget
        </button>
        <button
          onClick={() => handleClick('BBC News', 'bbc')}
          className={`px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700 focus:text-white hover:text-white transition-colors duration-300 mr-4 ${
            selectedButton === 'bbc' ? 'bg-zinc-700 text-white' : ''
          }`}
        >
          BBC
        </button>
        <button
          onClick={() => handleClick('Gizmodo.com', 'gizmodo')}
          className={`px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700 focus:text-white hover:text-white transition-colors duration-300 mr-4 ${
            selectedButton === 'gizmodo' ? 'bg-zinc-700 text-white' : ''
          }`}
        >
          Gizmodo
        </button>
        <button
          onClick={() => handleClick('Lifehacker.com', 'lifehacker')}
          className={`px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700 focus:text-white hover:text-white transition-colors duration-300 ${
            selectedButton === 'lifehacker' ? 'bg-zinc-700 text-white' : ''
          }`}
        >
          Lifehacker
        </button>
      </div>
      <div className="flex items-center">
        <div className="px-10 py-3 transition-colors duration-300">
          Sort by:
        </div>
        <select
          className="rounded-lg px-4 py-2 "
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="relevancy">Relevancy</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
