import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Car = () => {
  return (
    <motion.div
      className="relative bg-[#fff9f2] w-full h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="text-center flex flex-col items-center p-6 md:p-10">
        <h1 className="text-4xl md:text-7xl text-black font-bold mt-3">
          No open positions
        </h1>
        <p className="text-3xl text-black mt-5 md:text-4xl">
          We'll be accepting applications soon...
        </p>
      </div>
    </motion.div>
  );
};

export default Car;

