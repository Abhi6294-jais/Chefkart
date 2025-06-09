const ContactLower = () => {
  return (
    <div>
      <section className="text-black-600 body-font ">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 py-16 gap-10">
          {/* Mission Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-6">
            <p className="mb-4 text-2xl md:text-4xl font-bold">
              Our mission is to provide <span className="text-orange-500">at-home cooking</span> services in a way that has never been experienced before by empowering millions of cooks across India.
            </p>
            <img
              className="object-cover object-center rounded-lg w-full"
              alt="Home Chef"
              src="https://thechefkart.com/_next/image?url=%2FM_F_Home%20chef_refine%201.png&w=1920&q=75"
            />
          </div>

          {/* Platform Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-6">
            <img
              src="https://thechefkart.com/_next/image?url=%2FImage.png&w=1920&q=75"
              alt="Platform Visual"
              className="rounded-lg w-full"
            />
            <p className="leading-relaxed mb-6 text-lg md:text-2xl mt-4">
              ChefKart is a platform that connects home chefs and households seamlessly by building an ecosystem. Our professionals are handpicked to serve you hygienic and wholesome meals catered to your taste!
            </p>
            <p className="text-lg md:text-2xl text-orange-500 underline">Read Our Story</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactLower;


