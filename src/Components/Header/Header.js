import React from 'react';
import { GiBowlOfRice } from 'react-icons/gi';

const CookBanner = () => {
  return (
    <div className="bg-gradient-to-b from-[#f3e9dd] to-[#e6dacb] px-4 py-2 flex items-center justify-center">
      <GiBowlOfRice className="text-orange-600 mr-2" size={40} />
      <span className="text-2xl font-bold text-gray-800">
        Now get a cook for one time in Delhi, Gurgaon & Bangalore !
      </span>
    </div>
  );
};

export default CookBanner;

