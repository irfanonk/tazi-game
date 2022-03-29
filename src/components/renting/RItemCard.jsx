import React from "react";

export default function RItemCard({ item }) {
  const { id, title, ticket, likes } = item;
  return (
    <div className="bg-transparent">
      <div className="flex relative">
        <img
          className=" w-full h-full"
          src={require("../../assets/images/dog-" + id + ".png")}
          alt=""
        />
        <div className="flex justify-end items-center absolute  bottom-4 right-0 mr-4">
          <div className="flex justify-center items-center h-[48px] w-[160px] bg-dog-card-label bg-no-repeat bg-cover bg-center ">
            <div className="text-m font-bold uppercase"> 14% For You </div>
          </div>
        </div>
      </div>
      <div className="card-border-outer h-28 h-max -mt-4 p-1  ">
        <div className="grid grid-cols-2">
          <div className="">
            <div className="text-m text-bold text-yellow "> #32000 </div>
            <div className="text-s "> Hoz Poccer Male </div>
            <div className="text-s text-[#A7B0FF] "> 0X993434343…. </div>
          </div>
          <div className="my-1">
            <div className="flex justify-around items-center my-1 ">
              <img
                className="w-6 h-6 mr-2"
                src={require("../../assets/images/electricity.png")}
                alt=""
              />
              <div className="flex text-md ">
                <div className=" font-bold">24 </div>
                <div className=" ">/ </div>

                <div className=" font-bold text-yellow">25 </div>
              </div>
            </div>
            <div className="flex justify-center  items-center ">
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  className="w-4 h-5 -mr-1"
                  src={require("../../assets/images/colored-power-arrow.png")}
                  alt=""
                />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  className="w-4 h-5 -mr-1"
                  src={require("../../assets/images/colorless-power-arrow.png")}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
