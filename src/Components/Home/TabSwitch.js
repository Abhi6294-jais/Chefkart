import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = {
  single: {
    title: "No more missing Ghar Ka Khana!",
    desc: "Let our cooks bring memories of home to your plate.",
    img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSingles_5497580168.webp&w=1920&q=75",
  },
  family: {
    title: "Food catered to every family member!",
    desc: "Spend time with your loved ones as our best cooks take care of the cooking.",
    img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FFamily_f0c0d80b42.webp&w=1920&q=75",
  },
};

const TabSwitch = () => {
  const [active, setActive] = useState("family");

  return (
   <section className="py-10 px-4">
  {/* Header */}
  <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 mt-4 px-2">
    Healthy food cooked in your kitchen,
    <br className="hidden sm:block" />
    whenever you want!
  </h1>

  {/* Tabs */}
  <div className="max-w-7xl mx-auto flex justify-center gap-6 border-b mb-10">
    {["single", "family"].map((key) => (
      <button
        key={key}
        onClick={() => setActive(key)}
        className={`pb-2 text-xl sm:text-2xl font-medium transition-all ${
          active === key
            ? "text-orange-500 border-b-2 border-orange-500"
            : "text-gray-400"
        }`}
      >
        {key === "single" ? "For Singles" : "For Families"}
      </button>
    ))}
  </div>

  {/* Content */}
  <AnimatePresence mode="wait">
    <motion.div
      key={active}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center"
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 px-2 sm:px-8 lg:px-12">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] rounded-[30px] lg:rounded-[60px] overflow-hidden">
          <img
            src={data[active].img}
            alt={data[active].title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 px-2 sm:px-6">
        <div className="text-center lg:text-left flex flex-col justify-center h-full">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            {data[active].title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            {data[active].desc}
          </p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
</section>


  );
};

export default TabSwitch;

