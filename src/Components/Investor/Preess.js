

const Press = () => {
  return (
    <section className="bg-white py-16">
      <div className="container md:mx-11 px-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-16">
          Press Release
        </h1>
        
        <div className="space-y-12">
          <div className="border-b border-gray-200 pb-8">
            <p className="text-lg sm:text-2xl text-blue-600 font-medium mb-3">
              January 26, 2023
            </p>
            
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-200 cursor-pointer">
              ChefKart raises $2 million in funding led by Blume Ventures, Pravega Ventures
            </h2>
          </div>

          <div>
            <p className="text-lg sm:text-2xl text-blue-600 font-medium mb-3">
              January 24, 2023
            </p>
            
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-200 cursor-pointer">
              ChefKart launches Chefit: one time cooking
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;
