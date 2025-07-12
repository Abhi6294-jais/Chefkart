import ShowKart from "./ShowKart";

const Top2 = () => {
  return (
    <div>
    <div className="bg-[#f1f2f5] py-10 px-6 w-full ">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-16 max-w-screen-2xl mx-auto">
        
        {/* Left: Heading */}
        <div className="lg:w-1/2">
          <p className="text-orange-500 font-semibold text-2xl md:text-4xl mb-2 mt:6 md:mt-9">Why Choose</p>
          <h2 className="text-3xl md:text-6xl font-bold text-black">
            Chefit: One-Time Cook
          </h2>
        </div>

        {/* Right: Description */}
        <div className="lg:w-1/2 border-l-4 border-orange-500 pl-4 text-2xl md:text-[1.8rem] text-gray-1000 mt-4  md:mt-12 ">
          Get a certified cook for one-time to prepare delicious<br className="hidden sm:block" /> 
          food in your kitchen.
        </div>
        
      </div>
    </div>
    <ShowKart/>
    </div>
  );
};

export default Top2;
