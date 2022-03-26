import React from "react";
import ItemCard from "../marketplace/ItemCard";

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

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => (
        <ItemCard item={item} key={index} />
      ))}
    </div>
  );
}
