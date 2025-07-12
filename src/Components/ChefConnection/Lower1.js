import React from 'react';

const Lower1 = () => {
  return (
    
      <section className="text-gray-500 bg-gray-100  body-font overflow-hidden w-full  pt-10">
          <div className="lg:flex lg:flex-row flex-col justify-between items-center">
            {/* Image Section */}
           <div className="lg:w-1/2 w-full">
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_female_Cooks_ceb391c475.webp&w=1920&q=75"
          alt="ChefKart Cooks"
          className="w-full  object-cover"
        />
      </div>
            {/* Text Section */}
            <div className="lg:w-1/2 w-full mt-12 lg:pl-10 lg:py-6 ">
              <h2 className="text-[1.35rem] font-bold text-orange-500 tracking-widest">हमें है विश्वास</h2>
              <h1 className="text-gray-900 text-4xl lg:text-6xl font-bold mb-4">आपका बनाया खाना, खाएगा ज़माना!</h1>
              <h2 className="text-sm text-black font-bold mt-10 text-[1.55rem]">ऊपर जाएँ</h2>
              <button className="flex hover:text-black hover:bg-orange-500  text-white mt-14 text-3xl bg-black border-0 p-4 font-bold rounded-lg">ChefKart से जुड़ें</button>
            </div>
          </div>
        
      </section>
    
  );
};

export default Lower1;

