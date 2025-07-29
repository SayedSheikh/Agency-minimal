import React from "react";
import ExploreMore from "../../Utilities/ExploreMore";
import videoImg from "./../../assets/Videos/video.png";

const LeadingCompanies = () => {
  return (
    <div className="max-w-[1110px] mx-auto w-11/12 font-dmSans mb-[159px]">
      <h1 className="max-w-[622px] font-bold text-[48px] leading-[60px] text-center mx-auto text-[#0F2137]">
        Leading companies trust us to develop software
      </h1>
      <p className="max-w-[550px] text-[#343D48] text-center mx-auto mt-[24px]">
        We believe it's important for everyone to have access to software
        especially when it comes to digital learning be navigate.
      </p>
      <ExploreMore
        className="flex justify-center mb-[50px]"
        label="Explore more"></ExploreMore>
      <div>
        <img className="w-full" src={videoImg} alt="Video" />
      </div>
    </div>
  );
};

export default LeadingCompanies;
