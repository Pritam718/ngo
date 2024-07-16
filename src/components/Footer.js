import React from "react";
import logo from "../Images/satyam-sharma-foundation.jpg";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-footerColor">
      <div className=" md:flex gap-48 justify-center">
        <div className="m-1 p-5 md:w-1/4">
          <div className="flex px-2">
            <div>
              <img
                className="rounded-full w-16 h-16"
                src={logo}
                alt="nature image"
              />
              <p className="text-sm text-white font-semibold">Ngo Foundation</p>
            </div>
            <h1 className="text-2xl text-white font-bold py-3">
              Ngo Foundation
            </h1>
          </div>
          <div className=" py-2">
            <h1 className="text-yellow-400 text-xl">
              We are a team who want to help unconditionally without any favour
              of return and we strongly believe that we can bring change in
              society .
            </h1>
          </div>
          <div className="flex gap-5 text-white">
            <FaFacebook className="size-8" />
            <FaInstagram className="size-8" />
            <PiYoutubeLogoDuotone className="size-8" />
          </div>
        </div>
        <div className="m-1 p-5">
          <h1 className="text-2xl font-medium text-white">Contact Us</h1>
          <div className="flex gap-2 items-center py-2">
            <FaPhoneAlt className="  text-white" />
            <h1 className="text-white text-sm md:text-lg">9932048377</h1>
          </div>
          <div className="flex gap-1 items-center py-2">
            <FiMail className=" md:size-5 text-white" />
            <h1 className="text-white text-sm md:text-lg">
              ngofoundation@gmail.com
            </h1>
          </div>
          <div className="pt-5 text-white">Tamluk , WestBengal</div>
        </div>
      </div>
      <div>
        <h1 className="text-white flex justify-center">
          Proudly created by Pritam Adhikari
        </h1>
        <h1 className="text-white flex justify-center px-3 py-2">
          Copyrights © 2021 @UdaanFaithFoundation. All Rights Reserved. Terms &
          Conditions | Privacy Policy
        </h1>
      </div>
    </div>
  );
};

export default Footer;
