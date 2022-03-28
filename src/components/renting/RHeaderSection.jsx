import React from "react";

export default function RHeaderSection() {
  return (
    <div className="inpage-header-box text-center justify-center flex items-center h-[67px] min-h-full bg-[#051B5C]  ">
      <div className="flex flex-1 justify-start items-center ml-12 ">
        <div className="flex text-center items-center">
          <div className="text-xl mr-1 ">All Bloodline</div>
          <img
            className="w-3 h-4 rotate-90 "
            src={require("../../assets/images/arrow.png")}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-2 justify-center items-center gap-4">
        <div className="text-yellow text-2xl font-bold uppercase">all</div>
        <div className=" text-2xl font-bold uppercase">Pay Rent Feed</div>
        <div className="text-2xl font-bold uppercase">Share Profit</div>
      </div>
      <div className="flex flex-1 justify-end mr-12 gap-3">
        <div className="flex text-center items-center">
          <div className="text-xl mr-1 ">Gender</div>
          <img
            className="w-3 h-4 rotate-90 "
            src={require("../../assets/images/arrow.png")}
            alt=""
          />
        </div>
        <div className="flex text-center items-center">
          <div className="text-xl mr-1 ">Breed Type</div>
          <img
            className="w-3 h-4 rotate-90 "
            src={require("../../assets/images/arrow.png")}
            alt=""
          />
        </div>
        <div className="flex text-center items-center">
          <div className="text-xl mr-1 ">Sort By</div>
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
