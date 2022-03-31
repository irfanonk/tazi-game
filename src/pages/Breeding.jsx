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
    <div className="px-7 xl:-mt-72 lg:-mt-48 md:-mt-36 ">
      <div className="corner-clipped-box h-[85vh] px-[30px] py-[72px] ">
        <BreedingSection />
      </div>
    </div>
  );
}
