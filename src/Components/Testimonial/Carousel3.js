export default function Carousel3() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[60vh] sm:h-[90vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://storage.googleapis.com/chefkart-strapi-media/video_2160p_2_87ad6f832c.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 bg-black bg-opacity-40">
          <h1 className="text-4xl sm:text-6xl font-bold text-white text-center">
            What People Think About Us
          </h1>
        </div>
      </div>
    </div>
  );
}
