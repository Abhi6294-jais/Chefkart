import {Link}  from "react-router-dom"

const Lower7 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#fff3e8]">
        <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Text Section */}
          <div className="md:w-[60%] w-full text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black ">
              हमारे 4500 से भी ज़्यादा कुक्स की टीम का हिस्सा बनें।
            </h1>
          </div>

          {/* Button Section */}
          <div className="md:w-[40%] w-full text-center mt-10 md:mt-0">
            <Link to="join-chefkart">
            <button className="text-white bg-orange-500 py-4 px-10 font-bold rounded-2xl text-2xl sm:text-3xl">
              ChefKart से जुड़ें
            </button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Lower7;




