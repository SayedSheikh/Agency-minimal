import React from "react";

const FeatureCard = ({ image, title, comments, icon }) => {
  return (
    <div className="bg-white rounded-lg border border-[#F3F4F5] overflow-hidden max-w-[410px] h-[395px] hover:shadow-xl hover:shadow-gray-100 duration-150 transition-shadow cursor-pointer mx-auto md:mx-0">
      <img
        src={image}
        alt="Tutorial"
        className="w-full h-[230px] object-cover"
      />
      <div className="p-5">
        <h3 className="text-base leading-[25px] text-start font-bold text-gray-900 mb-5">
          {title}
        </h3>
        <div className="flex items-center text-sm font-medium leading-[26px] text-[#343D4880]">
          <img src={icon} alt="comment icon" className="w-4 h-4 mr-2" />
          {comments} Comments
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
