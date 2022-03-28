import React from "react";
import PaginationSection from "../components/common/PaginationSection";
import PNHeaderSection from "../components/playnow/RHeaderSection";

export default function PlayNow() {
  return (
    <div className="p-10 ">
      <div className="mb-10">
        <PNHeaderSection />
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {dogs.map((item, index) => (
          <RItemCard key={index} item={item} key={index} />
        ))}
      </div> */}
      <div className="mt-20">
        <PaginationSection />
      </div>
    </div>
  );
}
