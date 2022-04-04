import React, { useEffect, useState } from "react";
import { getDogs } from "../apis/dogs";
import PaginationSection from "../components/common/PaginationSection";

import RHeaderSection from "../components/renting/RHeaderSection";
import RItemCard from "../components/renting/RItemCard";

export default function Renting() {
  const [dogs, setDogs] = useState([]);
  const colors = [
    "#3FB8AF",
    "#7FC7AF",
    "#DAD8A7",
    "#FF9E9D",
    "#FF3D7F",
    "#99B898",
    "#FECEA8",
    "#FF847C",
    "#E84A5F",
    "#2A363B",
    "#FF4E50",
    "#FC913A",
    "#F9D423",
    "#EDE574",
    "#E1F5C4",
    "#00A8C6",
    "#40C0CB",
    "#F9F2E7",
    "#AEE239",
    "#8FBE00",
  ];
  useEffect(() => {
    (async () => {
      try {
        const response = await getDogs();
        // console.log("response", response.data);
        setDogs(response.data);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {};
  }, []);

  return (
    <div className=" ">
      <div className="mb-8">
        <RHeaderSection />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-20">
        {dogs.map((item, index) => {
          const bgColor = colors[index + 1];
          return <RItemCard key={index} item={item} bgColor={bgColor} />;
        })}
      </div>
      <div className="mt-24">
        <PaginationSection />
      </div>
    </div>
  );
}
