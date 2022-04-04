import React from "react";

export default function MPHeaderSection() {
  return (
    <div className="inpage-header-box text-blur-6  text-center justify-center flex items-center h-[67px] min-h-full bg-[#051B5C]  ">
      <div className="flex flex-1 justify-start items-center "></div>
      <div className="flex flex-2   text-md uppercase justify-center items-center gap-4">
        <div className="text-yellow    ">all</div>
        <div className="     ">pagas</div>
        <div className="  ">item</div>
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
