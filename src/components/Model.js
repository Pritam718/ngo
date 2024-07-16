import React from "react";
import model1 from "../Images/model1.jpeg";
import model2 from "../Images/model2.png";
import model3 from "../Images/model3.jpeg";
import { Link } from "react-router-dom";
const Model = () => {
  const modelItem = [
    {
      image: `${ model1 }`,
      title: "Environment",
      des: "We plant trees in the right places to safeguard biodiversity, protect nature, and fight climate change. We planted more than 200 saplings",
    },
    {
      image: `${ model2 }`,
      title: "Zero Hunger",
      des: "We distribute ration packets to needy people who can't afford a single time. Till now we have served 10220+ meals to needy one.",
    },
    {
      image: `${ model3 }`,
      title: "Better Health",
      des: "For better health we distribute necessary basic food items to the needy, organize fitness camps, yoga, meditation, medical and blood donation camps.",
    },
  ];
  return (
    <div className="md:flex justify-evenly m-5 py-10 group">
      {modelItem?.map((mItem, key) => (
        <div className="w-96 rounded-xl my-1 border-2 hover:border-4  hover:border-red-400 group-hover:blur-sm hover:!blur-none duration-500 group-hover:scale-[0.85] hover:!scale-100">
          <img src={mItem?.image} alt="model1" className="rounded-t-xl" />
          <h1 className="flex justify-center text-2xl font-bold">
            {mItem?.title}
          </h1>
          <h1 className=" text-lg font-medium my-2 px-2">
            {mItem?.des}
          </h1>
          <div className="flex justify-center my-2 py-2">
            <Link to="/donate" className="bg-customColor text-white text-xl w-36 h-12  rounded-full  flex justify-center items-center hover:bg-white hover:text-customColor hover:font-bold hover:border-2 hover:border-customColor cursor-pointer">
              Donate
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Model;
