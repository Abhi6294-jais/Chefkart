import React from 'react';

const Top6 = () => {
  return (
    
      <section className="text-gray-500 bg-gray-100  body-font overflow-hidden w-full  pt-10">
         <div className="lg:flex lg:flex-row flex-col justify-between items-center">
           
          
            {/* Text Section */}
            <div className="lg:w-1/2 w-full  lg:pl-10 lg:py-2  ml-4 ">
           <div className="inline-block bg-[#3a8459] rounded-3xl px-6 py-2 mb-6">
            <h2 className="text-lg font-semibold text-white">Our Story</h2>
          </div>
              <h1 className="text-gray-900 text-4xl lg:text-6xl font-bold mb-4">Embracing the goal of
                <br className='inline:hidden ' /> <span className='text-[#214e34]'>Change & Empowerment</span> 
              </h1>
              <p className=" text-black  mt-10 text-3xl">We aim to bridge the gap between delicious food and a healthy lifestyle while empowering our cooks.</p>
              <button className="flex hover:text-black hover:bg-orange-500  text-white mt-16 text-3xl bg-black border-0 p-4 font-bold rounded-lg">Contact Us</button>
            </div>


             {/* Image Section */}
           <div className="lg:w-1/2 w-full">
        <img
          src="About.png"
          alt="ChefKart Cooks"
          className="w-full  object-cover mb-7"
        />
      </div>
          </div>

         
        
      </section>
    
  );
};

export default Top6;


 