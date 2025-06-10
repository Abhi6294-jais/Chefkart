import { Link } from "react-router-dom"
import { FaHamburger, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";



const Navbar = () => {

  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [isDropdownOpen,setIsDropdownOpen]=useState(false);

  const toggleMenu=()=> setIsMenuOpen((prev)=> !prev);
  const toggleDropdown=()=>setIsDropdownOpen((prev)=> !prev);



  return (
    <div>
       <header className=" bg-gray-500 body-font shadow-md">
  <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
    {/* logo */}
    <Link to="#" className="flex title-font font-medium items-center  text-white">
     <img src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FLogo_White_9fd26be901.webp&w=1920&q=75" className="w-48 h-auto" alt="logo" />
    </Link>

    {/* Desktop Menu */}
    <nav className="hidden md:flex md:ml-auto md:mr-auto items-center text-base justify-center">
      <div className="relative">
        <button 
        className="mr-5 text-2xl text-white hover:text-orange-500 hover:underline focus:outline-none flex items-center"
        onClick={toggleDropdown}>
           Our Services
           <span>
            {isDropdownOpen ? <FaChevronUp/> :<FaChevronDown/>}
           </span>

        </button>
        {isDropdownOpen && (
          <div className="absolute mt-2 w-60 h-44 hover:text-orange-500 bg-white shadow-lg rounded-md z-10">
              <Link
              to="/cook-for-month"
              className="block px-4 text-md mt-2 py-2 text-gray-800 text-1xl h-11 hover:text-orange-500 flex justify-between items-center"
              onClick={()=>setIsDropdownOpen(false)}
              >
              Cook for a month
              <FaChevronRight className="ml-2"/>
              </Link>
              <hr />
               <Link
              to="/one-time-cook"
              className="block px-4 text-md mt-2 py-2 text-gray-800 text-1xl h-11 hover:text-orange-500 flex justify-between items-center"
              onClick={()=>setIsDropdownOpen(false)}
              >
              Chef: One time cook
              <FaChevronRight className="ml-2"/>
              </Link>
              <hr />
               <Link
              to="/chef-for-party"
              className="block px-4 text-md mt-2 py-2 text-gray-800 text-1xl h-11 hover:text-orange-500 flex justify-between items-center"
              onClick={()=>setIsDropdownOpen(false)}
              >
              Chef For Party
              <FaChevronRight className="ml-2"/>
              </Link>

          </div>
        )}
</div>
    
      <Link to="#" className="mr-5 text-2xl text-white hover:underline">ChefKart से जुड़ें</Link>
      <Link to="#" className="mr-5 text-2xl text-white hover:underline">Cooks Near Me</Link>

    </nav>
    {/* Hambueger Menu Button (Only visible on mobile) */}
    <button
    className="md:hidden text-white focus:outline-none"
    onClick={(toggleMenu)}
    aria-label="Toogle Menu"
    >
    <FaHamburger className="w-10 h-10"/>
    </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-3/4 text-white bg-black  shadow-lg z-50 md:hidden transition-transform duration-300">
          <div className="flex flex-col p-5 space-y-4">
            {/* Close Button */}
            <button
              className="self-end focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <GiTireIronCross className="w-10 h-10 text-white" />
            </button>

            {/* Menu Links */}
            <Link
              to="/about"
              className="text-lg font-bold hover:text-orange-500"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <hr />
            <Link
              to="/blog"
              className="text-lg font-bold hover:text-orange-500"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <hr />
            <Link
              to="/career"
              className="text-lg font-bold hover:text-orange-500"
              onClick={toggleMenu}
            >
              Career
            </Link>
            <hr />
            <Link
              to="/investor-relation"
              className="text-lg font-bold hover:text-orange-500"
              onClick={toggleMenu}
            >
              Investor Relations
            </Link>
            <hr />
            <Link
              to="/testimonial"
              className="text-lg font-bold hover:text-orange-500"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <hr />
            <button
              className="mt-4 inline-flex flex justify-center items-center bg-orange-500 border-0 px-4 py-2 rounded text-white text-lg"
              onClick={toggleMenu}
            >
              Contact Us
              <FaChevronRight className="ml-1" />
            </button>
          
          </div>
        </div>
      )}

  
</header>
    </div>
  )
}

export default Navbar
