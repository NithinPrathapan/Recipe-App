import React from "react";
import { FaOpencart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className="flex px-4 py-6 justify-between m-0 items-center ">
      <div className="logo relative">
        <div>
          <h1 className="font-oswald font-semibold text-purple-900-500 text tracking-widest relative z-50  text-xl left-6">
            Book a Meal
          </h1>
        </div>
      </div>
      <div className="routes border px-2 py-1 w-[60%] justify-between rounded-lg sm:flex hidden">
        <input
          className="outline-none"
          type="text"
          placeholder="Type Ingredients..."
        />
        <div className="bg-orange-500 p-1 rounded-lg">
          <IoSearch className="" color="white" size={24} />
        </div>
      </div>
      <div className="cart-section  flex flex-row  sm:gap-4 gap-2 items-center">
        <FaOpencart size={28} />
        <RiAccountCircleLine size={28} />
      </div>
    </nav>
  );
};

export default Nav;
