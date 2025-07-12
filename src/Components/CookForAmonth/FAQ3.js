import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is Chefit?",
    answer:
      "Chefit is a one-time cooking service where our trusted and verified cooks prepare healthy meals in the comfort of your kitchen.",
  },
  {
    question: "What is the price for Chefit?",
    answer:
      "The base price for the Chefit service is ₹499. For each additional person, there is an extra charge of ₹100 per person.",
  },
  {
    question: "How can I find out if this service is available in my area?",
    answer:
      "To check service availability, enter your address and select your area. The home page on the mobile app will then display a list of services offered at your location.",
  },
  {
    question: "Will Chefit provide groceries along with the service?",
    answer: "No, groceries are not provided. You need to manage the groceries yourself.",
  },
  {
    question: "What can I expect my cook to do post cooking?",
    answer:
      "No, we do not provide post-service utensil cleaning. The cook will tidy the cooking area, transfer food to serving bowls, and place used utensils in the sink with water. The kitchen and countertops will be left clean.",
  },
  {
    question: "How many dishes can the cook prepare?",
    answer:
      "The cook can prepare up to 4 dishes as part of the service, which includes a variety of daily home-cooked meals like Dal, Chawal, Roti, and Sabzi (Roti and Chawal are included within the dishes).",
  },
  {
    question: "How long will a cook stay at my booking?",
    answer:
      "The cook will spend for 1.5 hours for up to 4 people. For each additional 1-2 people, an extra 30 minutes is added. For example, a booking for 5-6 people, the cook will be there for 2 hours.",
  },
  {
    question: "Is Chefit suitable for parties or get-togethers?",
    answer:
      "Chefit specializes in providing daily home-cooked meals, preparing up to four different dishes. For events like house parties or get-togethers, we recommend our Chef for Party service.",
  },
  {
    question: "Can I hire the same professional for the 'cook for a month' service?",
    answer:
      "No, Chefit provides a one-time cooking service. For a monthly arrangement, we recommend booking through our 'Cook for a Month' service by scheduling a trial.",
  },
  {
    question: "What are the cancellation and refund policies?",
    answer:
      "We provide a 100% refund if you cancel before a cook has been assigned. If you cancel after a cook has been assigned, a 20% cancellation fee will be charged.",
  },
  {
    question: "When will the cook be assigned for a Chefit booking?",
    answer: "A cook will be assigned at least 60 minutes before your scheduled booking time.",
  },
  {
    question: "How can I get support related to my booking?",
    answer:
      "For support, contact us through the ‘Help & Support section’ on the ChefKart App. Our support team is available from 06:00 AM to 09:30 PM.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-orange-500 mb-12">
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
                className="flex items-center justify-between w-full px-4 py-4 sm:px-6 text-left text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-black" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-black" />
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

export default FaqSection;

