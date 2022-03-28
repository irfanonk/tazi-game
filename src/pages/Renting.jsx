import React, { useEffect, useState } from "react";
import { getDogs } from "../apis/dogs";
import PaginationSection from "../components/common/PaginationSection";

import RHeaderSection from "../components/renting/RHeaderSection";
import RItemCard from "../components/renting/RItemCard";

export default function Renting() {
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
        <RHeaderSection />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {dogs.map((item, index) => (
          <RItemCard key={index} item={item} key={index} />
        ))}
      </div>
      <div className="mt-20">
        <PaginationSection />
      </div>
    </div>
  );
}
