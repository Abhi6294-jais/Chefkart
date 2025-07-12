import { useRef, useState } from "react";

const Hero6 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="bg-white body-font overflow-hidden w-full min-h-screen">
      <div className="container mx-auto px-1  py-12">
        <div className="lg:flex lg:flex-row flex-col justify-between items-center gap-14">

         {/* Text Section */}
<div className="lg:w-1/2 w-full px-4 sm:px-6 lg:px-0">
  <div className="inline-block bg-[#3a8459] rounded-3xl px-4 py-1 sm:px-6 sm:py-2 mb-6">
    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white">Blog</h2>
  </div>

  <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
    How to find the best cook
    <br className="hidden sm:block" />
    <span className="text-[#214e34]"> for your home</span>
  </h1>

  <p className=" sm:text-lg md:text-xl lg:text-3xl text-black mt-6 mb-10 ">
    Finding a cook for home can be challenging, especially if you’re staying away from your hometown.
  </p>

  <button className="text-white bg-black hover:bg-orange-500 hover:text-black font-bold text-1xl  md:text-2xl mb-2 md:mb-0 px-6 py-3 rounded-lg transition duration-200">
    Read More
  </button>
</div>


          {/* Video with custom play/pause */}
          <div className="lg:w-[50%] w-full flex justify-center">
            <div className="relative rounded-[1.5rem] overflow-hidden w-[300px] h-[300px] md:w-[700px] md:h-[700px] shadow-xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/chefkart-strapi-media/website_cook_loop_4e9912d5f5.mp4"
                muted
                loop
                playsInline
              />
              {/* Custom play/pause button */}
              <button
                onClick={togglePlayback}
                className="absolute inset-0 flex items-center justify-center  transition"
              >
                <img
                  src={isPlaying
                    ? "https://cdn-icons-png.flaticon.com/512/64/64595.png"
                    : "https://cdn-icons-png.flaticon.com/512/0/375.png"}
                  alt={isPlaying ? "Pause" : "Play"}
                  className="w-16 h-16 bg-white rounded-full p-3"
                />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero6;
