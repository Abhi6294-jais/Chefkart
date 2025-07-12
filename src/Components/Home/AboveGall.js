import React from "react";

const AboveGall = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Image Row - stay in single row, original size */}
          <div className="flex flex-nowrap justify-evenly items-center gap-6 overflow-x-auto">
            {/* Image 1 */}
            <div className="rounded-lg h-64 w-1/2 md:w-auto flex-shrink-0 sm:w-[45%] lg:w-[30%]">
              <img
                alt="Skill India"
                className="object-contain h-full w-full"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSkill_India_Preview_removebg_preview_1_03db4e9828.png&w=384&q=75"
              />
            </div>

            {/* Image 2 */}
            <div className="rounded-lg h-64 w-1/2 md:w-auto flex-shrink-0 sm:w-[45%] lg:w-[30%]">
              <img
                alt="Partner Logo"
                className="object-contain h-full w-full"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_07_10_at_4_52_1_658c10251b.png&w=384&q=75"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="items-center mt-12 px-4">
            <h1 className="text-center text-3xl md:text-5xl font-bold text-black">
              Proud Partner with Skill India
            </h1>
            <p className="text-center text-xl md:text-3xl mt-9 font-medium text-gray-500">
              All our professionals are certified by Govt. of India under Skill India Mission
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboveGall;





