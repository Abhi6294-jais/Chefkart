import React from "react";

const features = [
  {
    id: 1,
    title: "Professional Cooks",
    icon: "https://storage.googleapis.com/chefkart-strapi-media/professional_cooks_ec13508556.svg",
  },
  {
    id: 2,
    title: "Easy Booking",
    icon: "https://storage.googleapis.com/chefkart-strapi-media/easy_booking_92fea7ca01.svg",
  },
  {
    id: 3,
    title: "Timely Service",
    icon: "https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg",
  },
  {
    id: 4,
    title: "Prompt Support",
    icon: "https://storage.googleapis.com/chefkart-strapi-media/prompt_support_ca831687ac.svg",
  },
];

const Belowprice = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-20 bg-[url('https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FRectangle_60_bfb1e0017f_a37ee78af1.webp&w=1920&q=75')]">
      {/* Brown translucent overlay */}
      <div className="absolute inset-0 bg-[#2d1b0d]/85"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">
          Why Choose <span className="text-orange-500">ChefKart?</span>
        </h2>

        {/* Features Grid */}
       <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">


          {features.map((feature) => (
            <div
              key={feature.id}
             className="bg-transparent backdrop-blur-sm border border-white/20 rounded-2xl text-center p-4 sm:p-6 flex flex-col items-center hover:shadow-lg transition w-full"


            >
              <img src={feature.icon} alt={feature.title} className="w-40 h-40 mb-2 md:mb-10" />
              <hr className="w-full border-t border-white/30 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 md:text-3xl md:mb-5">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Belowprice;

