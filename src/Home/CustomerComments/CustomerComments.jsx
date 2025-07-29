import React from "react";
import CustomerCard from "./CustomerCard";
import img1 from "./../../assets/Customers/customer-3.png";
import img2 from "./../../assets/Customers/customer-2.png";
import img3 from "./../../assets/Customers/customer-1.png";
const teamMembers = [
  {
    name: "Pierre Hackett",
    role: "VP of Engineering",
    image: img1,
  },
  {
    name: "Natalia Sanz",
    role: "Head of Technology",
    image: img2,
  },
  {
    name: "Ece Akman",
    role: "Senior Marketer",
    image: img3,
  },
];

const CustomerComments = () => {
  return (
    <div className="max-w-[850px] mx-auto w-11/12 text-center mb-[147px]">
      <h3 className="font-bold text-[18px] leading-[40px] font-dmSans text-primary">
        Customer Comments
      </h3>
      <h2 className="font-bold text-[30px] leading-[55px] font-dmSans text-[#0F2137] mb-[50px]">
        Why customers love us
      </h2>
      <p className="max-w-[822px] font-playFair font-normal text-[36px] leading-[65px] mb-[60px] text-[#0F2137] ">
        They are doing amazing job with hundred percent customer satisfaction,
        Love their work and would like to work with them again
      </p>
      <div className="flex flex-wrap gap-[30px] justify-between ">
        {teamMembers.map((item, index) => (
          <CustomerCard key={index} item={item} indx={index}></CustomerCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerComments;
