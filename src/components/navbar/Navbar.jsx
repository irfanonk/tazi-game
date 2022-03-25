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
              isActive={true}
              className="mr-5 hover:bg-blue-200 transition duration-200"
              to="/marketplace"
            >
              <p className="text-3xl uppercase">{item.replace("-", " ")} </p>{" "}
            </Link>
          ))}
        </div>
      </div>
      <div className=" flex justify-end">
        <div className="">
          <div className="text-1l">Name</div>
        </div>
      </div>
    </div>
  );
}
