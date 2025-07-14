const Lower = () => {
  return (
    <div className="bg-[#fef1e7]">
      <section className="text-gray-800 body-font">
        <div className="container mx-auto px-4 py-10 sm:py-14 md:py-16 flex flex-col-reverse lg:flex-row items-center justify-center gap-6">
          
          {/* Left Text Block */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <h3
              className="text-[6vw] sm:text-[4.5vw] md:text-[3.33vw] leading-[7vw] sm:leading-[5vw] md:leading-[4.28vw] font-bold text-[#242424]"
              style={{ letterSpacing: '-0.025em' }}
            >
              ChefKart के{" "}
              <span className="text-orange-500">
                4500 से<br className="hidden sm:block" />
                भी ज़्यादा कुक्स
              </span>{" "}
              का<br />
              हिस्सा बनें।
            </h3>
          </div>

          {/* Right Description */}
          <div className="w-full lg:w-3/5 lg:pl-12 text-center lg:text-left">
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-black leading-relaxed">
              इज़्ज़त और गर्व के साथ जिएँ। ChefKart की ट्रेनिंग व सहायता से अपने खाना बनाने के कौशल को एक नई मंज़िल पर ले जाएँ।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower;


