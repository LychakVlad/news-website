import React from 'react';

const SmallBlock = ({ photo }) => {
  return (
    <div className="bg-white w-full h-full flex-col group cursor-pointer">
      <div className=" max-w-lg overflow-hidden">
        <img
          src={photo}
          alt="img "
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="max-w-sm p-4">
        <h2 className=" text-2xl font-bold mb-6">
          Pet Arrives Home, Dog-Tired, After Alaskan Sea-Ice Odyssey
        </h2>
        <p className="mb-6">
          A 1-year-old Australian shepherd took an epic trek across 150 miles of
          frozen Bering Sea ice before being safely returned to his home in
          Alaska
        </p>
        <div className="flex">
          <p className="mr-4 text-rose-600">3:30 PM</p>
          <p className="text-neutral-400">#pets</p>
        </div>
      </div>
    </div>
  );
};

export default SmallBlock;
