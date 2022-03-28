import React from "react";
import { Link } from "react-router-dom";

const navItems = ["marketplace", "renting", "breeding", "play-now", "connect"];

export default function Navbar() {
  return (
    <div className="grid grid-cols-6  p-5 h-24 min-h-full ">
      {/*       <div className="w-[fit-content] font-courgette text-3xl cursor-pointer hover:scale-125 transition duration-200">
        Deposit App
      </div> */}
      <div className=""></div>
      <div className="col-start-2 col-span-4">
        <div className="flex flex-row justify-center content-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              isActive={true}
              className="mr-5 hover:text-blue-200 transition duration-200"
              to={`/${item}`}
            >
              <p className="text-3xl uppercase">{item.replace("-", " ")} </p>{" "}
            </Link>
          ))}
        </div>
      </div>
      <div className=" flex justify-end">
        <div className="grid grid-cols-2">
          <div className="flex justify-end items-center mr-4">
            <img
              className="inline object-cover w-12 h-12  rounded-md"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
          </div>
          <div className="grid grid-rows-2">
            <div className="text-2xl font-normal  ">Lorenzo</div>
            <div className="grid grid-cols-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-yellow-600 h-2.5 rounded-full"
                  style={{ width: "50%" }}
                ></div>
                <span>Level 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
