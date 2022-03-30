import React, { useEffect, useState } from "react";
import { getGameList } from "../apis/gameList";
import BreedingSection from "../components/breeding/BreedingSection";
import PaginationSection from "../components/common/PaginationSection";

export default function Breeding() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getGameList();
        console.log("response", response.data);
        setGames(response.data);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {};
  }, []);
  return (
    <div className="px-7 -mt-10">
      <div className="corner-clipped-box px-[30px] py-[72px] ">
        <BreedingSection />
      </div>
    </div>
  );
}
