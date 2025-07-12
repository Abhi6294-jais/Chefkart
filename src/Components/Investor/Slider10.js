// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Font Awesome icons

// const investors = [
//   {
//     name: 'Blume Ventures',
//     role: 'Venture Capital Firm',
//     description:
//       'Blume Ventures seeks to partner with transformational companies and support them throughout their journey to effect change and transform lives. The firm’s investment in ChefKart reflects its bold and brave approach to backing revolutionary and ambitious ideas.',
//     logo: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlume_14b49cb0e2.webp&w=1920&q=75',
//     bgColor: '#132852',
//   },
//   {
//     name: 'Mukul Singhal',
//     role: 'Co-founder, and Partner at Pravega Ventures',
//     description:
//       '“ChefKart is driven by the idea to digitise an essential service that is largely unorganised. They are the pioneers in streamlining an industry with tremendous untapped market potential.”',
//     logo: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FPravega_logo_e65d821b25.webp&w=1920&q=75',
//     bgColor: '#1f2937',
//   },
//   {
//     name: 'Deepinder Goyal',
//     role: 'Founder & CEO, Zomato',
//     description:
//       `Deepinder Goyal is the founder and CEO of Zomato, one of the largest food tech companies in India. As an investor of Chefkart, Goyal is backing a promising idea to offer authentic and affordable meals prepared in the comfort of one's home. His investment is a testament to the potential of Chefkart and its innovative approach to at-home cooking services.`,
//     logo: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FGoyal_aa638560fb.webp&w=1920&q=75',
//     bgColor: '#1f2937',
//   },
//   {
//     name: 'Titan Capital',
//     role: 'Venture Capital Firm',
//     description:
//       `Titan Capital is known to support exceptional entrepreneurs who aim to make a significant impact on India and the world. ChefKart's focus on providing trained, verified and professional cooks to busy professionals and families aligns with the firm's commitment to investing in businesses that promote positive lifestyle changes.`,
//     logo: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FTitan_d8b7827ada.webp&w=1920&q=75',
//     bgColor: '#1f2937',
//   },
//   {
//     name: 'Kunal Shah',
//     role: 'Founder, CRED & Angel Investor',
//     description:
//       `Kunal Shah, the founder of CRED and a prominent angel investor, has a proven track record of success in the startup world. With his support, Chefkart is well-positioned to expand its services and make a significant impact on the industry.`,
//     logo: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FKunal_Shah_f654510a2d.webp&w=1920&q=75',
//     bgColor: '#1f2937',
//   },
// ];


// // Custom Arrows with circular background
// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute fixed right-0  top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-400 hover:bg-gray-600 text-white rounded-full w-6 md:w-10 h-6 md:h-10 flex items-center justify-center shadow-md transition"
//     onClick={onClick}
//   >
//     <FaArrowRight />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-0  top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-400 hover:bg-gray-600 text-white rounded-full w-6 md:w-10 h-6 md:h-10 flex items-center justify-center shadow-md transition"
//     onClick={onClick}
//   >
//     <FaArrowLeft />
//   </div>
// );
// const Slider10 = () => {
// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 700,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   adaptiveHeight: true,
//   nextArrow: <NextArrow />,
//   prevArrow: <PrevArrow />,
// };


//  return (
// <div className="w-full px-4 md:px-10 py-10 md:py-16 relative">
//   <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 md:mb-12">Our Investors</h2>
//     <Slider {...settings}>
//       {investors.map((inv, idx) => (
//         <div key={idx}>
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-11">
//             {/* Text Section */}
//             <div className="md:w-1/2 text-gray-500 ">
//               <p className="text-1xl lg:text-3xl mb-6">{inv.description}</p>
//               <h3 className="text-2xl md:text-4xl font-bold text-gray-600 mt-6 md:mt-12">{inv.name}</h3>
//               <p className="text-gray-500 text-[1.2rem] md:text-2xl md:mt-2">{inv.role}</p>
//             </div>

