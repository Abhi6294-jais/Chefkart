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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-25 bg-gray-100 shadow-lg transition-transform transform ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center pb-2 px-6">
        <p className="text-gray-700 font-sm text-2xl mt-10 mr-5 mb-3">
  Hosting a party? Book your Chefit now and delight your guests with an in-home cooked meal!!
        </p>
        <button className="bg-orange-500 mt-7 text-2xl text-white px-6 py-3 rounded-lg font-bold mb-2">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FloatingBanner1;

