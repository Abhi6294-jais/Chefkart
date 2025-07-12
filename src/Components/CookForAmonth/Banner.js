import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[250px] sm:h-[350px] md:h-[350px] lg:h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: "url('https://s3-eu-west-1.amazonaws.com/production-static-tff/app/uploads/2022/10/16050954/DkoIM24VAAApGkI-1280x480.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4 sm:px-8">
        <h2 className="text-base sm:text-3xl md:text-4xl  font-semibold">
          What's better than your favourite food?
        </h2>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 mt-2 sm:mt-4 leading-tight">
          Getting it cooked in <br className="hidden sm:block" />
          your kitchen.
        </p>
      </div>
    </div>
  );
};

export default Banner;

