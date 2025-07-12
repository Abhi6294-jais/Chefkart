


const Stat2 = () => {
  return (
    <div className="bg-[#2F473A] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        {/* Block 1 */}
        <div className="flex flex-col items-center  rounded-2xl p-10  sbg-[#2F473A]">
          <h2 className="text-7xl font-bold text-white">3M+</h2>
          <p className="text-3xl md:text-2xl text-white mt-6">Meals cooked with love</p>
        </div>
        {/* Block 2 */}
         <div className="flex flex-col items-center  rounded-2xl p-10  sbg-[#2F473A]">
          <h2 className="text-7xl font-bold text-white">4500+</h2>
          <p className="text-3xl md:text-2xl text-white mt-6">Verified & trained cooks</p>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col items-center  rounded-2xl p-10  sbg-[#2F473A]">
          <h2 className="text-7xl font-bold text-white">10K+</h2>
          <p className="text-3xl md:text-2xl text-white mt-6">Households served</p>
        </div>

      </div>
    </div>
  );
};

export default Stat2;
