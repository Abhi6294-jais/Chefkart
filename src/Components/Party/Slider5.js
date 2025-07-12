
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const platforms = [
  {
    id: 1,
    imageUrl:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMexican_9e7092cb2b.webp&w=1920&q=75", // Netflix
  },

  {
    id: 2,
    imageUrl:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Ffood_1_8870eea109_a39bceba07.webp&w=1920&q=75", // Disney+
  },
  {
    id: 3,
    imageUrl:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Ftop_view_delicious_noodles_concept_9283eeb6c4.webp&w=1920&q=75", // Hulu
  },
  {
    id: 4,
    imageUrl:
      "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FItalian_168d980a5a.webp&w=1920&q=75", // HBO
  },
];

const Slider5 = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "0px",
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="platform-carousel  py-12 max-w-150 mx-auto relative">
      <Slider {...settings}>
        {platforms.map((platform) => (
          <div key={platform.id} className="px-2">
            <div className="w-full flex justify-center items-center h-[350px] md:h-[600px] ">
              <img
                src={platform.imageUrl}
                className="w-[180px] h-[180px] md:w-[350px] md:h-[350px]  object-cover rounded-full transition-all duration-300"
                alt="Cuisine"
              />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
       .platform-carousel .slick-slide img {
  opacity: 0.6;
  transform: scale(1.1);
  transition: all 0.6s ease;
}
.platform-carousel .slick-center img {
  opacity: 1;
  transform: scale(1.8);
}

      `}</style>
    </div>
  );
};

export default Slider5;


