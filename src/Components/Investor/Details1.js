import React from 'react';

const Details1 = () => {
  return (
    <div className="min-h-screen relative">
      <section 
        className="text-gray-600 body-font relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url('https://thechefkart.com/_next/image?url=%2FRectangle%20185.png&w=1920&q=75')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col lg:flex-row items-center relative z-10">
          
          {/* Left Section - Title */}
          <div className="flex-1 lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-medium leading-tight">
              Simplifying the<br />
              way <span className="text-orange-500 relative">
                India
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"></div>
              </span> eats.
            </h1>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-[700px] bg-white rounded-2xl shadow-2xl p-6 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-gray-900 text-2xl md:text-4xl font-semibold mb-2">
                Believe in our mission? We'd love to know you!
              </h2>
            </div>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-50 border border-gray-400 rounded-lg p-2 md:py-3 md:px-4  md:text-[1.3rem] outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                />
              </div>

              {/* Phone Field */}
              <div className="flex">
                <div className="flex items-center bg-gray-50 border border-gray-400 rounded-l-lg px-1 md:px-3 border-r-0">
                  
                  <span className="text-gray-500 text-[.9rem] md:text-[1.3rem]">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="mobile"
                  className="flex-1 bg-gray-50 border border-gray-400 rounded-r-lg p-2 md:py-3 md:px-4  md:text-[1.3rem] outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all border-l-0"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-50 border border-gray-400 rounded-lg p-2 md:py-3 md:px-4  md:text-[1.3rem] outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                />
              </div>

              {/* City Field */}
              <div className="relative">
                <select className="w-full bg-gray-50 border border-gray-400 rounded-lg p-2 md:py-3 md:px-4  md:text-[1.3rem] outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all appearance-none cursor-pointer">
                  <option value="">City</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="chennai">Chennai</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="pune">Pune</option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="lucknow">Lucknow</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Message..."
                  rows="4"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 md:py-3 md:px-4  md:px-4 md:text-[1.3rem] outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Details1;
