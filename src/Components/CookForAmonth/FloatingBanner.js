import React, { useEffect, useState } from "react";

const FloatingBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gray-100 shadow-lg transition-transform transform z-50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto flex flex-row flex-wrap items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
          Get a cook and comfort with just a click. Enjoy Trial without a why!
        </p>
        <button className="bg-orange-500 text-white text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold whitespace-nowrap">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FloatingBanner;

