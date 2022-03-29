import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const navItems = ["marketplace", "renting", "breeding", "play-now", "connect"];

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="">
      <div className="grid grid-cols-6 pt-5 ">
        <div className=""></div>
        <div className="col-start-2 col-span-4">
          <div className="flex flex-row justify-center content-center gap-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                isActive={path === `/${item}`}
                className={`${
                  path === `/${item}` ? "text-yellow " : "text-white"
                } text-md font-semibold uppercase hover:text-yellow transition duration-200`}
                to={`/${item}`}
              >
                <div className="text-md uppercase text-blur ">
                  {item.replace("-", " ")}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className=" flex justify-end gap-2">
          <div className="flex justify-end items-center ">
            <img
              className="inline object-cover w-12 h-12  rounded-md"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
      <div class="flex -mt-[45px] -mb-[5px] justify-center">
        <div class="flex w-1/3 opacity-40   justify-center bg-bgblue bg-cover bg-no-repeat bg-center">
          <img
            className=" drop-shadow-2xl -z-1"
            src={require("../../assets/images/extra-bg-layer.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
