import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-6 py-24 mx-auto">
          {/* Central Headings */}
          <div className="text-center mb-14">
            <h2 className="text-4xl text-gray-500 font-bold tracking-widest">Blog</h2>
            <h1 className="md:text-6xl text-3xl font-bold title-font text-gray-900 mt-4">
              Cuisines worth travelling, now at your fingertips
            </h1>
          </div>

          {/* Blog Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="w-full sm:w-[45%] mx-auto">
              <div className="relative rounded-xl overflow-hidden h-full group">
                <img
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_02_c103cf5073.webp&w=1920&q=75"
                  alt="Find a cook"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 w-[90%] md:w-[75%] mb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-white bg-orange-500 font-bold px-3 py-1 rounded-2xl">
                      Find a cook
                    </span>
                    <span className="text-sm font-bold text-white">• 5 min min read</span>
                  </div>
                  <p className="text-white font-bold text-xl md:text-4xl leading-snug">
                    6 things to keep in mind when hiring a cook for home
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-[45%] mx-auto">
              <div className="relative rounded-xl overflow-hidden h-full group">
                <img
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_03_0008b023df.webp&w=1920&q=75"
                  alt="Empowering"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 w-[90%] md:w-[75%] mb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-white bg-orange-500 font-bold px-3 py-1 rounded-2xl">
                      Our Partners
                    </span>
                    <span className="text-sm font-bold text-white">• 3 min min read</span>
                  </div>
                  <p className="text-white font-bold text-xl md:text-4xl leading-snug">
                    Empowering the domestic working community
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* View All Blogs Button */}
          <div className="text-center mt-10">
            <button className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800">
              View All Blogs →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;



