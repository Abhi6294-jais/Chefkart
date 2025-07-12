export default function VideoHero1() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[60vh] sm:h-[90vh] overflow-hidden sm:rounded-[60px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://storage.googleapis.com/chefkart-strapi-media/hygiene_740470aa24_674070e837.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-10 md:px-20  bg-opacity-40">
          <div className="text-white text-center sm:text-left max-w-4xl space-y-5 sm:space-y-7 relative z-10">
            <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold">
  Your Safety, Our Top-Priority
</h1>
<p className="text-3xl  md:text-[2rem] mt-15 font-semibold">
  All our chefs follow the food safety guidelines and{" "}
  <br className="inline:hidden" />
  <span className="text-orange-500"> adhere to hygienic practices.</span>
</p>

          </div>
        </div>
      </div>
    </div>
  );
}