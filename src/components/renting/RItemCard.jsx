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
        <div className="flex">
          <div className="">
            <div className="text-m text-bold text-yellow ">
              #32000 Leningagu
            </div>
            <div className="text-s "> Hoz Poccer Male </div>
            <div className="text-s text-[#A7B0FF] "> 0X993434343…. </div>
          </div>
          <div className="flex flex-col gap-y-2.5  ml-6">
            <div className="flex justify-between items-center">
              <svg
                id="electricity"
                xmlns="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/1999/xlink"
                width="19.92"
                height="23.719"
                viewBox="0 0 19.92 23.719"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.841"
                    y1="0.5"
                    x2="-0.128"
                    y2="0.835"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#2feef6" />
                    <stop offset="1" stop-color="#2feef6" stop-opacity="0" />
                  </linearGradient>
                </defs>
                <g
                  id="Group_398"
                  data-name="Group 398"
                  transform="translate(0 2.163)"
                >
                  <g id="Group_397" data-name="Group 397">
                    <path
                      id="Path_2168"
                      data-name="Path 2168"
                      d="M42.392,56.389a8.573,8.573,0,0,1,5.294-7.924h0l.987-1.772a9.963,9.963,0,0,0-.6,19.231l.1-1.426A8.575,8.575,0,0,1,42.392,56.389Z"
                      transform="translate(-41.002 -46.693)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </g>
                <g
                  id="Group_400"
                  data-name="Group 400"
                  transform="translate(12.249 2.324)"
                >
                  <g id="Group_399" data-name="Group 399">
                    <path
                      id="Path_2169"
                      data-name="Path 2169"
                      d="M306.005,50.173l-.1,1.426a8.575,8.575,0,0,1,.5,16.033h0l-.987,1.772a9.963,9.963,0,0,0,.6-19.231Z"
                      transform="translate(-305.409 -50.173)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </g>
                <g
                  id="Group_402"
                  data-name="Group 402"
                  transform="translate(3.243 0)"
                >
                  <g
                    id="Group_401"
                    data-name="Group 401"
                    transform="translate(0)"
                  >
                    <path
                      id="Path_2170"
                      data-name="Path 2170"
                      d="M124.34,10.214a.7.7,0,0,0-.6-.343h-5.085l.67-9.126a.695.695,0,0,0-1.3-.389L111.09,12.813a.695.695,0,0,0,.607,1.033h5.085l-.67,9.127a.695.695,0,0,0,1.3.389L124.348,10.9A.7.7,0,0,0,124.34,10.214Z"
                      transform="translate(-111.002 0.001)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </g>
              </svg>

              <div className="flex text-md ">
                <div className=" font-bold">24 </div>
                <div className=" ">/ </div>

                <div className=" font-bold text-yellow">25 </div>
              </div>
            </div>
            <div className="flex   items-center ">
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
