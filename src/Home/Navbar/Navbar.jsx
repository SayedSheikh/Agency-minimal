import React from "react";
import List from "./List";
import DetailedList from "./DetailedList";
import logo from "./../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <List label="Home"></List>

      <DetailedList
        label="Advertise"
        allSubMenu={["Social", "Youtube"]}></DetailedList>
      <DetailedList
        label="Supports"
        allSubMenu={["Academic", "Educational"]}></DetailedList>
      <List label="Contatc"></List>
      <List label="About us"></List>
    </>
  );
  const btn = (
    <>
      <a className="btn btn-outline border-[2px] btn-primary sm:py-[13px] sm:px-[25px] rounded-[5px] font-bold leading-[24px] -tracking-[.16px] ">
        Register Now
      </a>
    </>
  );
  return (
    <nav className="w-full font-dmSans bg-[#F6F8FB]">
      <div className="navbar max-w-[1420px] mx-auto w-11/12  pt-[20px]">
        <div className="navbar-start ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#02073E]">
              {links}
              <li className="mt-5 sm:hidden">{btn}</li>
            </ul>
          </div>
          <div className="btn btn-ghost text-xl pl-0 hover:bg-transparent hover:border-transparent hover:shadow-none font-pacifico font-normal text-[#02073E] flex gap-[14px]">
            <img
              className="w-[27px] h-[37px] object-contain"
              src={logo}
              alt=""
            />
            Builderz
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#02073E] space-x-3">
            {links}
          </ul>
        </div>
        <div className="navbar-end hidden sm:inline-flex">{btn}</div>
      </div>
    </nav>
  );
};

export default Navbar;
