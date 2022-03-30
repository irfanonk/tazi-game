import React from "react";

export default function MPItemCard({ item }) {
  const { id, title, ticket, likes } = item;
  return (
    <div className="bg-transparent">
      <div className="flex relative">
        <div className="flex justify-center items-center absolute  top-5 right-0 mr-4 gap-x-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.714"
            height="18.404"
            viewBox="0 0 20.714 18.404"
          >
            <g
              id="Group_2744"
              data-name="Group 2744"
              transform="translate(0.5 0.5)"
            >
              <path
                id="Path_3877"
                data-name="Path 3877"
                d="M14.478,30a4.667,4.667,0,0,0-2.915,1.008,6.64,6.64,0,0,0-1.705,2.051,6.64,6.64,0,0,0-1.705-2.051A4.667,4.667,0,0,0,5.237,30C2.251,30,0,32.442,0,35.68c0,3.5,2.809,5.892,7.06,9.515.722.615,1.54,1.313,2.391,2.057a.616.616,0,0,0,.811,0c.851-.744,1.669-1.441,2.392-2.057,4.251-3.623,7.06-6.016,7.06-9.515C19.714,32.442,17.463,30,14.478,30Z"
                transform="translate(0 -30)"
                fill="none"
                stroke="#fff"
                stroke-width="1"
              />
            </g>
          </svg>

          <div className="text-md"> {likes} </div>
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
        <div className="flex">
          <div className="">
            <div className="text-m font-bold text-yellow ">
              #32000 Leningagu
            </div>
            <div className="text-s "> Hoz Poccer Male </div>
            <div className="text-s text-[#A7B0FF] "> 0X993434343…. </div>
          </div>
          <div className="flex  ml-6 justify-end items-center">
            <div className="flex justify-center items-center  h-[48px] w-[100px]   bg-dog-card-footer-label bg-no-repeat bg-cover">
              <img
                className="w-6 h-6 mr-2"
                src={require("../../assets/images/dog-card-footer-label-icon.png")}
                alt=""
              />
              <div className="text-m font-bold">{ticket + 200} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
