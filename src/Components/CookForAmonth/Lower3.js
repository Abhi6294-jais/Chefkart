import React from 'react';

const Lower3 = () => {
  return (
    <section className="text-gray-600 bg-[#f1f1f1] body-font">
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Left content */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 lg:pl-24 py-12 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold text-orange-500 leading-tight">
            Homemade food that <br className="hidden sm:block" /> warms the soul
          </h1>
          <p className="mb-8 leading-relaxed mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-black">
            Never have to worry about skipping meals or <br className="hidden sm:block" /> eating oily outside food..
          </p>
          <button className="inline-flex mt-6 sm:mt-8 text-white text-base sm:text-xl lg:text-2xl bg-orange-500 border-0 py-3 px-6 sm:py-4 sm:px-8 rounded-md hover:bg-gray-800 hover:text-orange-500">
            Book now
          </button>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto object-cover"
            alt="hero"
            src="https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Lower3;


