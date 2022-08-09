import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full max-h-[500px] text-gray-200 bg-black/40 flex flex-col justify-center">
          <h2 className="mx-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            The <span className="text-orange-400">Best</span>
          </h2>
          <h2 className="mx-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-orange-400">Food</span> Delivered
          </h2>
        </div>
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="img"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
