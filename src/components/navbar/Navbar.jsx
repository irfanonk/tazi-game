import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const navItems = ["marketplace", "renting", "breeding", "play-now", "connect"];

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="flex justify-center  pt-5 ">
      <div className="flex flex-1 justify-center content-center gap-16">
        {navItems.map((item, index) => (
          <Link
            key={index}
            isActive={path === `/${item}`}
            className={`${
              path === `/${item}` ? "text-yellow " : "text-white"
            } text-md uppercase hover:text-yellow transition duration-200`}
            to={`/${item}`}
          >
            <div className="text-md uppercase text-blur-6 ">
              {item.replace("-", " ")}
            </div>
          </Link>
        ))}
      </div>
      <div className=" flex  items-center  gap-2">
        <div className=" ">
          <img
            className="  w-12 h-12  rounded-md"
            src={require("../../assets/images/avatar-image.png")}
            alt="Profile image"
          />
        </div>
        <div className="flex-1 ">
          <div className="text-l font-semibold  ">Lorenzo</div>
          <div className="flex flex-1 gap-x-2 items-center ">
            <div className="w-[50%]  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-yellow h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
            <span className="text-xs font-semibold uppercase">Level 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
