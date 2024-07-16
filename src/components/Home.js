import React from "react";
import { BiSolidDonateHeart } from "react-icons/bi";
import Model from "./Model";
import photo2 from '../Images/photo2.jpeg'
import Service from "./Service";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-gray-900 bg-cover bg-no-repeat bg-center bg-[url('Images/background.jpg')] ">
        <div className="md:flex justify-center gap-5 py-2 px-5">
          <div>
          <h1 className="text-customColor text-7xl font-bold text-shadow-3d">
            NGO
          </h1>

          <h1 className="text-red-500 text-6xl font-bold text-shadow-3d ">
            Foundation
          </h1>
          </div>
        
        <div className=" text-lg md:text-3xl font-medium md:w-1/2 p-5 shadow-lg bg-slate-50 rounded-lg ">
          We are a team who want to help unconditionally without any favour of
          return and we strongly believe that we can bring change in society and
          our belief is our strength.
        </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 items-center my-1 h-14 rounded-lg bg-red-200 hover:bg-white  ">
        <Link to="/donate" className=" flex gap-2 items-center rounded-full p-2 hover:bg-red-200 ">
          <BiSolidDonateHeart />
          <span className="text-3xl font-bold border-2 border-red-200 rounded-lg px-2 hover:text-customColor cursor-pointer">Support Us</span>
        </Link>
        </div>
        <div className="flex justify-center items-center shadow-xl "> 
          <h1 className="md:w-1/2 p-3 m-2 text-2xl font-semibold">NGO is focusing on alleviating disabilities and providing physical, social and economic rehabilitation to the needy. For achieving this goal we are focusing on four major fields i.e. Education,   Environment, Hunger and Health.</h1>
        </div>
      
        <div className="py-2">
          <h1 className="flex justify-center text-4xl md:text-6xl   font-bold ">Causes We are Serving</h1>
        </div>
        <Model/>
        <div className="md:flex justify-center gap-20 m-5">
          <img src={photo2} alt="photo2" className="md:w-1/3 rounded-lg"/>
          <div className="md:w-1/3 flex justify-center items-center">
          <div>
          <h1 className="text-6xl  font-semibold my-2">Who we are?</h1>
            <h1 className="text-xl font-medium my-3">We are actually a thought, a thought which is about helping people without any favour of return and their is a team named 'Udaan' which is working to make this thought a reallity. </h1>
            <h1 className="text-xl font-medium my-3">This is a group of people who are working for better tomorrow and making this world a better place to live.</h1>
            <div className="flex justify-center my-2 py-2">
            <Link to="/about" className="bg-customColor text-white text-xl  w-36 h-12  rounded-full  flex justify-center items-center hover:bg-white hover:text-customColor hover:font-bold hover:border-2 hover:border-customColor cursor-pointer">
              Learn More
            </Link>
          </div>
            
          </div>
          </div>
        </div>
        <Service />
    </>
  );
};

export default Home;
