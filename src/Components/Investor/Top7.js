export default function Top7() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-auto sm:h-[80vh]">
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FInvestor_Hero_banner_1_f1154a025e.webp&w=1920&q=75"
          alt="Slide"
          className="w-full h-auto sm:h-full object-cover"
        />

        {/* Bottom-left text overlay */}
        <div className="absolute bottom-6 md:bottom-10 left-4 sm:left-10 md:left-20 text-white mb-0 md:mb-12">
          <h1 className="text-[1.3rem] mt-2 sm:text-4xl md:text-5xl lg:text-5xl font-bold  max-w-[90%] sm:max-w-2xl">
            We are <span className="text-orange-500">category creators,</span>
         
            dedicated to <span className="text-orange-500">simplifying the</span>
            
            <span className="text-orange-500">way India eats</span>
          </h1>
        </div>
      </div>
    </div>
  );
}


