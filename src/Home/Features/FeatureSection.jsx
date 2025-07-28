import React from "react";
import FeatureCard from "./FeatureCard";
import customization from "./../../assets/Features/customization.png";
import vector from "./../../assets/Features/VectoreShape.png";
import editing from "./../../assets/Features/editingFreedom.png";
import award from "./../../assets/Features/bestAward.png";

const features = [
  {
    title: "Unlimited Customization",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    color: "from-[#ffe396] to-[#ffcf49]",
    icon: customization,
  },
  {
    title: "Vector shape & resizable",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    color: "from-[#88eaea] to-[#2adada]",
    icon: vector,
  },
  {
    title: "Editing freedom",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    color: "from-[#78c7f2] to-[#1a9fe9]",
    icon: editing,
  },
  {
    title: "Best Award history",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
    color: "from-[#ffc2ac] to-[#ff966e]",
    icon: award,
  },
];

const FeatureSection = () => {
  return (
    <section className="max-w-[1240px] mx-auto w-11/12 mt-[60px] mb-[129px]">
      <h3 className="font-bold text-[18px] leading-[40px]  text-[#8D448B] font-dmSans text-center">
        Quality features
      </h3>
      <h2 className="text-center font-bold text-[30px] leading-[55px] font-dmSans">
        Meet exciting feature of app
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[78px] gap-[60px] mx-auto">
        {features.map((item, index) => (
          <FeatureCard key={index} item={item}></FeatureCard>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
