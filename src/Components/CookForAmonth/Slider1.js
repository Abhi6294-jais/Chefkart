import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "— Rohan Pal",
    quote: "Each cook that they assigned for my 4 chefit bookings was aware of everything in the kitchen & didn’t require guidance while working. Well-behaved and cooked amazing food!",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_testimonial_5274df66dc.webp&w=1920&q=75",
  },
  {
    name: "— Akhil Desai",
    quote: "Pretty impressed by the personalised approach. The cook prepared delicious & nutritious homemade food according to my specific dietary needs and preferences. Will definitely book again!",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_01_25aa96ff9c.webp&w=1920&q=75",
  },
  {
    name: "— Pooja Sachdeva",
    quote: "Chefit is great for when I'm short on time but still want a home-cooked meal. I book this service at least once a week. It’s an affordable and healthy option. I say go for it the next time you don't feel like cooking.",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_04_bc36b188a4.webp&w=1920&q=75",
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

const Slider1 = () => {
  return (
    <div className="py-10 bg-white px-4 sm:px-6 md:px-12">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-2 sm:px-4 py-3">
            <div className="min-h-[26rem] sm:h-[28rem] bg-[#2d4739] text-[#ededed] hover:bg-white hover:text-black rounded-[1.45rem] border-2 hover:border-green-300 transition-transform duration-700 ease-in-out hover:scale-105 p-4 sm:p-6 text-center flex flex-col items-center justify-start">
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
              <p className="text-sm sm:text-[1.1rem] leading-relaxed mb-3 sm:mb-4 px-2">
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

export default Slider1;


