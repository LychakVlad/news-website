import React from 'react';
import SecondTitle from '../Titles/SecondTitle';

const NoImgBlock = () => {
  return (
    <div className="bg-white w-full h-full flex-col cursor-pointer">
      <div className="max-w-sm p-4 flex flex-col h-full justify-between">
        <p className="text-neutral-400">#pets</p>
        <div>
          <SecondTitle title={'Pet Arrives Home, Dog-Tired, After Alaskan Sea-Ice Odyssey'} />
          <p className="text-lg mb-6">
            A 1-year-old Australian shepherd took an epic trek across 150 miles
            of frozen Bering Sea ice before being safely returned to his home in
            Alaska
          </p>
        </div>
        <p className="mr-4 text-rose-600">3:30 PM</p>
      </div>
    </div>
  );
};

export default NoImgBlock;
