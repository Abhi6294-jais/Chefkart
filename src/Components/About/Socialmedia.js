import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Socialmedia = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <h2 className="text-[3.4rem] font-bold text-gray-900 mb-6">Let's Get Social</h2>
      <div className="flex space-x-6 mt-10">
        <Link
          to="/twitter"
          className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition duration-200"
        >
          <FaTwitter className="text-4xl text-gray-800" />
        </Link>
        <Link
          to="/instagram"
          className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition duration-200"
        >
          <FaInstagram className="text-4xl text-gray-800" />
        </Link>
        <Link
          to="/linkedin"
          className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition duration-200"
        >
          <FaLinkedinIn className="text-4xl text-gray-800" />
        </Link>
      </div>
    </div>
  );
};

export default Socialmedia;


