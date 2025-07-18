import { Link } from "react-router-dom"
import { FaHamburger, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div>
      <header className="bg-gray-500 body-font shadow-md">
        {/* Fixed vertical padding */}
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* logo */}
          <Link to="/" className="flex title-font font-medium items-center text-white">
            <img 
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FLogo_White_9fd26be901.webp&w=1920&q=75" 
              className="w-32 md:w-48 h-auto" 
              alt="logo" 
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-base justify-center">
            <div className="relative">
              <button
                className="mr-5 text-xl md:text-2xl text-white hover:text-orange-500 hover:underline focus:outline-none flex items-center"
                onClick={toggleDropdown}
              >
                Our Services
                <span className="ml-1">
                  {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-60 bg-white shadow-lg rounded-md z-10">
                  <Link
                    to="/cook-for-month"
                    className="block px-4 text-lg mt-2 py-2 font-bold text-gray-800 hover:text-orange-500 flex justify-between items-center"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Cook for a month
                    <FaChevronRight className="ml-2" />
                  </Link>

                  <Link
                    to="/chef-for-party"
                    className="block px-4 text-lg mt-2 mb-3 py-2 font-bold text-gray-800 hover:text-orange-500 flex justify-between items-center"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Chef For Party
                    <FaChevronRight className="ml-2" />
                  </Link>
                </div>
              )}
            </div>

            <Link to="join-chefkart" className="mr-5 text-xl md:text-2xl text-white hover:text-orange-500 hover:underline">
              ChefKart से जुड़ें
            </Link>
            <Link to="/chef-search" className="mr-5 text-xl md:text-2xl text-white hover:text-orange-500 hover:underline">
              Cooks Near Me
            </Link>
            
          </nav>
          
          {/* Hamburger Menu Button - VISIBLE ON ALL SCREENS */}
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FaHamburger className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>

        {/* Mobile Menu - FUNCTIONAL ON ALL SCREENS */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMenu}
            ></div>
            
            {/* Menu Panel */}
            <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm text-white bg-gray-800 shadow-lg z-50 transition-transform duration-300">
              <div className="flex flex-col p-5 space-y-4">
                {/* Close Button */}
                <button
                  className="self-end focus:outline-none mb-4"
                  onClick={toggleMenu}
                  aria-label="Close Menu"
                >
                  <GiTireIronCross className="w-8 h-8 text-white" />
                </button>

                {/* Services Dropdown */}
                <div className="space-y-2">
                  <button
                    className="w-full text-left text-lg font-bold hover:text-orange-500 flex items-center justify-between"
                    onClick={toggleDropdown}
                  >
                    Our Services
                    {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {isDropdownOpen && (
                    <div className="pl-4 space-y-2">
                      <Link
                        to="/cook-for-month"
                        className="block text-base text-gray-300 hover:text-orange-500"
                        onClick={toggleMenu}
                      >
                        Cook for a month
                      </Link>
                      <Link
                        to="/chef-for-party"
                        className="block text-base text-gray-300 hover:text-orange-500"
                        onClick={toggleMenu}
                      >
                        Chef For Party
                      </Link>
                    </div>
                  )}
                </div>
                <hr className="border-gray-600" />

                {/* Other Menu Links */}
                <Link
                  to="join-chefkart"
                  className="text-lg font-bold hover:text-orange-500"
                  onClick={toggleMenu}
                >
                  ChefKart से जुड़ें
                </Link>
                <hr className="border-gray-600" />

                <Link
                  to="/chef-search"
                  className="text-lg font-bold hover:text-orange-500"
                  onClick={toggleMenu}
                >
                  Cooks Near Me
                </Link>
                <hr className="border-gray-600" />

                <Link
                  to="/about"
                  className="text-lg font-bold hover:text-orange-500"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <hr className="border-gray-600" />

                <Link
                  to="/blog"
                  className="text-lg font-bold hover:text-orange-500"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
                <hr className="border-gray-600" />

                <Link
                  to="/career"
                  className="text-lg font-bold hover:text-orange-500"
                  onClick={toggleMenu}
                >
                  Career
                </Link>
                <hr className="border-gray-600" />

                <Link
                  to="/investor-relation"
                  className="text-lg font-bold hover:text-orange-500"
                  onClick={toggleMenu}
                >
                  Investor Relations
                </Link>
                <hr className="border-gray-600" />
                <Link to="/register-chef"className="text-lg font-bold hover:text-orange-500"
                  onClick={toggleMenu}>
         
            Registration as the chef
       
          </Link>
 <hr className="border-gray-600" />
                <Link
                  to="/testimonial"
                  className="text-lg font-bold hover:text-orange-500"
                  onClick={toggleMenu}
                >
                  Testimonials
                </Link>
                <hr className="border-gray-600" />

                {/* Contact Button */}
                <Link to="/contact">
                <button
                  className="mt-4 inline-flex justify-center items-center bg-orange-500 hover:bg-orange-600 border-0 px-4 py-3 rounded text-white text-lg font-semibold transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Contact Us
                  <FaChevronRight className="ml-2" />
                </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </header>
    </div>
  )
}

export default Navbar;
