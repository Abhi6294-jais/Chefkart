import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const chefs = [
  {
    name: "Rajesh Rathod",
    experience: "10+ yrs experience",
    rating: "4.9",
    specialties: ["North Indian", "South Indian", "Continental", "Italian"],
    img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_03_1a8f5f0a19.webp&w=1920&q=75",
  },
  {
    name: "Aisha Ahmed",
    experience: "5+ yrs experience",
    rating: "4.9",
    specialties: ["North Indian", "Chinese"],
    img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMeet_our_cook_02_8d8224ac33.webp&w=1920&q=75",
  },
  {
    name: "Manoj Sinha",
    experience: "8+ yrs experience",
    rating: "5",
    specialties: ["South Indian", "Biryani", "Tandoori"],
    img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMeet_our_cook_03_af4e437dfa.webp&w=1920&q=75",
  },
  {
    name: "Sushma Patel",
    experience: "4+ yrs experience",
    rating: "5",
    specialties: ["Gujarati", "North Indian"],
    img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMeet_our_cook_01_efe7adce0f.webp&w=1920&q=75",
  },
  {
    name: "Sushma Patel",
    experience: "4+ yrs experience",
    rating: "5",
    specialties: ["Gujarati", "North Indian"],
    img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_02_a4025861ea.webp&w=1920&q=75",
  },
];

const Topratedcooks = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.6,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.6,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="bg-black py-10 px-6">
        <h1 className="text-white text-center p-5 md:mb-5 font-bold text-3xl md:text-6xl">Meet Our Top Rated Chefs</h1>
      <Slider {...settings}>
        {chefs.map((chef, index) => (
          <div key={index} className="px-1 sm:px-0.5">
            <div className="w-full md:w-[78%] h-[350px] md:h-[550px]  bg-[#111] rounded-lg border border-gray-700 overflow-hidden group relative">
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
  <h3 className="text-1xl md:text-3xl font-semibold mb-2">{chef.name}</h3>
  <p className="text-[1rem] md:text-[1.2rem] mb-2">
    ⭐ {chef.rating} • {chef.experience}
  </p>
  <div className="flex flex-wrap gap-2 mt-2">
    {chef.specialties.map((spec, i) => (
      <span
        key={i}
        className="bg-orange-500 text-white text-1xl md:text-2xl px-1 md:px-3 py-1 rounded-full"
      >
        {spec}
      </span>
    ))}
  </div>
</div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Topratedcooks;
