import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer 
               bg-white/80 shadow-lg hover:shadow-xl text-gray-800 
               w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
  >
    <FaArrowRight className="text-xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer 
               bg-white/80 shadow-lg hover:shadow-xl text-gray-800 
               w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
  >
    <FaArrowLeft className="text-xl" />
  </div>
);


export default function SimpleSlider() {
  const settings = {
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full mx-auto text-center py-10 px-4">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-8 text-black">
        एक प्रमुख पहल
      </h1>

      {/* Slider */}
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="flex flex-wrap justify-center gap-6 items-center p-5">
            <div className="w-full sm:w-[45%]">
              <img src="slider1.png" alt="Left" className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-full sm:w-[45%]">
              <img src="slider2.png" alt="Right" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div className="flex flex-wrap justify-center gap-6 items-center p-6">
            <div className="w-full sm:w-[45%]">
              <img src="slider3.png" alt="Left" className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-full sm:w-[45%]">
              <img src="slider4.png" alt="Right" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <div className="flex flex-wrap justify-center gap-6 items-center p-6">
            <div className="w-full sm:w-[45%]">
              <img src="slider5.png" alt="Left" className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-full sm:w-[45%]">
              <img src="slider6.png" alt="Right" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}



