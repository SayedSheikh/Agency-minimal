import React from "react";

const CustomerCard = ({ indx, item }) => {
  return (
    <div className="">
      <div
        className={`h-[3px] w-[120%] mb-[25px]  ${
          indx === 0 && "bg-primary"
        }`}></div>
      <div className="max-w-[227px] flex gap-[13px]">
        <div>
          <img src={item.image} alt="Customer image" />
        </div>
        <div className="text-start font-dmSans">
          <h3 className="font-medium text-[18px] leading-[30px] text-[#0F2137]">
            {item.name}
          </h3>
          <p className="font-normal text-[15px] leading-[28px] text-[#343D48]">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
