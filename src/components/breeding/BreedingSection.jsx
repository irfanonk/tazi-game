import React from "react";

export default function BreedingSection() {
  const filterItems = ["Breed Type", "Blood Line", "Breed Count"];
  return (
    <div className="side-shaped-box h-full ">
      <div>
        <div class="relative flex flex-col py-[7px] px-[31.3px]  ">
          {/* col-1 */}
          <div class="flex flex-row justify-between">
            {/* row-1 */}
            <div className="text-blur-10 bg-breed-info-box-left bg-no-repeat bg-center bg-cover">
              <div className="pr-[109px] pl-[30px] pt-[27px] pb-[33px] ">
                <div className="text-md ">Male Pegas</div>
                <div className="text-2sm">Availanle : 0</div>
              </div>
            </div>
            {/* row-2 */}
            <div className="text-6xl text-blur-22">Select A Greyhound</div>
            {/* row-3 */}
            <div className="text-blur-10  bg-breed-info-box-right bg-no-repeat bg-center bg-cover">
              <div className="pr-[16.5px] pt-7 pl-[122px] pt-[27px] pb-[33px] ">
                <div className="text-md ">Male Pegas</div>
                <div className="text-2sm">Availanle : 0</div>
              </div>
            </div>
          </div>
          {/* col-2 */}
          <div className="flex flex-row px-[30px] justify-between text-[#A7B0FF] gap-x-2  ">
            <div className="text-blur-6 text-s  ">
              {filterItems.map((item, index) => (
                <div className="flex  items-center gap-x-4">
                  <div>{item} </div>
                  <img
                    className="w-3 h-4 rotate-90 "
                    src={require("../../assets/images/arrow.png")}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="text-blur-6 text-s ">
              {filterItems.map((item, index) => (
                <div className="flex items-center gap-x-4">
                  <img
                    className="w-3 h-4 rotate-90 "
                    src={require("../../assets/images/arrow.png")}
                    alt=""
                  />
                  <div>{item} </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center absolute inset-x-0 -bottom-10  ">
          <div className="flex justify-center items-center px-[103px] py-[15px] bg-dog-card-label bg-no-repeat bg-contain bg-center ">
            <div className="text-xl font-bold uppercase"> Breed </div>
          </div>
        </div>
      </div>
    </div>
  );
}
