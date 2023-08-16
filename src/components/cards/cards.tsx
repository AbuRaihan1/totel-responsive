import React from "react";
// import Image from "next/image";
import HotelCard from "./HotelCard";
export default function Cards () {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 m-6 md:grid-cols-2 lg:grid-cols-4 px-[6.5rem]">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </div>
  );
}
