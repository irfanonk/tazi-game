import React, { useEffect, useState } from "react";
import { getGameList } from "../apis/gameList";
import PaginationSection from "../components/common/PaginationSection";
import PlayListTable from "../components/playnow/PlayListTable";
import PNHeaderSection from "../components/playnow/RHeaderSection";

export default function PlayNow() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getGameList();
        setGames(response.data);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {};
  }, []);
  return (
    <div className="p-10 ">
      <div className="mb-10">
        <PNHeaderSection />
      </div>
      <div className="corner-clipped-box px-8 py-16">
        <PlayListTable games={games} />
      </div>
      <div className="mt-20">
        <PaginationSection />
      </div>
    </div>
  );
}
