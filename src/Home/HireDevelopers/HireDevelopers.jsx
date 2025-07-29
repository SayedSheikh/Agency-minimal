import React from "react";
import arrow from "./../../assets/Group 48.png"; // Curved arrow
import threeLine from "./../../assets/Group 46.png"; // Line decoration

const HireDevelopers = () => {
  return (
    <div className="relative font-dmSans">
      <div className="max-w-[1290px] mx-auto w-11/12 bg-[#8D448B] rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-[10px] px-6  lg:px-[44px] py-[30px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2   z-10">
        <div className="text-white text-center lg:text-left text-xl lg:text-[30px] font-bold  max-w-[520px]">
          Hire the world’s best developers <br /> and designers around!
        </div>

        <div className="hidden lg:block flex-1">
          <img
            src={arrow}
            alt="curved arrow"
            className="w-full max-h-[135px] object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <img
            src={threeLine}
            alt="top line"
            className="w-[72px] h-[25px] object-cover"
          />
          <button className="bg-white text-[#8D448B] font-bold px-6 py-3 rounded-md shadow hover:scale-105 transition duration-300 tracking-[10%] cursor-pointer">
            HIRE DEVELOPERS
          </button>
          <img
            src={threeLine}
            alt="bottom line"
            className="w-[72px] h-[25px] object-cover rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default HireDevelopers;
