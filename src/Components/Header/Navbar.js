import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
      <header className="text-black bg-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FLogo_black_9e78b44631.webp&w=1920&q=75" width={"200px"} height={"300px"} alt="" />

    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="#" className="mr-5 hover:text-gray-900">Our Services</Link>
      <Link to="#" className="mr-5 hover:text-gray-900">ChefKart से जुड़ें</Link>
      <Link to="#" className="mr-5 hover:text-gray-900">Cooks Near Me</Link>
     
    </nav>
    <button className="inline-flex items-center bg-orange-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact us
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
