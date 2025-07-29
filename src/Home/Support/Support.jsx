import React from "react";
import supportImg from "./../../assets/support.png";
import ExploreMore from "../../Utilities/ExploreMore";

const Support = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-11/12 flex flex-col-reverse lg:flex-row items-center lg:items-end gap-10 lg:gap-[93px] mb-[220px] font-dmSans">
      {/* Text Section */}
      <div className="lg:w-1/2 max-w-[525px] text-center lg:text-left">
        <h2 className="text-[48px]  font-bold  text-[#0F2137] leading-tight mb-6 ">
          Free Customer Support <br /> to ensure what you like to expect
        </h2>

        <p className="text-[#343D48] leading-[35px] text-[17px] mb-5">
          We offer a risk-free trial period of up to two weeks. You will only
          have to pay if you are happy with the developer and wish to continue.
          If you are unsatisfied, we’ll refund payment or fix issues on our dime
          period customers.
        </p>

        <p className="text-[#02073E60] text-base mb-6">
          If you are happy with the developer and wish to continue. If you are
          unsatisfied, we’ll refund payment or fix issues.
        </p>

        <ExploreMore label="Learn more" />
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img src={supportImg} alt="Support illustration" className="w-full" />
      </div>
    </div>
  );
};

export default Support;
