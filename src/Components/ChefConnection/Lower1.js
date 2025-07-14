import React from 'react';

const Lower1 = () => {
  return (
    <section className="text-gray-500 bg-gray-100 body-font overflow-hidden w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16 lg:py-20 gap-10">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_female_Cooks_ceb391c475.webp&w=1920&q=75"
            alt="ChefKart Cooks"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-orange-500 text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-widest">
            हमें है विश्वास
          </h2>

          <h1 className="text-gray-900 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            आपका बनाया खाना, खाएगा ज़माना!
          </h1>

          <h2 className="text-black font-bold mt-6 text-base sm:text-lg md:text-xl lg:text-2xl">
            ऊपर जाएँ
          </h2>

          <button className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-black text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-orange-500 hover:text-black transition">
            ChefKart से जुड़ें
          </button>
        </div>
      </div>
    </section>
  );
};

export default Lower1;

