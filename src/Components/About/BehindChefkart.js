import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const BehindChefkart = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-12 text-5xl text-black font-semibold">
            <h1>
              The People Behind <span className="text-orange-500">ChefKart</span>
            </h1>
          </div>

          <div className="flex flex-wrap justify-center -m-4">
            {/* Card 1 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full  flex flex-col items-center text-center p-6">
                <img
                  className="w-[310px] h-auto rounded-xl object-cover object-center mb-6"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FVaibhav_01_1db5d1c3eb.webp&w=1920&q=75"
                  alt="Vaibhav Gupta"
                />
                <h1 className="text-[2rem] font-bold text-gray-900">Vaibhav Gupta</h1>
                <h2 className="text-2xl text-gray-700 mb-4">CEO, Co-Founder</h2>
                <div className="flex space-x-6 mt-2 ">
                  <Link
                    to="https://www.linkedin.com/in/vaibhav-gupta-iitkgp/"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition duration-200"
                  >
                    <FaLinkedinIn className="text-2xl text-gray-800" />
                  </Link>
                  <Link
                    to="https://x.com/Vaibhavthechef"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition duration-200"
                  >
                    <FaTwitter className="text-2xl text-gray-800" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full flex flex-col items-center text-center p-6">
                <img
                  className="w-[310px] h-auto rounded-xl object-cover object-center mb-6"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FAman_01_a6144820a0.webp&w=1920&q=75"
                  alt="Aman Gupta"
                />
                <h1 className="text-[2rem] font-bold text-gray-900">Aman Gupta</h1>
                <h2 className="text-2xl text-gray-700 mb-4">CTO, Co-Founder</h2>
                <div className="flex space-x-6 mt-2">
                  <Link
                    to="https://www.linkedin.com/in/aman-gupta1995/"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition duration-200"
                  >
                    <FaLinkedinIn className="text-2xl text-gray-800" />
                  </Link>
                  <Link
                    to="https://x.com/a_man__gupta"
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition duration-200"
                  >
                    <FaTwitter className="text-2xl text-gray-800" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BehindChefkart;



