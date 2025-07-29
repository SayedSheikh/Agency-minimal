import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ExploreMore = ({ className }) => {
  return (
    <div className={`ml-[29px] `}>
      <a
        href="#"
        className={`font-bold leading-[42px] text-[#8D448B] flex items-center gap-[5px] ${
          className && className
        }`}>
        Learn more <FaChevronRight className="font-normal" />
      </a>
    </div>
  );
};

export default ExploreMore;
