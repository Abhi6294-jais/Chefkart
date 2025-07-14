import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const [slides, setSlides] = useState([]);

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

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch("http://localhost:8000/crousel/getall");
        const data = await res.json();

        // assuming it's wrapped like: { message: "...", data: [...] }
        if (Array.isArray(data.data)) {
          setSlides(data.data);
        } else {
          console.error("Invalid slide data format", data);
        }
      } catch (err) {
        console.error("Error fetching carousel data", err);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="mt-0 pt-0">
      <Slider {...settings}>
        {slides.map((item) => (
          <div key={item._id} className="relative w-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[90vh] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
              <div className="text-white max-w-xl space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold">{item.title}</h1>
                <p className="text-lg md:text-xl mt-2 mb-2">{item.content}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-2xl text-2xl font-semibold">
                  ChefKart से जुड़ें
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}


