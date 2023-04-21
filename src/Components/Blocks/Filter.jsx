import React, { useState } from 'react';

const Filter = ({ setSelectedSource }) => {
  const [selectedButton, setSelectedButton] = useState('Engadget');

  const handleClick = (source, button) => {
    setSelectedButton(button);
    setSelectedSource(source);
  };

  return (
    <div className="flex justify-center font-semibold text-xl items-end text-zinc-700  mt-10 max-xl:flex-col max-xl:items-center">
      <div className="hidden max-xl:flex items-center max-xl:mt-4 ">
        <div className="px-10 py-3 transition-colors duration-300 max-md:px-3">
          Source:
        </div>
        <select
          className="rounded-lg px-4 py-2"
          value={selectedButton}
          onChange={(e) => {
            setSelectedButton(e.target.value);
            setSelectedSource(
              e.target.options[e.target.selectedIndex].dataset.source
            );
          }}
        >
          <option value="engadget" data-source="engadget">
            Engadget
          </option>
          <option value="BBC" data-source="BBC">
            BBC
          </option>
          <option value="NYT" data-source="NYT">
            NYT
          </option>
          <option value="Wired" data-source="Wired">
            Wired
          </option>
          <option value="MacRumors" data-source="MacRumors">
            MacRumors
          </option>
        </select>
      </div>
      <div className="max-xl:hidden">
        <button
          onClick={() => handleClick('engadget', 'engadget')}
          className={`px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700 focus:text-white hover:text-white transition-colors duration-300 mr-4  ${
            selectedButton === 'Engadget' ? 'bg-zinc-700 text-white' : ''
          }`}
        >
          Engadget
        </button>
        <button
          onClick={() => handleClick('BBC', 'BBC')}
          className={`px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700 focus:text-white hover:text-white transition-colors duration-300 mr-4 ${
            selectedButton === 'BBC' ? 'bg-zinc-700 text-white' : ''
          }`}
        >
          BBC
        </button>
        <button
          onClick={() => handleClick('NYT', 'NYT')}
          className={`px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700 focus:text-white hover:text-white transition-colors duration-300 mr-4 ${
            selectedButton === 'NYT' ? 'bg-zinc-700 text-white' : ''
          }`}
        >
          NYT
        </button>
        <button
          onClick={() => handleClick('Wired', 'Wired')}
          className={`px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700 focus:text-white hover:text-white transition-colors duration-300 mr-4 ${
            selectedButton === 'Wired' ? 'bg-zinc-700 text-white' : ''
          }`}
        >
          Wired
        </button>
        <button
          onClick={() => handleClick('MacRumors', 'MacRumors')}
          className={`px-10 rounded-lg py-3 focus:bg-zinc-700 hover:bg-zinc-700 focus:text-white hover:text-white transition-colors duration-300 ${
            selectedButton === 'MacRumors' ? 'bg-zinc-700 text-white' : ''
          }`}
        >
          MacRumors
        </button>
      </div>
    </div>
  );
};

export default Filter;
