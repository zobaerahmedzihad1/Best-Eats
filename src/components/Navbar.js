import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div>
          {/* left side */}
          <AiOutlineMenu
            size={30}
            onClick={() => setNav(!nav)}
            className="cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Best <span className="font-bold text-orange-600">Eats</span>
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
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      {/* mobile menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "bg-white fixed w-[250px] md:w-[300px] top-0 left-0 z-10 h-screen duration-300"
            : "bg-white fixed w-[250px] md:w-[300px] top-0 left-[-100%] z-10 h-screen duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer duration-300"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Foods</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex text-xl py-4 cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" /> Order
            </li>
            <li className="flex text-xl py-4 cursor-pointer">
              <MdFavorite size={25} className="mr-4" /> Favorite
            </li>
            <li className="flex text-xl py-4 cursor-pointer">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="flex text-xl py-4 cursor-pointer">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="flex text-xl py-4 cursor-pointer">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="flex text-xl py-4 cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="flex text-xl py-4 cursor-pointer">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
