import React, { useEffect, useState } from "react";
import { getDogs } from "../apis/dogs";
import PaginationSection from "../components/common/PaginationSection";
import MPItemCard from "../components/marketplace/MPItemCard";
import MPHeaderSection from "../components/marketplace/MPHeaderSection";

export default function MarketPlace() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getDogs();
        console.log("response", response.data);
        setDogs(response.data);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {};
  }, []);

  return (
    <div className="p-10 ">
      <div className="mb-10">
        <MPHeaderSection />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-2 gap-y-14">
        {dogs.map((item, index) => (
          <MPItemCard key={index} item={item} key={index} />
        ))}
      </div>
      <div className="mt-20">
        <PaginationSection />
      </div>
    </div>
  );
}
