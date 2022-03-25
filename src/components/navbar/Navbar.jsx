import React from "react";
import { Link } from "react-router-dom";

const navItems = ["marketplace", "renting", "breeding", "play-now", "connect"];

export default function Navbar() {
  return (
    <div className="grid p-5">
      {/*       <div className="w-[fit-content] font-courgette text-3xl cursor-pointer hover:scale-125 transition duration-200">
        Deposit App
      </div> */}
      <div className="flex flex-row justify-center align-middle content-center">
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
  );
}
