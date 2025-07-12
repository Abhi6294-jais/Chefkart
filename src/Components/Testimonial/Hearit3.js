import React from 'react'

const Hearit3 = () => {
  return (
    <div>
      <section className="body-font">
      
        <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
          
          {/* Left side stats and text */}
          <div className="flex flex-wrap -mx-4 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 mt-9">
            <div className="w-full sm:p-4 px-4 mb-6">
              <img src="https://thechefkart.com/comma.svg" alt="" />
              <div className="leading-relaxed text-[2.8rem]">
             "I will never go back to ordering food online because ChefKart just works great for me!"
              </div>
            </div>
            <div className="text-3xl font-bold text-orange-500 ml-4">
             Pramiti Upadhyay
            </div>
          </div>

          {/* Right side video with light background */}
          <div className="lg:w-1/2 sm:w-1/3 w-full mt-6 sm:mt-0  p-5 rounded-lg">
            <video
              className="object-cover object-center w-full h-full rounded-lg"
              src="https://storage.googleapis.com/chefkart-strapi-media/Monthly_Subscription_Testiomonial_454d9c714c.mp4"
              controls
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hearit3