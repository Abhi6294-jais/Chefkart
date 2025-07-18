import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "—  Aastha Khurana",
    quote: "Abhishek was the chef for our party. He made the amazing winter delicacy moong dal halwa, perfectly sweet & less ghee, spent a good amount of time & cooked with patience.",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_03_de7c206a23.webp&w=1920&q=75",
  },
  {
    name: "—Tarun Gehlaut",
    quote: "I joined a home with a chefkart cook 5 months ago. It has been very easy for me to be onboarded onto the process and to be able to manage my cook, timings, etc.",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_05_0affc91e03.webp&w=1920&q=75",
  },
  {
    name: "— Bhavya Sinha",
    quote: "Chefkart is a safe and secure platform I can trust. Their commitment to quality and customer satisfaction is unmatched in the industry."

,
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_02_d8db9e3e65.webp&w=1920&q=75",
  },
  {
    name: "— Diwakar Kumar",
    quote: "“I like cooking my own meals, but when I am occupied with work, I book Chefit. It's a much-required service that is convenient and more affordable than ordering online.”",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fimage_15_c28030c449.png&w=1920&q=75",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};
const Slider7 = () => {
  return (
    <div className="py-10 bg-white px-4 sm:px-6 md:px-12">
  <Slider {...settings}>
    {testimonials.map((item, index) => (
      <div key={index} className="px-2 sm:px-4 py-3">
        <div className="min-h-[28rem] sm:h-[28rem] bg-[#2d4739] text-[#ededed] hover:bg-white hover:text-black rounded-[1.45rem] border-2 hover:border-green-300 transition-transform duration-700 ease-in-out hover:scale-105 p-4 sm:p-6 text-center flex flex-col items-center justify-start">
          <img
            src={item.image}
            alt={item.name}
            className="w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] object-cover rounded-full mx-auto mb-4 sm:mb-6 bg-gray-100"
          />
          <div className="flex justify-center gap-x-1 sm:gap-x-2 mb-3">
            {[...Array(5)].map((_, starIndex) => (
              <img
                key={starIndex}
                src="https://thechefkart.com/Path.svg"
                alt="star"
                className="w-4 h-4 sm:w-[1.45rem] sm:h-[1.45rem]"
              />
            ))}
          </div>
          <p className="text-sm sm:text-[1.25rem] leading-relaxed mb-3 sm:mb-4 px-2">
            {`"${item.quote}"`}
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mb-2 sm:mb-3"></span>
          <h3 className="text-base sm:text-xl font-medium">{item.name}</h3>
        </div>
      </div>
    ))}
  </Slider>
</div>

  );
};

export default Slider7;




