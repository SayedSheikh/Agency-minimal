import React from "react";
import FeatureCard from "./FeatureCard";
import group from "./../../assets/Group.png";
import img1 from "./../../assets/imageF-1.png";
import img2 from "./../../assets/imageF2.png";
import img3 from "./../../assets/imageF3.png";

const tutorials = [
  {
    image: img1,
    title: "How to work with prototype design with adobe xd featuring tools",
    comments: 22,
    icon: group,
  },
  {
    image: img2,
    title: "Create multiple artboard by using figma prototyping development",
    comments: 15,
    icon: group,
  },
  {
    image: img3,
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    comments: 18,
    icon: group,
  },
];

const QualityFeatures = () => {
  return (
    <div className="pt-[57px] pb-[282px] text-center px-4 bg-[#F8FAFC] font-dmSans">
      <p className="text-[18px] text-[#8D448B] font-bold leading-[40px]">
        Quality Features
      </p>
      <h1 className="text-2xl md:text-[30px] font-bold leading-[55px] text-[#0F2137] mb-[68px]">
        Tutorials that people love most
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-[30px] flex-wrap">
        {tutorials.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default QualityFeatures;
