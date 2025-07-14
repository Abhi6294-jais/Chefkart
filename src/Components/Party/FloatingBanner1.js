import React, { useEffect, useState } from "react";

const FloatingBanner1 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gray-100 shadow-lg transition-transform transform z-50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-4 sm:px-6 py-4 sm:py-3">
        <p className="text-gray-700 text-base sm:text-lg md:text-2xl text-center sm:text-left font-medium">
          Hosting a party? Book your Chefit now and delight your guests with an in-home cooked meal!
        </p>
        <button className="bg-orange-500 text-white text-sm sm:text-lg md:text-2xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold whitespace-nowrap">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FloatingBanner1;


