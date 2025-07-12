import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="mt-0 pt-0">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative w-full">
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_01_f31e87e92e.webp&w=1920&q=75"
            alt="Slide 1"
            className="w-full h-[90vh] object-cover"
          />
          
          <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
            <div className="text-white max-w-xl space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold">
                ChefKart का हिस्सा बनें
              </h1>
              <p className="text-lg md:text-xl mt-2 mb-2">
                हमसे जुड़े 4500 से भी ज़्यादा कुक्स का हिस्सा बनें और अपने कौशल को आगे बढ़ाएँ।
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-2xl text-2xl font-semibold mt-2">
                ChefKart से जुड़ें
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full">
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_02_6c8df4e377.webp&w=1920&q=75"
            alt="Slide 2"
            className="w-full h-[90vh] object-cover"
          />
        
          <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
            <div className="text-white max-w-xl space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold">
                हुनर से पैसे कमाएँ।
              </h1>
              <p className="text-lg md:text-xl mt-2 mb-2">
                अपने खाना बनाने की प्रतिभा को एक नई शुरुआत दें और इसके माध्यम से पैसे कमाएँ।
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-2xl text-2xl font-semibold">
                ChefKart से जुड़ें
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full">
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_03_e679e84c56.webp&w=1920&q=75"
            alt="Slide 3"
            className="w-full h-[90vh] object-cover"
          />
       
          <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
            <div className="text-white max-w-xl space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold">
                अपने कुकिंग करियर की शुरुआत करें
              </h1>
              <p className="text-lg md:text-xl mt-2 mb-2">
                ChefKart के साथ काम करके अपने क्षेत्र में नाम बनाएं और आत्मनिर्भर बनें।
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-2xl text-2xl font-semibold">
                ChefKart से जुड़ें
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

