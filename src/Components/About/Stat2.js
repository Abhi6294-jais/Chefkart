const Stat2 = () => {
  return (
    <div className="bg-[#2F473A] py-4 md:py-16 px-4 sm:px-8 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-10 text-center">
        
        {/* Block 1 */}
        <div className="flex flex-col items-center rounded-2xl p-8 sm:p-10 bg-transparent">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">3M+</h2>
          <p className="text-2xl sm:text-2xl lg:text-3xl text-white mt-4 sm:mt-6">
            Meals cooked with love
          </p>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col items-center rounded-2xl p-8 sm:p-10 bg-transparent">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">4500+</h2>
          <p className="text-2xl sm:text-2xl lg:text-3xl text-white mt-4 sm:mt-6">
            Verified & trained cooks
          </p>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col items-center rounded-2xl p-8 sm:p-10 bg-transparent">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">10K+</h2>
          <p className="text-2xl sm:text-2xl lg:text-3xl text-white mt-4 sm:mt-6">
            Households served
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stat2;

