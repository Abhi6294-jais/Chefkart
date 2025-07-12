import React from 'react'

const Hearit2 = () => {
  return (
    <div>
      <section className="body-font ">
      
       <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center ">

          
        


          <div className="lg:w-1/2 sm:w-1/3 w-full mt-6 sm:mt-0  p-5 rounded-lg">
            <video
              className="object-cover object-center w-full h-full rounded-lg"
              src="https://storage.googleapis.com/chefkart-strapi-media/cook_vid_low_quality_8_mb_c474611303.mp4"
              controls
              autoPlay
              muted
              loop
            />
          </div>

           
          <div className="flex flex-wrap  mb-auto lg:w-1/2 sm:w-[80%] items-center  sm:pr-10 mt-9">
            <div className="w-full sm:p-4 px-4 mb-6 ml-10">
              <img src="https://thechefkart.com/comma.svg" alt="" />
              <div className="leading-relaxed text-[2.8rem]">
                "जहाँ आपको इज़्ज़त नहीं मिले, ChefKart उस घर में आपको कभी नहीं भेजेगी।"
              </div>
            </div>
            <div className="text-3xl font-bold text-orange-500 ml-12">
              अजनहर बीबी
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hearit2