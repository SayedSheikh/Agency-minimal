import React from "react";
import List from "./List";
import "./Navbar.css";

const DetailedList = ({ label, allSubMenu = [] }) => {
  return (
    <li>
      <details>
        <summary>{label}</summary>
        <ul className="p-2">
          {allSubMenu.map((item, index) => (
            <List key={index} label={item}></List>
          ))}
        </ul>
      </details>
    </li>
  );
};

export default DetailedList;
