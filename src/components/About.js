import React from "react";
import photo from "../Images/photo1.jpg";
import mission from "../Images/mission.png";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="flex justify-center my-10">
        <h1 className="w-96 bg-yellow-300 rounded-2xl flex justify-center text-6xl text-customColor font-bold py-3 shadow-2xl shadow-slate-600">
          ABOUT US
        </h1>
      </div>
      <div className="md:flex gap-10">
        <img src={photo} alt="photo" className="md:w-1/2 rounded-xl" />
        <h1 className="text-xl font-semibold md:my-10 md:w-96 mx-5 py-5">
          NGO is a group of people whom all are hoping for "Better Tomorrow". It
          was established very recently in ___ . A new team with new thoughts
          and positive energy are working to reach out and rehabilitate
          differently able people from the underprivileged segment. It is
          focusing alleviating disabilities and providing physical, social and
          economic rehabilitation to the needy. We are an organization that is
          aiming and trying to help differently able individuals realize their
          hopes, dreams and help those who need support.
        </h1>
      </div>
      <div className="flex justify-center my-10">
        <h1 className="flex justify-center text-4xl md:text-6xl text-customColor font-bold py-3 ">
          MISSION & VISION
        </h1>
      </div>
      <div className="md:flex gap-20 m-5 md:mx-48">
        <img src={mission} alt="photo" className="md:w-1/4 rounded-xl " />
        <h1 className="text-xl font-semibold my-1 md:w-1/2 ">
          NGO is constantly working hard in the direction of the betterment of
          the poor people and the environment. In the field of improving the
          standard of life of underprivileged people, we have a vision of a
          world where everyone has a decent place to live, where everyone can
          get the healthcare they need, where every child can get better
          opportunities to attain an excellent education. Our main mission is to
          provide a quality education because when a child of a family get
          educated, automatically his/her coming generation will also be well
          educated and self-reliant. Along with improving the quality of people
          our vision is also to make this environment clean and green by
          afforestation, doing events like "Swachh Bharat Abhiyan", spreading
          awareness about the importance of clean & Hygenic surrounding and many
          more
        </h1>
      </div>
      <div className="flex justify-center gap-2 items-center my-1 h-14 rounded-lg ">
        <Link to="/donate" className=" flex gap-2 items-center rounded-full p-2 bg-customColor hover:bg-yellow-300 text-white ">
          <BiSolidDonateHeart />
          <span className="text-3xl font-bold   hover:text-customColor cursor-pointer">Support Us</span>
        </Link>
        </div>
    </div>
  );
};

export default About;
