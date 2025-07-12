
const TiF = () => {
  return (
    <section className="w-full bg-white py-16 ">
      <div className="max-w-10xl mx-auto flex flex-col lg:flex-row items-center justify-evenly ">
        
        {/* Phone with video */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[280px] sm:w-[300px] md:w-[360px] rounded-[40px] overflow-hidden shadow-lg border-[14px] border-black">
            {/* You can use your own frame/image here if desired */}
            <video
              className="w-full h-FULL object-cover"
              src="https://storage.googleapis.com/chefkart-strapi-media/public/AppDemoForWebsite.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
            Let's take it forward
          </h2>
          <p className="text-2xl text-gray-800 mb-8 px-2 lg:px-0 font-semibold ">
            This is as easy as it gets! Good cooks are just a click away.
          </p>
          <p className=" text-1xl md:text-2xl  text-gray-700 mb-10 ">
            Download the App and get started.
          </p>

          {/* Store Buttons */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
            <img
              src="https://storage.googleapis.com/chefkart-strapi-media/app_store_icon_555c3446a1.svg"
              alt="App Store"
              className="h-10 md:h-16"
            />
            <img
              src="https://storage.googleapis.com/chefkart-strapi-media/play_icon_358c0e85c1.svg"
              alt="Google Play"
              className="h-10 md:h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TiF;
