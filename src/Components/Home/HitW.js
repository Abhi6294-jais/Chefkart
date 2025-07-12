export default function HitW() {
  return (
    <div className="bg-white py-16 lg:px-20">
      <div className=" text-center mb-10">
        <span className="text-6xl font-bold">How it </span>{" "}
        <span className="text-6xl text-semibold text-gray-800"> works</span>
      </div>
      <div className="max-w-10xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {/* Step 1 */}
          <div>
            <div className="flex justify-center mb-4">
              <img
                src="https://storage.googleapis.com/chefkart-strapi-media/Register_on_app_4372ed1276.svg"
                alt="Register on app"
                className="w-[20rem] h-[20rem] object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 text-gray-800 text-2xl rounded-full w-12 h-12 flex items-center justify-center font-bold mb-2">
                1
              </div>
              <h3 className="text-2xl font-bold mb-1">Register on app</h3>
              <p className="text-gray-600 text-2xl mt-4">
                Download the ChefKart App and register yourself
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <div className="flex justify-center mb-4">
              <img
                src="https://storage.googleapis.com/chefkart-strapi-media/select_your_service_7ba59dddd5.svg"
                alt="Select Chefit"
                className="w-[20rem] h-[20rem] object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 text-gray-800 text-2xl rounded-full w-12 h-12 flex items-center justify-center font-semibold mb-2">
                2
              </div>
              <h3 className="text-2xl font-bold mb-1">
                Select Chefit - Cook for One Meal
              </h3>
              <p className="text-gray-600 text-2xl mt-4">
                Choose Chefit from ‘Our Services’ section on homepage
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="flex justify-center mb-4">
              <img
                src="https://storage.googleapis.com/chefkart-strapi-media/make_payment_50309d2915.svg"
                alt="Fill requirements"
                className="w-[20rem] h-[20rem] object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 text-gray-800 text-2xl rounded-full w-12 h-12 flex items-center justify-center font-semibold mb-2">
                3
              </div>
              <h3 className="text-2xl font-bold mb-1">
                Fill requirements & pay
              </h3>
              <p className="text-gray-600 text-2xl mt-4">
                Share your preferences and complete the payment
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div>
            <div className="flex justify-center mb-4">
              <img
                src="https://storage.googleapis.com/chefkart-strapi-media/Get_a_cook_b0e201f46a.svg"
                alt="Get a cook"
                className="w-[20rem] h-[20rem] object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 text-gray-800 text-2xl rounded-full w-12 h-12 flex items-center justify-center font-semibold mb-2">
                4
              </div>
              <h3 className="text-2xl font-bold mb-1">Get a cook</h3>
              <p className="text-gray-600 text-2xl mt-4">
                Get a trained & trusted cook at your doorstep within 60 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <button className="bg-white border-2 border-orange-400  text-orange-400 font-bold px-4 py-3 rounded-2xl shadow-lg text-2xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
