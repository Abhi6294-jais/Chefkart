import { useEffect, useState } from "react";

const cuisines = [
  { name: "Chinese", color: "text-pink-500" },
  { name: "Italian", color: "text-green-900" },
  { name: "Mexican", color: "text-blue-600" },
  { name: "Indian", color: "text-orange-500" },
  
];

const Cuisine = () => {
  const [index, setIndex] = useState(0);
  const [fromTop, setFromTop] = useState(true); 

  useEffect(() => {
    const interval = setInterval(() => {
      setFromTop(false); 
      setIndex((prev) => (prev + 1) % cuisines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { name, color } = cuisines[index];

  return (
    <div className="py-10 text-center overflow-hidden">
      <h2 className="text-2xl sm:text-6xl font-bold text-black">
        Craving{" "}
        <span
          key={name}
          className={`inline-block transition-all duration-500 transform ${
            fromTop ? "-translate-y-10" : "translate-y-10"
          } opacity-0 animate-slideIn ${color}`}
        >
          {name}
        </span>{" "}
        food? Our Multi-Cuisine
        <br />
        Experts Have Got You!
      </h2>

      {/* Custom animation styles */}
      <style>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(${fromTop ? "-40px" : "40px"});
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Cuisine;