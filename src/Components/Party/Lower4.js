
const Lower4 = () => {
  return (
    <div className="relative h-[350px]  bg-center bg-cover" style={{ backgroundImage: "url('https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/08/workday_lunch_ideas.jpeg.jpg')" }}>
      {/* Overlay */}
       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
       What are you waiting for, when it’s
        </h2>
        <p className="text-[2.1rem] md:text-6xl font-bold text-orange-500 mt-4">
         Good Food.Good <br />
           People.Good Life
        </p>
      </div>
     
      
    </div>
  );
};

export default Lower4;