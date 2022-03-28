import React from "react";

export default function MPItemCard({ item }) {
  const { id, title, ticket, likes } = item;
  return (
    <div className="bg-transparent">
      <div className="flex relative">
        <div className="flex justify-center items-center absolute  top-5 right-0 mr-4">
          <img
            className="w-[20px] h-[17px] rounded-full text-white mr-2"
            src={require("../../assets/images/heart.png")}
            alt=""
          />
          <div className="text-l"> {likes} </div>
        </div>
        <img
          className=" w-full h-full"
          src={require("../../assets/images/dog-" + id + ".png")}
          alt=""
        />
        <div className="flex justify-center items-center absolute  bottom-4 right-0 mr-4   ">
          <div className="w-[29px] h-[29px] rounded-full bg-[#33FFFF] z-[3] "></div>
          <div className="w-[29px] h-[29px] rounded-full bg-[#032F66] z-[2] -ml-4"></div>
          <div className="w-[29px] h-[29px] rounded-full bg-[#718BC8] z-[1] -ml-4"></div>
        </div>
      </div>
      <div className="card-border-outer h-28 h-max -mt-4 p-1  ">
        <div className="grid grid-cols-2">
          <div className="">
            <div className="text-xl text-bold text-yellow "> #32000 </div>
            <div className="text-sm "> Hoz Poccer Male </div>
            <div className="text-sm text-[#A7B0FF] "> 0X993434343…. </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex justify-center items-center  h-[48px] w-[100px]   bg-dog-card-footer-label bg-no-repeat bg-cover">
              <img
                className="w-6 h-6 mr-2"
                src={require("../../assets/images/dog-card-footer-label-icon.png")}
                alt=""
              />
              <div className="text-3xl font-bold">{ticket + 200} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
