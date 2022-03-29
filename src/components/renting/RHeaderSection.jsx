import React from "react";

export default function RHeaderSection() {
  return (
    <div className="inpage-header-box text-center justify-center flex items-center h-[67px] min-h-full bg-[#051B5C]  ">
      <div className="flex flex-1 text-sm justify-start items-center ml-16 ">
        <div className="flex text-center items-center">
          <div className=" mr-1 ">All Bloodline</div>
          <img
            className="w-3 h-4 rotate-90 "
            src={require("../../assets/images/arrow.png")}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-2 text-md justify-center items-center gap-4">
        <div className="text-yellow  font-bold uppercase">all</div>
        <div className="  font-bold uppercase">Pay Rent Feed</div>
        <div className=" font-bold uppercase">Share Profit</div>
      </div>
      <div className="flex flex-1 text-sm justify-end mr-16 gap-3">
        <div className="flex text-center items-center">
          <div className=" mr-1 ">Gender</div>
          <img
            className="w-3 h-4 rotate-90 "
            src={require("../../assets/images/arrow.png")}
            alt=""
          />
        </div>
        <div className="flex text-center items-center">
          <div className=" mr-1 ">Breed Type</div>
          <img
            className="w-3 h-4 rotate-90 "
            src={require("../../assets/images/arrow.png")}
            alt=""
          />
        </div>
        <div className="flex text-center items-center">
          <div className=" mr-1 ">Sort By</div>
          <img
            className="w-3 h-4 rotate-90 "
            src={require("../../assets/images/arrow.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