//             {/* Logo Box */}
//             <div
//               className="md:w-[500px] w-full h-[200px] md:h-[420px] flex items-center justify-center rounded-md"
//               style={{ backgroundColor: inv.bgColor }}
//             >
//               <img src={inv.logo} alt={inv.name} className="max-w-[100%] h-auto" />
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   </div>
// );

// };

// export default Slider10;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const investors = [
  {
    name: 'Blume Ventures',
    role: 'Venture Capital Firm',
    description:
      'Blume Ventures seeks to partner with transformational companies and support them throughout their journey to effect change and transform lives. The firm’s investment in ChefKart reflects its bold and brave approach to backing revolutionary and ambitious ideas.',
    logo: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlume_14b49cb0e2.webp&w=1920&q=75',
    bgColor: '#132852',
  },
  {
    name: 'Mukul Singhal',
    role: 'Co-founder, and Partner at Pravega Ventures',
    description:
      '“ChefKart is driven by the idea to digitise an essential service that is largely unorganised. They are the pioneers in streamlining an industry with tremendous untapped market potential.”',
    logo: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FPravega_logo_e65d821b25.webp&w=1920&q=75',
    bgColor: '#1f2937',
  },
  {
    name: 'Deepinder Goyal',
    role: 'Founder & CEO, Zomato',
    description:
      `Deepinder Goyal is the founder and CEO of Zomato, one of the largest food tech companies in India. As an investor of Chefkart, Goyal is backing a promising idea to offer authentic and affordable meals prepared in the comfort of one's home. His investment is a testament to the potential of Chefkart and its innovative approach to at-home cooking services.`,
    logo: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FGoyal_aa638560fb.webp&w=1920&q=75',
    bgColor: '#1f2937',
  },
  {
    name: 'Titan Capital',
    role: 'Venture Capital Firm',
    description:
      `Titan Capital is known to support exceptional entrepreneurs who aim to make a significant impact on India and the world. ChefKart's focus on providing trained, verified and professional cooks to busy professionals and families aligns with the firm's commitment to investing in businesses that promote positive lifestyle changes.`,
    logo: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FTitan_d8b7827ada.webp&w=1920&q=75',
    bgColor: '#1f2937',
  },
  {
    name: 'Kunal Shah',
    role: 'Founder, CRED & Angel Investor',
    description:
      `Kunal Shah, the founder of CRED and a prominent angel investor, has a proven track record of success in the startup world. With his support, Chefkart is well-positioned to expand its services and make a significant impact on the industry.`,
    logo: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FKunal_Shah_f654510a2d.webp&w=1920&q=75',
    bgColor: '#1f2937',
  },
];

// Custom Arrows with absolute positioning relative to component
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-gray-400 hover:bg-gray-600 text-white rounded-full w-8 md:w-12 h-8 md:h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
    onClick={onClick}
    style={{ position: 'absolute', top: '50%' }}
  >
    <FaArrowRight className="text-sm md:text-base" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-gray-400 hover:bg-gray-600 text-white rounded-full w-8 md:w-12 h-8 md:h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
    onClick={onClick}
    style={{ position: 'absolute', top: '50%' }}
  >
    <FaArrowLeft className="text-sm md:text-base" />
  </div>
);

const Slider10 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false, // Changed to false for consistent height
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full px-4 md:px-10 py-10 md:py-16 relative">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 md:mb-12">Our Investors</h2>
      <div className="slider-container min-h-[500px] md:min-h-[600px] relative"> 
        <Slider {...settings}>
          {investors.map((inv, idx) => (
            <div key={idx}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-12 py-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-gray-500">
                  <p className="text-lg lg:text-3xl mb-6 leading-relaxed">{inv.description}</p>
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-600 mt-6 md:mt-12">{inv.name}</h3>
                  <p className="text-gray-500 text-xl md:text-2xl md:mt-2 mb-6">{inv.role}</p>
                </div>

                {/* Logo Box */}
                 <div
              className="md:w-[500px] w-full h-[200px] md:h-[420px] flex items-center justify-center rounded-2xl"
              style={{ backgroundColor: inv.bgColor }}
            >
              <img src={inv.logo} alt={inv.name} className="max-w-[100%] h-auto" />
            </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slider10;