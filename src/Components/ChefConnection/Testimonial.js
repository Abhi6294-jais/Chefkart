import React from 'react';

const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-4 py-16 mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Card 1 */}
          <div className="w-full md:w-1/3">
            <div className="h-[30rem] text-center bg-[#2d4739] text-[#ededed] hover:bg-white hover:text-black rounded-[1.45rem] border-2 hover:border-green-300 transition-transform duration-700 ease-in-out hover:scale-105 p-5">
              <img
                alt="testimonial"
                className="w-28 h-28 mt-1 mb-6 object-cover object-center rounded-full bg-gray-100 inline-block"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_06_b42754596c.webp&w=1920&q=75"
              />
              <div className="flex justify-center gap-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="https://thechefkart.com/Path.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <p className="text-base leading-relaxed font-medium">
                "बेटे के इलाज के लिए पैसों की बहुत ज़रूरत थी | इस कठिन समय में मुझे ChefKart ने ना सिर्फ़ आर्थिक सहायता दी बल्कि छुट्टियाँ लेने में भी बहुत सहयोग दिखाया |"
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="font-medium text-xl">शिवानंद मिश्रा</h2>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/3">
            <div className="h-[30rem] text-center bg-[#2d4739] text-[#ededed] hover:bg-white hover:text-black rounded-[1.45rem] border-2 hover:border-green-300 transition-transform duration-700 ease-in-out hover:scale-105 p-5">
              <img
                alt="testimonial"
                className="w-28 h-28 mt-1 mb-6 object-cover object-center rounded-full bg-gray-100 inline-block"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_05_55cf1d4be3.webp&w=1920&q=75"
              />
              <div className="flex justify-center gap-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="https://thechefkart.com/Path.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <p className="text-base leading-relaxed font-medium">
                "बेटी के इलाज के दौरान मैंने जो भी सहायता मांगी, मुझे मिली। मेरे कठोर समय में मुझे परिवार की तरह संभाला, इसके लिए ChefKart की जितनी भी प्रशंसा की जाए कम है।"
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="font-medium text-xl">हफ़िज़ीयद्दीन मियां</h2>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/3">
            <div className="h-[30rem] text-center bg-[#2d4739] text-[#ededed] hover:bg-white hover:text-black rounded-[1.45rem] border-2 hover:border-green-300 transition-transform duration-700 ease-in-out hover:scale-105 p-5">
              <img
                alt="testimonial"
                className="w-28 h-28 mt-1 mb-6 object-cover object-center rounded-full bg-gray-100 inline-block"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_04_d6bb1266ae.webp&w=1920&q=75"
              />
              <div className="flex justify-center gap-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="https://thechefkart.com/Path.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <p className="text-base leading-relaxed font-medium">
                "मैं हमेशा से चाहती थी कि मेरी बेटी को अपनी शिक्षा के बल पर एक अच्छी नौकरी मिले। जब मैंने ChefKart में ये चिंता जताई तो मेरी बेटी के हुनर से प्रभावित होकर उसे अपनी कंपनी में नौकरी दी।"
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="font-medium text-xl">पूनम चंदेलिया</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;






