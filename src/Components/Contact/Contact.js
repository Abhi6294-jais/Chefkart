import ContactLower from "./ContactLower";
import { Link } from "react-router-dom"
import FAQ from "./FAQ";
const Contact = () => {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font relative " style={{
  backgroundImage: `url('https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FRectangle_60_bfb1e0017f_a37ee78af1.webp&w=1920&q=75')`
,backgroundPosition:'center',
backgroundSize:'cover'
}}
>
          <div className="container px-4 md:px-8 py-12 md:py-24 mx-auto flex flex-col lg:flex-row">
            {/* Left Section - Map & Contact Info */}
            <div className="w-full lg:w-2/3 bg-gray-300 rounded-lg overflow-hidden lg:mr-10 p-6 md:p-10 relative mb-10 lg:mb-0">
            <div className="w-full h-96 mb-6">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3508.8836311075306!2d77.08036!3d28.422768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19142e78d47b%3A0xde577a7e821cd90!2sChefKart!5e0!3m2!1sen!2sin!4v1749414635517!5m2!1sen!2sin"
              ></iframe>
              </div>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md z-10 w-full">
                <div className="w-full md:w-1/2 px-6 mb-2 md:mb-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1 text-sm">B-179, Sector 57, near Rail Vihar, Block B, Sushant Lok III, Gurugram, Haryana 122003</p>
                </div>
                <div className="w-full md:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <Link to="#" className="text-indigo-500 leading-relaxed break-all text-sm">smartabhishek6294@email.com</Link>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed text-sm">+91 6294975338</p>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full lg:w-1/3 bg-white flex flex-col w-full py-6 px-4 md:px-8">
              <h2 className="text-gray-900 text-3xl md:text-5xl text-center mb-2 font-medium title-font">Contact Us</h2>
              <p className="leading-relaxed mb-6 text-xl text-center text-gray-600">Fill out the form or Call us at</p>

              {/* Input Fields */}
              {["Name", "Email", "Phone", "City"].map((label, idx) => (
                <div className="relative mb-4" key={label}>
                  <label htmlFor={label.toLowerCase()} className="leading-7 text-base text-gray-600">
                    {label}
                  </label>
                  {label === "City" ? (
                    <select
                      id="city"
                      name="city"
                      className="w-full appearance-none rounded-md bg-white py-2 px-3 text-base border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                    >
                      {["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow"].map(city => (
                        <option key={city}>{city}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={label === "Email" ? "email" : label === "Phone" ? "number" : "text"}
                      id={label.toLowerCase()}
                      name={label.toLowerCase()}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-3 text-base outline-none"
                    />
                  )}
                </div>
              ))}

              {/* Message */}
              <div className="relative mb-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please write your message in detail"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-2 px-3 resize-none"
                ></textarea>
              </div>

              <button className="text-white bg-orange-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-xl">
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
      <ContactLower />
      <FAQ/>
    </>
  );
};

export default Contact;

