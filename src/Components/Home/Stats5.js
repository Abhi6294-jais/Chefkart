

const Stat5 = () => {
  return (
    <div className="bg-white py-4 md:py-12 px-4 sm:px-6 lg:px-8 border-b-[.1rem] border-gray-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        
        {/* Block 1 */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-6 md:border-none">
          <div className="flex items-center ">
            <h2 className="text-4xl md:text-7xl font-bold text-black">3M+</h2>
  
          </div>
          <p className="text-1xl md:text-3xl text-black mt-2">Meals cooked with love</p>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-6 md:border-none">
          <div className="flex items-center ">
            <h2 className="text-4xl md:text-7xl font-bold text-black">4500+</h2>
    
          </div>
          <p className="text-1xl md:text-3xl text-black mt-2">Verified & Trained Cooks</p>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-6 md:border-none">
          <div className="flex items-center ">
            <h2 className="text-4xl md:text-7xl font-bold text-black">10K+</h2>
          </div>
          <p className="text-1xl md:text-3xl text-black mt-2">Households served</p>
        </div>

      </div>
    </div>
  );
};

export default Stat5;

