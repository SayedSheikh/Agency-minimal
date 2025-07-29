import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ExploreMore = ({ className, label, margin }) => {
  return (
    <div className={`${margin && "ml-[29px]"}`}>
      <a
        href="#"
        className={`font-bold leading-[42px] text-[#8D448B] flex items-center gap-[5px] ${
          className && className
        }`}>
        {label} <FaChevronRight className="font-normal" />
      </a>
    </div>
  );
};

export default ExploreMore;
