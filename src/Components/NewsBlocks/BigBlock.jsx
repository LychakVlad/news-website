import React from 'react';

const BigBlock = ({ photo }) => {
  return (
    <div className="bg-white col-start-1 col-end-4">
      <div className="flex min-h-full">
        <div className=" max-w-lg min-h-full">
          <img src={photo} alt="img" className="w-full h-full  object-cover" />
        </div>
        <div className="max-w-sm p-10">
          <h2 className=" text-2xl font-bold mb-6">
            Pet Arrives Home, Dog-Tired, After Alaskan Sea-Ice Odyssey
          </h2>
          <p className="mb-6">
            A 1-year-old Australian shepherd took an epic trek across 150 miles
            of frozen Bering Sea ice before being safely returned to his home in
            Alaska
          </p>
          <div className="flex">
            <p className="mr-4 text-rose-600">3:30 PM</p>
            <p className="text-neutral-400">#pets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBlock;
