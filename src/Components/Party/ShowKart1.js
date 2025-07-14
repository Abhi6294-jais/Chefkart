

const ShowKart1 = () => {
  return (
    <section className="text-gray-600 body-font bg-[#f1f2f5]">
      <div className="container px-4 sm:px-6 py-6 md:py-12 sm:py-24 mx-auto">
        {/* Mobile: 2-column grid; Desktop: keep flex-wrap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row border border-gray-300 rounded-xl p-6 shadow-lg bg-white">
            <div className="w-20 h-20 sm:w-[8rem] sm:h-[8rem] mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center bg-orange-100 rounded-full">
              <img src="https://storage.googleapis.com/chefkart-strapi-media/healthy_hygienic_a9878d9090.svg" alt="" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-black">Multi-Cuisine Professionals</h2>
              <p className="text-sm sm:text-xl text-gray-500 mt-2">
               Professional party chefs to ensure a diverse & exquisite dining experience
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row border border-gray-300 rounded-xl p-6 shadow-lg bg-white">
            <div className="w-20 h-20 sm:w-[8rem] sm:h-[8rem] mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center bg-orange-100 rounded-full">
              <img src="https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg" alt="" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-black">Prompt Service</h2>
              <p className="text-sm sm:text-xl text-gray-500 mt-2">
               Swift service to ensure that your party kicks off as planned
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row border border-gray-300 rounded-xl p-6 shadow-lg bg-white">
            <div className="w-20 h-20 sm:w-[8rem] sm:h-[8rem] mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center bg-orange-100 rounded-full">
              <img src="https://storage.googleapis.com/chefkart-strapi-media/easy_booking_92fea7ca01.svg" alt="" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-black">Customisable menu</h2>
              <p className="text-sm sm:text-xl text-gray-500 mt-2">
             Food from around the world to make your event the talk of the town
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row border border-gray-300 rounded-xl p-6 shadow-lg bg-white">
            <div className="w-20 h-20 sm:w-[8rem] sm:h-[8rem] mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center bg-orange-100 rounded-full">
              <img src="https://storage.googleapis.com/chefkart-strapi-media/bartenders_48bb601645.svg" alt="" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-black">Bartenders, Waiters, etc.</h2>
              <p className="text-sm sm:text-xl text-gray-500 mt-2">
              Expert bartenders & waiters to leave your guests in awe
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShowKart1;