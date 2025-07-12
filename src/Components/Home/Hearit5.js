import React from 'react'

const Hearit5 = () => {
  return (
    <div>
      <section className="body-font bg-beig">
        <h1 className="text-center text-gray-700 text-5xl font-bold mt-2 md:mt-10">Don’t Take Our Word For It!</h1>
        <div className="container px-5 py-18 md:py-24 mx-auto flex flex-wrap justify-center items-center">
          
          {/* Left side stats and text */}
          <div className="flex flex-wrap -mx-4 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 mt-9">
            <div className="w-full sm:p-4 px-4 mb-6">
              <img src="https://thechefkart.com/comma.svg" alt="" />
              <div className="leading-relaxed text-[1.5rem] md:text-[2.8rem]">
             This is a much-required service that is convenient and more affordable than ordering online.
              </div>
            </div>
            <div className="text-3xl font-bold text-orange-500 pl-4">
            Rishi
            </div>
          </div>

          {/* Right side video with light background */}
          <div className="lg:w-1/2 sm:w-1/3 w-full mt-6 sm:mt-0  p-5 rounded-lg">
            <video
              className="object-cover object-center w-full h-full rounded-lg"
              src="https://storage.googleapis.com/chefkart-strapi-media/testemonial_0f93413c4a.mp4"
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


export default Hearit5;