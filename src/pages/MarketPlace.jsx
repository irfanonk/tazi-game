import React, { useEffect, useState } from "react";
import { getDogs } from "../apis/dogs";
import PaginationSection from "../components/common/PaginationSection";
import ItemCard from "../components/marketplace/ItemCard";
import MPHeaderSection from "../components/marketplace/MPHeaderSection";

export default function MarketPlace() {
  const items = [
    {
      id: 1,
      title: "Noteworthy technology acquisitions 2021",
      bgColor: "#00092E",
    },
    {
      id: 2,
      title: "Noteworthy technology acquisitions 2021",
      bgColor: "#C2B074",
    },
    {
      id: 3,
      title: "Noteworthy technology acquisitions 2021",
      bgColor: "#052E9C",
    },
    {
      id: 4,
      title: "Noteworthy technology acquisitions 2021",
      bgColor: "#916951",
    },
    {
      id: 5,
      title: "Noteworthy technology acquisitions 2021",
      bgColor: "#7A1467",
    },
    {
      id: 6,
      title: "Noteworthy technology acquisitions 2021",
      bgColor: "#6A8F3B",
    },
  ];
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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {dogs.map((item, index) => (
          <ItemCard key={index} item={item} key={index} />
        ))}
      </div>
      <div className="mt-20">
        <PaginationSection />
      </div>
    </div>
  );
}
