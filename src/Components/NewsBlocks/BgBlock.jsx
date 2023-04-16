import React from 'react';
import photo from '../../assets/test.jpeg';

const BgBlock = () => {
  return (
    <div className="bg-white col-start-1 col-end-3 ">
      <div className="w-full relative">
        <div className=" absolute left-0 top-0">
          <img src={photo} alt="img" className=" object-cover" />
        </div>
        <div className="max-w-lg p-10 relative ">
          <h2 className=" text-4xl font-bold mb-6 text-white flex items-end">
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
