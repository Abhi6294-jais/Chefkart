import React from 'react'

const Cater = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container  py-20 mx-auto">
            <h1 className="text-center mb-12  text-5xl font-medium text-black">ChefKart <span className='font-bold'>से क्यूँ जुड़ें?</span> </h1>
          <div className="flex flex-wrap justify-center -m-4 gap-y-6 gap-x-12">
            {/* card-1 */}
            <div className="p-4 w-full sm:w-1/2 md:w-[28%]">
              <div className="h-full min-h-[420px] border-0  rounded-lg overflow-hidden">
                <img
                  className="h-63 w-full object-cover object-center"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FEarn_Money_c09cff227a.webp&w=1920&q=75"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font font-bold text-black text-3xl mb-3 text-center">नियमित पैसे</h1>
                  <p className="leading-relaxed mb-3 font-medium text-2xl">अपनी दैनिक कमाई के पैसे नियमित रूप से उसी दिन पाएँ।</p>
                </div>
              </div>
            </div>

            {/* card-2 */}
            <div className="p-4 w-full sm:w-1/2 md:w-[28%]">
              <div className="h-full min-h-[420px] rounded-lg overflow-hidden">
                <img
                  className="h-63 w-full object-cover object-center"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBe_your_own_boss_1_ff6c9822fd.webp&w=1920&q=75"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font font-bold text-black text-3xl mb-3 text-center">सम्मान से काम</h1>
                  <p className="leading-relaxed mb-3 font-medium text-2xl">समाज में एक पेशेवर कुक के रूप में सम्मान और पहचान प्राप्त करें।</p>
                </div>
              </div>
            </div>

            {/* card-3 */}
            <div className="p-4 w-full sm:w-1/2 md:w-[28%]">
              <div className="h-full min-h-[420px]  rounded-lg overflow-hidden">
                <img
                  className="h-63 w-full object-cover object-center"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_support_26823bc403.webp&w=1920&q=75"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font font-bold text-black text-3xl mb-3 text-center">ट्रेनिंग एवं सहायता</h1>
                  <p className="leading-relaxed mb-3 font-medium text-2xl">हमारे शेफ़ से ट्रेनिंग में नए पकवान बनाना सीखें। किसी भी समस्या में तुरंत सहायता पाएँ।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cater

