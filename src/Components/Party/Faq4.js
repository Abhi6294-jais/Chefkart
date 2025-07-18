import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is Chef for Party?",
    answer: "Chef for Party provides a skilled, multi-cuisine, experienced chef for your house party or gathering.",
  },
  {
    question: "For how many people can I book Chef for Party?",
    answer: "You can book Chef for Party for up to 100 guests, including children.",
  },
  {
    question: "What if I’m hosting a large gathering or catering event?",
    answer: "For large gatherings or catering events, please reach out to us at hello@thechefkart.com. Our team will assist you in planning and providing the appropriate service for your needs.",
  },
  {
    question: "Where is this service available?",
    answer: "Currently Chef for Party is available across Delhi NCR, Bangalore, Mumbai, Hyderabad, Kolkata and Pune. We are actively working to open new cities.",
  },
  {
    question: "How can I find out if this service is available in my area?",
    answer: "To check service availability, enter your address and select your area. The home page will then display a list of services offered in your location.",
  },
  {
    question: "What kind of food can the chef prepare for a party?",
    answer: "ChefKart offer a well-thought-out menu, which is flexible for customization to meet your specific needs. A dedicated event coordinator will assist you in curating the menu for your event.",
  },
  {
    question: "What are the charges for the service?",
    answer: "The cost depends on the number of guests, dishes, and add-ons, with the service price starting from ₹2000.",
  },
  {
    question: "Is there a booking amount for this service?",
    answer: "Yes, a token amount of ₹200 is required, which is fully refundable or adjustable in the final payment.",
  },
  {
    question: "When do I need to pay the final amount?",
    answer: "The final amount should be paid after selecting your preferred dishes and cuisines to complete your booking and get a chef assigned to your party.",
  },
  {
    question: "Will ChefKart provide the ingredients and utensils for the dishes?",
    answer: "You need to arrange cooking, serving, and eating utensils. We will provide a list of required items in advance. Groceries and ingredients are not provided.",
  },
  {
    question: "How many chefs will come?",
    answer: "One chef will be provided. If required, additional chefs and/or helper will be sent to ensure timely food preparation.",
  },
  {
    question: "Who takes care of cleaning after the party?",
    answer: "Cleaning is not included in our service. However, we ensure your kitchen slab and cooking area is left clean and tidy after food preparation.",
  },
  {
    question: "Can you also provide a bartender and servers?",
    answer: "Yes, professional and trained bartenders and servers are available at an additional cost.",
  },
  {
    question: "Can I update the menu or guest count if plans change?",
    answer: "Yes, you can update the menu and guest count up to one day before your event.",
  },
  {
    question: "CWhen will the chef arrive?",
    answer: ".The chef will arrive at least three hours before the serving time and will stay for 90 minutes after the serving time begins.",
  },

  {
    question: "How can I get support related to my booking?",
    answer: "You can reach out to us through the Help & Support section on the ChefKart App. Our support team is available from 6:00 AM to 9:30 PM.",
  },


];
const Faq4 = () => {
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

export default Faq4;