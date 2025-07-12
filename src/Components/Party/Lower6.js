const Lower6 = () => {
  return (
    <section className="bg-[#e5e5e5]">
      <div className="flex flex-col md:flex-row w-full h-full min-h-[500px] py-3">
        
        {/* Left Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:px-20 py-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let Food Do The <br className="hidden md:inline-block" /> Talking
          </h1>
          <p className="text-lg md:text-2xl text-gray-800 max-w-xl">
            Enjoy the spotlight with a chef for birthday, kitty party, anniversaries, house-warming, farewell, and any other party.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <img
            src="https://media.istockphoto.com/id/824283798/photo/two-famous-chefs-discuss-their-video-blog-while-using-tablet-computer-they-work-on-a-big.jpg?s=612x612&w=0&k=20&c=cKxpe0KiQZ7ORAw7iQ6nMQjpFxfHLr4BjdtZ-CqGfCw="
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Lower6;





