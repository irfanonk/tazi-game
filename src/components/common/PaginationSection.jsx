import React from "react";

export default function PaginationSection() {
  return (
    <div className="pagination-box text-center justify-center flex items-center h-[67px] min-h-full bg-[#051B5C]  ">
      <div class="flex flex-1 text-s justify-start items-center ml-12">
        <img
          className="w-3 h-4 rotate-180 mr-1 "
          src={require("../../assets/images/arrow.png")}
          alt=""
        />
        <div className=" mr-2">Back Page</div>
        <div className=" mr-1">Next Page</div>
        <img
          className="w-3 h-4 "
          src={require("../../assets/images/arrow.png")}
          alt=""
        />
      </div>
      <div class="flex flex-1 text-sm justify-center  items-center gap-x-4  ">
        <img
          className="w-6 h-8 rotate-180"
          src={require("../../assets/images/arrow.png")}
          alt=""
        />
        {Array.from(Array(15).keys()).map((item) => (
          <div className="w-[29px] h-[29px] rounded-full border-2 border-[#2099AB] hover:bg-yellow text-white transition duration-200 ">
            {item + 1}{" "}
          </div>
        ))}
        <img
          className="w-6 h-8"
          src={require("../../assets/images/arrow.png")}
          alt=""
        />
      </div>
      <div class="flex flex-1 items-center  justify-end mr-14 ">
        <div className="text-s mr-1.5">Show On Page</div>
        <div className="text-sm mr-1.5">50</div>
        <img
          className="w-3 h-4 rotate-90 "
          src={require("../../assets/images/arrow.png")}
          alt=""
        />
      </div>
    </div>
  );
}
