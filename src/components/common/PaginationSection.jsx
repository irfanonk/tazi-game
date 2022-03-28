import React from "react";

export default function PaginationSection() {
  return (
    <div className="flex  items-center h-[67px] min-h-full bg-[#051B5C] ">
      <div class="flex-1  ">01</div>
      <div class="flex flex-2 justify-center items-center gap-x-4  ">
        {Array.from(Array(15).keys()).map((item) => (
          <div className="w-[29px] h-[29px] rounded-full border-2 border-[#2099AB] ">
            {item + 1}{" "}
          </div>
        ))}
      </div>
      <div class="flex-1  ">03</div>
    </div>
  );
}
