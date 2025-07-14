import React from 'react';

const Gallery = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-6xl font-bold text-center text-black mb-20">Gallery</h2>

      <div className="overflow-x-auto overflow-y-hidden px-4  sm:px-6 lg:px-12 ml-4 md:ml-10">
        <div className="flex gap-12 snap-x snap-mandatory w-max">
          
          {/* Video 1 */}
          <div className="snap-start rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <video
              src="https://storage.googleapis.com/chefkart-strapi-media/v3_8de4acd8d1.mp4"
              controls
              className="w-[300px] h-[300px] object-cover rounded-lg"
            />
          </div>

          {/* Video 2 */}
          <div className="snap-start rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <video
              src="https://storage.googleapis.com/chefkart-strapi-media/v1_1_ce597e37d8.mp4"
              controls
              className="w-[300px] h-[300px] object-cover rounded-lg"
            />
          </div>

          {/* Video 3 */}
          <div className="snap-start rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <video
              src="https://storage.googleapis.com/chefkart-strapi-media/v6_b86f7e540a.mp4"
              controls
              className="w-[300px] h-[300px] object-cover rounded-lg"
            />
          </div>

          {/* Video 4 */}
          <div className="snap-start rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <video
              src="https://storage.googleapis.com/chefkart-strapi-media/v5_068121efcb.mp4"
              controls
              className="w-[300px] h-[300px] object-cover rounded-lg"
            />
          </div>

          {/* Video 5 */}
          <div className="snap-start rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <video
              src="https://storage.googleapis.com/chefkart-strapi-media/v4_015b8116b1.mp4"
              controls
              className="w-[300px] h-[300px] object-cover rounded-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gallery;



