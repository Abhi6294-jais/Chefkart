import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_10_5ddf0b07ef.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_21_c77b00e93e.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_18_db483bd088.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_08_852bd73dec.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_05_56785e7856.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_23_be73f77f6f.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_09_40fd87e1bd.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_20_fb2b9b8032.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_17_c2beda679c.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_07_dd8dd8a4b0.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_04_24e9f6a36d.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_03_980b84a7ff.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_24_9f0f37936a.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_22_6032e4cfba.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_15_0e982c7e24.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_14_2f200a48bb.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_08_852bd73dec.png",
  "https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_25_6ed7e4df8e.png",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Gallery3 = () => {
  return (
    <section className="bg-gray-100 pb-12 pt-6">
      <h2 className="text-5xl font-bold text-center mb-10">Gallery</h2>
      <div className="w-[95%] mx-auto">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-6 transform transition duration-500 hover:scale-110">
              <div className="overflow-hidden rounded-xl shadow-xl ">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery3;