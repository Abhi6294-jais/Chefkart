
import ShowKart1 from "./ShowKart1";

const Top5 = () => {
  return (
    <div>
    <div className="bg-[#f1f2f5] py-10 px-6 w-full ">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-16 max-w-screen-2xl mx-auto">
        
        {/* Left: Heading */}
        <div className="lg:w-1/2">
          <p className="text-orange-500 font-semibold text-4xl mb-2 mt-9 mb-2">Why Choose</p>
          <h2 className="text-6xl font-bold text-black">
           Chef for Party
          </h2>
        </div>

        {/* Right: Description */}
        <div className="lg:w-1/2 border-l-4 border-orange-500 pl-4 text-[1.8rem] text-gray-1000 mt-12 ">
          Hire a professional Multi-cuisine expert chef to elevate<br className="hidden sm:block" /> 
          your party hosting experience.
        </div>
        
      </div>
    </div>
    <ShowKart1/>
    </div>
  );
};

export default Top5;