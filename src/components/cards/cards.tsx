import React from "react";
// import Image from "next/image";
import HotelCard from "./HotelCard";
export default function Cards() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-3 mb-12">
        <HotelCard />
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
