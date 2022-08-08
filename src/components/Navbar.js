import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div>
          {/* left side */}
          <AiOutlineMenu size={30} className="cursor-pointer" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Best <span className="font-bold">Eats</span>
          </h1>
        </div>
        <div className="hidden lg:flex items-center p-1 bg-gray-200 rounded-full text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* right side */}
      <div className="bg-gray-200 flex rounded-full w-[200px] sm:w-[400px] lg:w-[500px] items-center px-2">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
          autoCapitalize="off"
        />
      </div>
      <button className="bg-black text-white hidden md:flex rounded-full py-2">
        <BsFillCartFill size={20} className='mr-2'/>
        Cart
      </button>
    </nav>
  );
};

export default Navbar;
