const Mission = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-orange-500 mb-8 font-bold text-3xl">Mission</h2>
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
              Impacting the cooking industry
            </h1>
            <p className="mt-8 text-2xl leading-relaxed text-black">
              We are on a mission to manage millions of kitchens while empowering the cooking community to contribute significantly to the economy.
            </p>
          </div>

          <div className="lg:max-w-2xl lg:w-full md:w-3/4 w-full h-auto">
            <img
              className="object-cover object-center rounded-[1rem] w-full h-auto"
              alt="hero"
              src="https://thechefkart.com/_next/image?url=%2FiStock-1223383996%201.png&w=1920&q=75"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;

