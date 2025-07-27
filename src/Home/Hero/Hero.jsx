import React from "react";
import bannerImg from "./../../assets/HeroImage.png";
import dropbox from "./../../assets/Companies/dropbox.png";
import google from "./../../assets/Companies/google.png";
import paypal from "./../../assets/Companies/paypal.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="pt-[97px] flex gap-[60px] max-w-[1420px] mx-auto w-11/12 font-dmSans pb-[98px] flex-col-reverse lg:flex-row">
      {/* text */}
      <div className="w-full lg:w-1/2">
        <div className="max-w-[560px]">
          <h1 className="font-bold text-[35px] md:text-[45px] lg:text-[64px]  md:leading-[80px] leading-[45px] mb-[28px] tracking-[1px]">
            Great software is built with amazing developers
          </h1>
          <p className="max-w-[479px] text-[18px] leading-[42px]">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
          <div id="input" className="flex flex-col md:flex-row gap-[15px]">
            <input
              placeholder="Subscribe newsletter"
              className="bg-white w-full md:w-[300px] lg:w-[370px] h-[65px] py-[13px] px-[24px] rounded-[8px] shadow focus:outline-2 focus:outline-primary"
              type="text"
              name=""
              id=""
            />
            <button className="py-[13px] px-[41px] btn btn-primary font-bold text-[20px] leading-[40px] h-[65px] rounded-[4px] text-white shadow-none">
              Subscribe
            </button>
          </div>
        </div>
        <div className="max-w-[490px] mt-[60px] flex flex-col sm:flex-row sm:gap-[21px] gap-[10px] ">
          <p className="leading-[42px] text-[#566272] opacity-[0.6]">
            Sponsored by:
          </p>
          <div className="flex sm:gap-[28px] gap-[10px] items-center flex-wrap">
            <img
              className="w-[100px] h-[28px] object-contain"
              src={paypal}
              alt=""
            />
            <img
              className="w-[100px]  h-[28px] object-contain"
              src={google}
              alt=""
            />
            <img
              className="w-[100px] h-[28px] object-contain"
              src={dropbox}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* banner Image */}
      <div className="w-full lg:w-1/2">
        <img className="w-full" src={bannerImg} alt="Banner image" />
      </div>
    </div>
  );
};

export default Hero;
