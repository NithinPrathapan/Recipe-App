import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 bottom-0 p-4 text-slate-200 px-12">
      <div className="flex w-full flex-col ">
        <div className="flex w-full flex-1 justify-center flex-col">
          <Link to={"/"}>
            <h1 className="text-2xl">
              <span className="text-yellow-400 font-semibold">Gotta</span>{" "}
              <span>Taste</span>
            </h1>
          </Link>
          <p className="text-base font-semibold  w-[300px] text-white-400 mt-6 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            mollitia dolores recusandae tempora iure eos amet nostrum temporibus
            illum non!
          </p>
        </div>
        <div className="flex  flex-col py-10 ">
          <h1 className="mb-6 text-xl font-semibold">Social NetWork</h1>
          <div className="flex gap-6">
            <FaFacebook size={28} className="cursor-pointer" />
            <FaInstagramSquare size={28} className="cursor-pointer" />
            <FaTwitter size={28} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
