export default function Carouse2() {
  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="relative w-full h-auto sm:h-[90vh]">
        <img
          src="https://img.freepik.com/premium-photo/chef-cooking-restaurant_835197-3938.jpg"
          alt="Slide"
          className="w-full h-auto sm:h-full object-contain sm:object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-10 md:px-20 bg-black bg-opacity-50 sm:bg-transparent">
          <div className="text-white text-center sm:text-left max-w-4xl space-y-3 sm:space-y-5 md:space-y-7">
            
            {/* Headline */}
            <h1 className="text-xl sm:text-6xl md:text-6xl font-bold leading-snug sm:leading-tight">
              Hire the Best Chef for Party
            </h1>

            {/* Subheadline */}
            <h2 className="text-lg sm:text-4xl md:text-6xl font-bold text-orange-500">
              In Delhi-NCR, Bangalore & Mumbai
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-lg md:text-[1.8rem] leading-normal">
              Experience the taste from around the world without leaving the coziness of home.
            </p>

            {/* Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-base sm:text-2xl font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

