import {Link} from 'react-router-dom'

const Header7 = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center"
        />

        {/* Top Gradient Blur (hidden on small) */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="w-[274.25px] aspect-[1097/845] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>

        {/* Bottom Center Gradient Blur */}
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
          aria-hidden="true"
        >
          <div
            className="w-[274.25px] aspect-[1097/845] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl lg:mx-0">
            <h2 className="text-3xl  tracking-tight text-white sm:text-4xl">Our mission</h2>
            <p className="mt-8 text-2xl font-medium text-gray-300 sm:text-7xl">
              Empowering cooks <span className='text-orange-500'> to bridge the gap</span> between tasty food & healthy eating <span className='text-orange-500'> for our customers.</span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mx-auto mt-6 md:mt-12 max-w-2xl lg:mx-0 lg:max-w-none">
            
              <Link to="investor-relation"><span aria-hidden="true" className='underline text-2xl sm:text-4xl text-gray-400'>A letter from our CEO</span></Link>
             
           

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-[.8rem] md:text-[1.2rem] text-gray-300">Meals cooked <span className='text-orange-500'>with love</span></dt>
                <dd className="text-2xl md:text-4xl font-semibold tracking-tight text-white">3M+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-[.8rem] md:text-[1.2rem] text-gray-300">Trained & verified <span className='text-orange-500'>cooks</span></dt>
                <dd className="text-2xl md:text-4xl font-semibold tracking-tight text-white">4500+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-[.8rem] md:text-[1.2rem] text-gray-300">Households <span className='text-orange-500'>served</span></dt>
                <dd className="text-2xl md:text-4xl font-semibold tracking-tight text-white">10K+</dd>
              </div>
             
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header7;

