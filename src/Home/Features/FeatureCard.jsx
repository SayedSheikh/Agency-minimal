import React from "react";

const FeatureCard = ({ item }) => {
  const { title, description, color = "", icon } = item;
  return (
    <div className="max-w-[265px] flex flex-col items-center gap-[20px] mx-auto">
      <div
        className={`size-[110px] bg-gradient-to-br p-[30px] rounded-4xl ${color} flex items-center`}>
        <img className="w-full" src={icon} alt="" />
      </div>

      <h3 className="font-bold text-[18px] leading-[30px] font-dmSans text-center">
        {title}
      </h3>
      <p className="text-center font-normal text-[15px] leading-[28px] font-dmSans">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
