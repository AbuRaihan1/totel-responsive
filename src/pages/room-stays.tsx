import React from "react";
import Image from "next/image";
import Find from "@/components/Find";
import Categories from "@/components/Categories";
import RootLayout from "@/UI/RootLayout/RootLayout";

const RoomStays = () => {
  return (
    <div className="w-full bg-white ">
      <RootLayout>
        <div className="relative py-5">
          <Image
            src="/Images/roomstays.png"
            alt="Background Image"
            className="w-full h-auto"
            width={20}
            height={40}
          />
          <div className="  absolute top-0 left-0 flex items-center justify-between w-full h-full">
            <div className="w-full mx-12 my-2 overflow-y-hidden text-center bg-white h-28 rounded-3xl">
              {/* <Find /> */}
            </div>
          </div>
        </div>
        <Categories />
      </RootLayout>
    </div>
  );
};

export default RoomStays;
