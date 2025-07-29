import React from "react";
import logo from "./../../assets/logo.png";

const Footer = () => {
  return (
    <div className="pt-[100px] pb-[40px] mt-[100px] lg:mt-[50px]">
      <div className="max-w-[1290px] mx-auto w-11/12 flex flex-col md:flex-row-reverse justify-between sm:items-center items-start text-[#2B2B2B]  gap-4">
        {/* Right side: Navigation Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-[#02073E] text-base font-medium mb-8">
          <a href="#">Home</a>
          <a href="#">Adversite</a>
          <a href="#">Supports</a>
          <a href="#">Marketing</a>
          <a href="#">FAQ</a>
        </div>
        {/* Left side: Logo + Text */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-5 h-5" />
          <p className="text-sm text-[#0F213760]">Copyright by 2019 Dev, Inc</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
