import React from "react";
import BoostImage from "./../../assets/boostImage.png";
import tick from "./../../assets/tick.png";
import { FaChevronRight } from "react-icons/fa";
import ExploreMore from "../../Utilities/ExploreMore";

const BoostYourAgencies = () => {
  return (
    <div className="flex gap-[109px] max-w-[1228px] mx-auto w-11/12 font-dmSans pb-[98px] flex-col-reverse lg:flex-row-reverse lg:items-center">
      {/* text */}
      <div className="w-full max-w-[486px] lg:w-1/2">
        <h1 className="font-bold text-[48px] leading-[60px] text-[#0F2137]">
          Boost your agencies by choosing Ninja Developers
        </h1>
        <p className="font-normal text-[17px] leading-[34px] text-gray-400 mt-[22px] mb-[30px]">
          Create custom landing pages with Shades that convert more visitors
          than any website, no coding required.
        </p>
        <ul>
          <li className="text-[18px] leading-[45px] text-[#02073E] flex gap-[11px] items-center">
            <img src={tick} alt="Check" /> Unlimited design possibility
          </li>
          <li className="text-[18px] leading-[45px] text-[#02073E] flex gap-[11px] items-center">
            <img src={tick} alt="Check" /> Completely responsive features
          </li>
          <li className="text-[18px] leading-[45px] text-[#02073E] flex gap-[11px] items-center">
            <img src={tick} alt="Check" /> Easy to customize plugins
          </li>
        </ul>
        <ExploreMore label={"Learn more"} margin={true} />
      </div>
      {/* banner Image */}
      <div className="w-full lg:w-1/2 relative ">
        <img
          className="w-full relative z-20"
          src={BoostImage}
          alt="Banner image"
        />
        {/* <div className="bg-[#f0fbff] size-[532px] absolute bottom-0 z-10"></div> */}
      </div>
    </div>
  );
};

export default BoostYourAgencies;
