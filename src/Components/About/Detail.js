const Detail = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-0">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fi_Stock_495494292_1_6e708dc61d_37ec0073ce.webp&w=1920&q=75"
              alt="Location"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-4xl mb-1 font-semibold mb-10">
              Operating in Gurgaon!
            </h2>

             {/* Name Input */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-2xl text-gray-600">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
                focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8
                transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Email Input */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-2xl text-gray-600">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
                focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8
                transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* City Input */}
            <div className="relative mb-4">
              <label htmlFor="city" className="leading-7 text-2xl text-gray-600">City</label>
              <input 
                type="text" 
                id="city" 
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
                focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8
                transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Phone Input */}
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-2xl text-gray-600">Phone</label>
              <input 
                type="phone" 
                id="phone" 
                name="phone" 
                placeholder="91+" 
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
                focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8
                transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-2xl text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mt-2"
              ></textarea>
            </div>
            <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none  rounded text-2xl mt-4">
              Submit
            </button>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
