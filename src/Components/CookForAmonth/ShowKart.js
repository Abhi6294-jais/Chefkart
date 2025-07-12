

const ShowKart = () => {
  return (
    <section className="text-gray-600 body-font bg-[#f1f2f5]">
      <div className="container px-4 sm:px-6 py-5 sm:py-24 mx-auto">
        {/* Mobile: 2-column grid; Desktop: keep flex-wrap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row border border-gray-300 rounded-xl p-6 shadow-lg bg-white">
            <div className="w-20 h-20 sm:w-[8rem] sm:h-[8rem] mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center bg-indigo-100 rounded-full">
              <img src="https://storage.googleapis.com/chefkart-strapi-media/healthy_hygienic_a9878d9090.svg" alt="" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-black">Healthy & Hygienic Food</h2>
              <p className="text-sm sm:text-xl text-gray-500 mt-2">
                Healthy food cooked in your kitchen with utmost hygiene.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row border border-gray-300 rounded-xl p-6 shadow-lg bg-white">
            <div className="w-20 h-20 sm:w-[8rem] sm:h-[8rem] mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center bg-indigo-100 rounded-full">
              <img src="https://storage.googleapis.com/chefkart-strapi-media/tailored_to_taste_33cb681b66.svg" alt="" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-black">Tailored to Your Taste</h2>
              <p className="text-sm sm:text-xl text-gray-500 mt-2">
                Food prepared according to your taste and preferences.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row border border-gray-300 rounded-xl p-6 shadow-lg bg-white">
            <div className="w-20 h-20 sm:w-[8rem] sm:h-[8rem] mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center bg-indigo-100 rounded-full">
              <img src="https://storage.googleapis.com/chefkart-strapi-media/professional_cooks_ec13508556.svg" alt="" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-black">Trained & Verified Cooks</h2>
              <p className="text-sm sm:text-xl text-gray-500 mt-2">
                Professionally trained & background verified cooks for quality service.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row border border-gray-300 rounded-xl p-6 shadow-lg bg-white">
            <div className="w-20 h-20 sm:w-[8rem] sm:h-[8rem] mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center bg-indigo-100 rounded-full">
              <img src="https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg" alt="" />
            </div>
            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-black">Quick Service</h2>
              <p className="text-sm sm:text-xl text-gray-500 mt-2">
                Assured cook arrival within 60 minutes of booking.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShowKart;


