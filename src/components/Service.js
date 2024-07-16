import React from "react";
import food from "../Images/food.jpg";
import health from "../Images/health.jpeg";
import eco from "../Images/ecosystem-health-n.webp";
const Service = () => {
  const modelItem = [
    {
      image: `${health}`,
      title: "Better Health & Medicine",
      des: "For better health organize fitness camps, yoga, meditation, medical and blood donation camps",
    },
    {
      image: `${food}`,
      title: "Quality Food",
      des: "We distribute ration and food packets to needy people who can't afford a single time.",
    },
    {
      image: `${eco}`,
      title: "Healthy Ecosystem",
      des: "We plant trees in the right places to safeguard biodiversity, protect nature, and fight climate ",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-semibold flex justify-center">
        Services we are providing
      </h1>

      <div className="md:flex justify-evenly m-5 group ">
        {modelItem?.map((mItem, key) => (
          <div className="w-96 rounded-xl my-1 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 ">
            <div className="flex justify-center mb-5">
              <img
                src={mItem?.image}
                alt="model1"
                className="rounded-t-xl h-40 "
              />
            </div>

            <h1 className="flex justify-center text-2xl font-bold">
              {mItem?.title}
            </h1>
            <h1 className=" text-lg font-medium my-2 px-2">{mItem?.des}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
