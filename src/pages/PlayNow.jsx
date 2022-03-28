import React from "react";
import PaginationSection from "../components/common/PaginationSection";
import PNHeaderSection from "../components/playnow/RHeaderSection";

export default function PlayNow() {
  return (
    <div className="p-10 ">
      <div className="mb-10">
        <PNHeaderSection />
      </div>
      <div className="h-[100vh] table-box bg-[#051B5C] opacity-40 p-5">new</div>
      <div className="mt-20">
        <PaginationSection />
      </div>
    </div>
  );
}
