
 const Factors2= () => {
  return (
    <section className="text-gray-600 body-font bg-white ">
      <div className="container px-5 py-40 mx-auto flex flex-col md:flex-row items-center justify-center gap-15">
        {/* Left Text */}
        <div className="w-full md:w-2/5 text-center md:text-left">
          <h1 className="text-xl md:text-[3.4rem] font-bold text-black leading-tight">
            Our affordable prices <br />
            are based on <span className="text-orange-500">4 Factors</span>
          </h1>
          <p className="text-4xl text-gray-800 mt-7">
            Minimum prices guaranteed*
          </p>
        </div>

        {/* Right Boxes */}
        <div className="w-full md:w-3/5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-items-center ml-6">
          {/* Factor 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBatch_Assign_54bbf77213.png&w=1920&q=75"
              alt="No. of People"
              className="w-18 h-18 md:w-20 md:h-20 object-contain mb-3"
            />
            <h2 className="text-lg md:text-[1.3rem] font-bold text-gray-900">
              No. of People
            </h2>
          </div>

          {/* Factor 2 */}
          <div className="flex flex-col items-center text-center ml-6">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNoodles_77d70fadf1.png&w=1080&q=75"
              alt="No. of Dishes"
              className="w-18 h-18 md:w-20 md:h-20 object-contain mb-3"
            />
            <h2 className="text-lg md:text-[1.3rem] font-bold text-gray-900">
              No. of Dishes
            </h2>
          </div>

          {/* Factor 3 */}
          <div className="flex flex-col items-center text-center ml-6">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FVegan_Food_b23033b652.png&w=1080&q=75"
              alt="Cuisine Preference"
              className="w-18 h-18 md:w-20 md:h-20 object-contain mb-3"
            />
            <h2 className="text-lg md:text-[1.3rem] font-bold text-gray-900">
              Cuisine Preference
            </h2>
          </div>

          {/* Factor 4 */}
          <div className="flex flex-col items-center text-center ml-6 ">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FPlace_Marker_e599ac1ded.png&w=1080&q=75"
              alt="Location"
              className="w-18 h-18 md:w-20 md:h-20 object-contain mb-3"
            />
            <h2 className="text-lg md:text-[1.3rem] font-bold text-gray-900">
              Location
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factors2;
