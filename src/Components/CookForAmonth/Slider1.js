import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [testimonials, setTestimonials] = useState([]);

useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const response = await fetch("http://localhost:8000/testimonial/getall");
      const data = await response.json();
      console.log("Fetched data ===>", data);

      // Fix: get the actual array from data.data
      if (Array.isArray(data.data)) {
        setTestimonials(data.data);
      } else {
        console.error("Unexpected data format", data);
        setTestimonials([]);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setTestimonials([]);
    }
  };

  fetchTestimonials();
}, []);




  return (
    <div className="py-10 bg-white px-4 sm:px-6 md:px-12">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={item._id || index} className="px-2 sm:px-4 py-3">
            <div className="min-h-[26rem] sm:h-[28rem] bg-[#2d4739] text-[#ededed] hover:bg-white hover:text-black rounded-[1.45rem] border-2 hover:border-green-300 transition-transform duration-700 ease-in-out hover:scale-105 p-4 sm:p-6 text-center flex flex-col items-center justify-start">
              <img
                src={item.profileimage}
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
                {`"${item.content}"`}
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mb-2 sm:mb-3"></span>
              <h3 className="text-base sm:text-xl font-medium">— {item.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider1;


