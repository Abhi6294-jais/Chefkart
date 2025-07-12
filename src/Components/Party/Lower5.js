const Lower5 = () => {
  return (
    <section className="bg-[#214e34] body-font">
      <div className="w-full flex flex-col md:flex-row items-center">

        <div className="w-full md:w-1/2">
          <img
            className="w-full h-full  object-cover"
            alt="hero"
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSign_up_d1762e3ca9.webp&w=1920&q=75"
          />
        </div>

        <div className="w-full md:w-1/2 px-6 md:pl-24 py-10 md:py-12 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 font-bold text-white">
            <span className="text-orange-500">The Taste of Luxury</span> Experience <br className="hidden sm:block" />
            elevated culinary perfection, <br className="hidden sm:block" />
            as our <span className="text-orange-500">highly skilled chefs</span> take <br className="hidden sm:block" />
            your party to new heights.
          </h1>
        </div>

      </div>
    </section>
  );
};

export default Lower5;

