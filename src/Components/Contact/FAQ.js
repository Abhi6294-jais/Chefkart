import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What does ChefKart do?",
    answer: "ChefKart is a platform that seamlessly connects households with the ideal cook based on their specific needs and requirements.",
  },
  {
    question: "What are your services?",
    answer: "ChefKart provides three types of cooking services; Monthly Subscription (cook for a month), Chefit (one-time cooking services) and Chef for Party.",
  },
  {
    question: "How to reach ChefKart Support?",
    answer: "Cooks list themselves on the ChefKart Partner App. We register cooks after background verification and criminal record checks. They undergo assessments and mandatory training to ensure they meet our standards and are suitable for household assignments. Ongoing training ensures continuous upskilling.",
  },
  {
    question: "What are the charges?",
    answer: "You can reach out to our Customer Support through the Help & Support section on our App.",
  },
  {
    question: "Do you have an app?",
    answer: "ChefKart is available on both App Store and Play Store. You can easily download it on any smartphone.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-orange-500 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full px-6 py-4 text-left text-3xl font-bold text-gray-800 focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-black " />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </button>
              <div
                className={`px-6 pb-4 text-gray-600 text-2xl  transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;


