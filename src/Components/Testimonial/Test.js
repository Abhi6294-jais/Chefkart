const Test = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#e5e5e5]">
        <h1 className="text-center text-gray-700 text-3xl sm:text-4xl md:text-5xl font-bold pt-12 px-4">
          Don’t take our word for it
        </h1>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center gap-7">
            {/* CARD */}
            {[1, 2, 3].map((_, index) => {
              const content = [
                {
                  name: "— Diwakar Kumar",
                  quote:
                    "“I like cooking my own meals, but when I am occupied with work, I book Chefit. It's a much-required service that is convenient and more affordable than ordering online.”",
                  img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fimage_15_c28030c449.png&w=1920&q=75",
                },
                {
                  name: "हफ़िज़ीयद्दीन मियां",
                  quote:
                    "बेटी के इलाज के दौरान मैंने जो भी सहायता मांगी, मुझे मिली। मेरे कठोर समय में मुझे परिवार की तरह संभाला, इसके लिए ChefKart की जितनी भी प्रशंसा की जाए कम है।",
                  img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_05_55cf1d4be3.webp&w=1920&q=75",
                },
                {
                  name: "— Tarun Gehlaut",
                  quote:
                    "I joined a home with a chefkart cook 5 months ago. It has been very easy for me to be onboarded onto the process and to be able to manage my cook, timings, etc.",
                  img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_05_686a6d403a.png&w=1920&q=75",
                },
              ][index];

              return (
                <div key={index} className="w-full md:w-[48%] lg:w-[30%] p-4">
                  <div className="h-full text-center bg-[#2d4739] text-[#ededed] hover:bg-white hover:text-black rounded-[1.45rem] border-2 hover:border-green-300 transform transition-transform duration-700 ease-in-out hover:scale-105 flex flex-col justify-between">
                    <div className="pt-6 px-4">
                      <img
                        alt="testimonial"
                        className="w-[8rem] h-[8rem] mb-6 object-cover object-center rounded-full inline-block border-0 bg-gray-100 mx-auto"
                        src={content.img}
                      />
                      <div className="flex justify-center gap-x-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            src="https://thechefkart.com/Path.svg"
                            alt="star"
                            className="w-5 h-5"
                          />
                        ))}
                      </div>
                      <p className="text-[1.1rem] leading-relaxed px-4">
                        {content.quote}
                      </p>
                    </div>
                    <div className="pb-6">
                      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                      <h2 className="text-xl font-semibold">{content.name}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;

