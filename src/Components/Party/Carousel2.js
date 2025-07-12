

export default function Carouse2() {
  return (
    <div className="relative w-full">
      {/* Only apply fixed height on larger screens */}
      <div className="relative w-full h-auto sm:h-[90vh]">
        <img
          src="https://img.freepik.com/premium-photo/chef-cooking-restaurant_835197-3938.jpg"
          alt="Slide"
          className="w-full h-auto sm:h-full object-contain sm:object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-10 md:px-20 bg-black bg-opacity-40 sm:bg-transparent">
          <div className="text-white text-center sm:text-left max-w-4xl space-y-5 sm:space-y-7">
            <h1 className="text-2xl sm:text-6xl md:text-6xl font-bold">
              Hire the Best Chef for Party
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-orange-500">
              In Delhi-NCR, Bangalore & Mumbai
            </h2>
            <p className="  md:text-[1.8rem]">
         Experience the taste from around the world without leaving the coziness of home.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-2xl font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
