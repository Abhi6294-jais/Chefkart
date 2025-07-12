import React from 'react';

const Blog1 = () => {
 



  return (
    <section className="px-4 md:px-16 py-10 bg-white">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Blogs</h2>
         <div className="max-w-[550px] rounded-xl overflow-hidden shadow-lg bg-white">
        <img className="w-full h-[250px] md:h-[300px] object-cover" src='https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_01_d49831e21c.webp&w=1920&q=75' alt='chef'/>
        <div className="p-5">
          <p className="text-1xl md:text-[1.3rem] text-gray-700 mb-1">Subi Kumari</p>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">How to find the best cook for home</h3>
          <div className="flex justify-between text-1xl md:text-[1.3rem] text-gray-400">
            <span>February 10, 2023</span>
            <span>3</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog1;


