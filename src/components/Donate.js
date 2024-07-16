import React from "react";
import scanner from "../Images/scanner.jpg";
import Join from "./Join";
const Donate = () => {
  return (
    <div>
      <div className="flex justify-center text-4xl font-bold text-customColor mt-10 ">
        SUPPORT FOR A CAUSE
      </div>
      <div className="md:flex justify-center gap-10 m-10">
        <div>
          <h1 className="text-4xl font-semibold my-5">
            For Easy Money Transfers
          </h1>
          <img src={scanner} alt="scanner" className="w-96 h-96" />
        </div>
        <Join/>
      </div>
    </div>
  );
};

export default Donate;
