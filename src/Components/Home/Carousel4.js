export default function Carousel4() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-auto sm:h-[90vh]">
        <img
          src="https://img.freepik.com/premium-photo/chef-cooking-restaurant_835197-3938.jpg"
          alt="Slide"
          className="w-full h-auto sm:h-full object-contain sm:object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-10 md:px-20 bg-black bg-opacity-60 sm:bg-transparent">
          <div className="text-white text-center sm:text-left max-w-[90%] sm:max-w-4xl space-y-3 sm:space-y-6">

            <div className="inline-flex items-center bg-[#5e3b76] text-white font-semibold text-xs sm:text-sm md:text-[1.2rem] rounded-full px-2 py-1 shadow-md w-fit mx-auto sm:mx-0">
              <img
                src="https://thechefkart.com/toast-burger-icon.svg"
                alt="location-icon"
                className="w-5  md:w-8 h-5 md:h-8"
              />
              Operational in Delhi NCR, Bengaluru and Mumbai.
            </div>

            <h1 className="text-[1rem]  md:text-6xl font-bold leading-tight">
              Most Trusted Platform for At-Home Cooking Services
            </h1>

            <p className="text-[1.1rem] md:text-[1.8rem] font-bold text-orange-500">
              Find your perfect cook
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 md:px-5 py-2  rounded-xl text-base sm:text-xl md:text-2xl font-semibold">
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

