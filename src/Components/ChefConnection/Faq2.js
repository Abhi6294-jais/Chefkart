
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
    {
      question: "ChefKart से कैसे जुड़ें?",
      answer:
        "ChefKart से जुड़ने के लिए ऊपर दिए गए ‘ChefKart से जुड़ें’ का बटन दबा कर फॉर्म भरें या हमें 9871231115 पर कॉल करें।.",
    },
    {
      question: "ChefKart से कौन जुड़ सकते हैं?",
      answer:
        "ChefKart से हर वह कुक जुड़ सकते हैं जो खाना पकाने की प्रतिभा रखते हैं और 18 साल से ज़्यादा उम्र के हैं। .",
    },
    {
        question: "ChefKart से जुड़ने के लिए किन चीजों की आवश्यकता है?",
        answer:
          "ChefKart से जुड़ने के लिए आपके पास आधार कार्ड, स्मार्ट फ़ोन, बैंक अकाउंट और पासपोर्ट फ़ोटो होना ज़रूरी है।..",
      },
    
  ];

const Faq2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-orange-500 mb-12">
          आपके प्रश्न
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full px-4 py-4 sm:px-6 text-left text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-black " />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </button>
              <div
                className={`px-4 sm:px-6 pb-4 text-gray-600 text-base sm:text-xl lg:text-2xl transition-all duration-300 ${
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

export default Faq2;