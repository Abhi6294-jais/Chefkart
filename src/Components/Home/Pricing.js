import {Link} from 'react-router-dom'

const Pricing = () => {
  return (
    <div>
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mx-auto aspect-[1155/678] w-full max-w-6xl bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-4xl text-center">
        
          <p className="md:mt-2  text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 ">
            Discover your perfect service
          </p>
        </div>
       
        <div className="mx-auto mt-8 md:mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-5xl lg:grid-cols-2">
          {/* Hobby Plan */}
          <div className="rounded-3xl bg-white/60 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:mx-8 sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
            <h3 id="tier-hobby" className="text-2xl md:text-4xl font-semibold text-[#2d4739]">Chef for Party</h3>
            <p className='italic mb-0 mt-2 md:mt-5 text-1xl md:text-2xl'>Starting from</p>
            <p className="mt-4 flex items-baseline gap-x-2">
              
              <span className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">$99</span>
              <span className="text-2xl md:text-3xl text-black font-bold">/visit</span>
            </p>
            <p className="mt-4 md:mt-6 text-1xl md:text-2xl text-black border-b-2 border-gray-400">Professional party chefs to elevate your party experience</p>
            <ul className="mt-5 md:mt-8 space-y-3 md:space-y-5 text-1xl md:text-2xl text-black ">
              {[
                'Multi-Cuisine Professionals',
                'Customisable Menu',
                'Prompt Service',
                'Bartenders, Waiters, etc.',
                'Available in Delhi NCR, Bengaluru and Mumbai',
              ].map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-[#2d4739]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="#"
              aria-describedby="tier-hobby"
              className="mt-5 md:mt-8 block rounded-md md:px-3.5 py-1.5 md:py-2.5 bg-orange-500 text-center text-2xl font-semibold text-white ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
            >
              Book Now
            </Link>
            <Link
              to="/chef-for-party"
              aria-describedby="tier-hobby"
              className="mt-3 md:mt-5 block rounded-md px-3.5 py-1.5 md:py-2.5 text-center text-2xl font-semibold text-black ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-3"
            >
              Know More
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-[#2d4739] rounded-3xl  p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
            <h3 id="tier-enterprise" className="text-2xl md:text-4xl font-semibold text-white">Chefit: One-time cook</h3>
            <p className='italic mb-0 mt-2 md:mt-5 text-1xl md:text-2xl text-white'>Starting from</p>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-3xl md:text-5xl font-semibold tracking-tight text-white">$29</span>
              <span className="text-2xl md:text-3xl text-white font-bold">/visit</span>
            </p>
            <p className="mt-4 md:mt-6 text-1xl md:text-2xl text-white border-b-2 border-gray-400">Get a professional cook for one-time within 60 minutes.</p>
            <ul className="mt-5 md:mt-8 space-y-3 md:space-y-5 text-1xl md:text-2xl text-white ">
              {[
                'Trained & Verified Cooks',
                'Healthy & Hygienic Food',
                'Tailored to Your Taste',
                'Quick Service',
                'Available only in Gurugram',
               
              ].map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-orange-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="#"
              aria-describedby="tier-hobby"
              className="mt-5 md:mt-8 block rounded-md md:px-3.5 py-1.5 md:py-2.5 bg-orange-500 text-center text-2xl font-semibold text-white ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
            >
              Book Now
            </Link>
            <Link
              to="/cook-for-month"
              aria-describedby="tier-hobby"
              className="mt-3 md:mt-5 block rounded-md px-3.5 py-1.5 md:py-2.5  text-center text-2xl font-semibold text-black ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-3"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

