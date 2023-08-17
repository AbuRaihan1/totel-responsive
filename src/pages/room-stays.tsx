import React from "react";
import Image from "next/image";
import Find from "@/components/Find";
import Categories from "@/components/Categories";
import RootLayout from "@/UI/RootLayout/RootLayout";

const RoomStays = () => {
  return (
    <div className="bg-white ">
      <RootLayout>
        <div className="relative py-5">
          <Find />
        </div>
        <Categories />
      </RootLayout>
    </div>
  );
};

export default RoomStays;
