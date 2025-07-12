

export default function Carouse1() {
  return (
    <div className="relative w-full">
      {/* Only apply fixed height on larger screens */}
      <div className="relative w-full h-auto sm:h-[90vh]">
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FChefit_Hero_banner_f573fdf12c.webp&w=1920&q=75"
          alt="Slide"
          className="w-full h-auto sm:h-full object-contain sm:object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-10 md:px-20 bg-black bg-opacity-40 sm:bg-transparent">
          <div className="text-white text-center sm:text-left max-w-xl space-y-1 sm:space-y-7">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
              Get a Cook for One-Time
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-orange-500">
              Within 60 Minutes
            </h2>
            <p className="text-sm sm:text-2xl md:text-2xl">
              Forget ordering online! Get fresh food cooked in your kitchen.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 md:px-6 py-1 md:py-3 rounded-xl text-base sm:text-2xl font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




