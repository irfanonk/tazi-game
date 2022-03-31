import React from "react";

export default function BreedingSection() {
  return (
    <div className="side-shaped-box h-screen ">
      <div class="relative flex flex-col py-[18px] px-[31.3px] ">
        {/* col-1 */}
        <div class="flex flex-row justify-between">
          {/* row-1 */}
          <div className="text-blur-10 bg-breed-info-box-left bg-no-repeat bg-center bg-cover">
            <div className="pl-7 pt-7">
              <div className="text-md ">Male Pegas</div>
              <div className="text-m">Availanle : 0</div>
            </div>
          </div>
          {/* row-2 */}
          <div className="text-6xl text-blur-22">Select A Greyhound</div>
          {/* row-3 */}
          <div className="text-blur-10  bg-breed-info-box-right bg-no-repeat bg-center bg-cover">
            <div className="pr-7 pt-7">
              <div className="text-md ">Male Pegas</div>
              <div className="text-m">Availanle : 0</div>
            </div>
          </div>
        </div>
        {/* col-2 */}
        <div></div>
      </div>
    </div>
  );
}
