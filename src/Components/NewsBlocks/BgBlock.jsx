import React from 'react';
import photo from '../../assets/test.jpeg';

const BgBlock = () => {
  return (
    <div className="bg-white col-start-1 col-end-3 z-50 overflow-hidden group cursor-pointer">
      <div className="w-full h-full relative">
        <div className=" absolute left-0 top-0 h-full w-full ">
          <img
            src={photo}
            alt="img"
            className=" object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className=" p-10 relative w-full h-full flex flex-col justify-end bg-gray-950 bg-opacity-40">
          <h2 className=" text-4xl font-bold mb-6 text-white max-w-2xl">
            Pet Arrives Home, Dog-Tired, After Alaskan Sea-Ice Odyssey
          </h2>
          <div className="flex text-lg">
            <p className="mr-4 text-white">3:30 PM</p>
            <p className="text-white">#pets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgBlock;
