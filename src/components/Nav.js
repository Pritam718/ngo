import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Join from "./Join";
import About from "./About";
import logo from "../Images/satyam-sharma-foundation.jpg";
import { BiSolidDonateHeart } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Donate from "./Donate";
import Footer from "./Footer";
const Nav = () => {
  const [open,setOpen]=useState(false);
  const menus = [
    { name: "Home", link: "/" },
    { name: "Gallery", link: "/gallery" },
    { name: "Join", link: "/join" },
    { name: "About", link: "/about" },
  ];
  return (
    <div>
      <div className="flex p-2 gap-5 justify-around  bg-customColor">
        <div className="md:flex md:gap-5">
          <div className="flex gap-2 items-center">
            <FaPhoneAlt className=" md:size-8" />
            <h1 className="text-white text-sm md:text-lg">9932048377</h1>
          </div>
          <div className="flex gap-1 items-center">
            <FiMail className=" md:size-8" />
            <h1 className="text-white text-sm md:text-lg">
              ngofoundation@gmail.com
            </h1>
          </div>
        </div>
        <div className="flex gap-5">
          <FaFacebook className="size-8" />
          <FaInstagram className="size-8" />
          <PiYoutubeLogoDuotone className="size-8" />
        </div>
      </div>
      <div className="px-5 py-2 flex bg-gray-600 justify-between items-center">
        <div className="flex px-2">
          <div>
            <img
              className="rounded-full w-16 h-16"
              src={logo}
              alt="nature image"
            />
            <p className="text-sm text-white font-semibold">Ngo Foundation</p>
          </div>
          <h1 className="text-2xl text-white font-bold py-3">Ngo Foundation</h1>
        </div>
        <div className="hidden md:flex gap-12">
          {menus?.map((menu, i) => (
            <Link to={menu?.link} key={i}>
              <h2 className="text-xl text-white font-bold hover:text-customColor hover:scale-150 duration-300">{menu?.name}</h2>
            </Link>
          ))}
        </div>
        <Link to="/donate" className="hidden md:flex mx-2 gap-2 items-center bg-customColor border border-gray-400 px-6 py-2 rounded-lg hover:bg-blue-400 hover:scale-110 duration-500 cursor-pointer">
          <BiSolidDonateHeart />
          <span className="text-xl font-bold text-white">Donate</span>
        </Link>
        <div
          className="md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <TiThMenuOutline className="size-10" />
        </div>
        <div className={` bg-red-300 inset-0 p-3 z-10 md:hidden ${open ? "fixed" : "hidden"}`}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div>
                <img
                  className="rounded-full w-16 h-16"
                  src={logo}
                  alt="nature image"
                />
              </div>
              <h1 className="text-2xl font-bold py-3">Ngo Foundation</h1>
            </div>
            <div
              className="md:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <CgClose className="size-10" />
            </div>
          </div>
          <div className="mt-6" 
          onClick={() => {
                setOpen(!open);
              }}>
          {menus?.map((menu, i) => (
            <Link to={menu?.link} key={i}>
              <h2 className="text-xl font-bold m-3 p-3 hover:bg-red-200 block rounded-lg hover:scale-150 duration-300">{menu?.name}</h2>
            </Link>
          ))}
          <div className="h-[1px] bg-red-600"></div>
          <Link to="/donate" className="mt-6 w-full flex justify-center mx-2 gap-2 items-center px-6 py-4 rounded-lg hover:bg-red-200 hover:scale-110 duration-500 cursor-pointer">
          <BiSolidDonateHeart />
          <span className="text-xl font-bold cursor-pointer">Donate</span>
        </Link>
          </div>
          
        </div>
      </div>
          
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/donate" element={<Donate/>}></Route>
      </Routes>
    </div>
  );
};

export default Nav;
