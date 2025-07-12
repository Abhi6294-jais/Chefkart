const Vision = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-16 py-24 gap-y-12 md:gap-x-24">

          {/* Image */}
          <div className="flex-grow lg:max-w-2xl lg:w-[40%] w-full md:w-1/2">
            <img
              className="object-cover object-center rounded-[1rem] w-full h-auto"
              alt="hero"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FAbout_us_Banner_02_413026c0c6.webp&w=1920&q=75"
            />
          </div>

          {/* Text Container */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-orange-500 mb-8 font-bold text-3xl">Vision</h2>
            <h1 className="sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
              One kitchen at a time
            </h1>
            <p className="mt-8 text-2xl leading-relaxed text-black">
              Our vision is to ensure that every household in the country can enjoy quality food prepared by our cooks in their own kitchens.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Vision;


