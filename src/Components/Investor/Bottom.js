const Bottom = () => {
  return (
    <div>
      <section className="mt-6 p-2 sm:p-4 md:p-6 lg:p-10 xl:p-14">
        <div className="relative w-full">
          {/* Background Image */}
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBG_1_d28dd0f405.png&w=1920&q=75"
            alt="Background"
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Centered Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-5 md:p-8 lg:p-16 xl:p-24">
            <p className="text-white text-sm sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-center px-2 sm:px-4 md:px-6 lg:px-8 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
              This is just the beginning with many more milestones & funding to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bottom;

