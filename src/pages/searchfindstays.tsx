import React from "react";
import Image from "next/image";
import Find from "@/components/Find";
import Stays from "@/components/searchstays/stays";
import Head from "next/head";
import RootLayout from "@/UI/RootLayout/RootLayout";

const RoomStays = () => {
  return (
    <div className="z-10 w-full bg-white ">
      <Head>
       <title>Search stays</title>

      </Head>
      <RootLayout>
      <div className="py-4">
       
      </div>
      <div className="relative">
        <Image
          src="/Images/roomstays.png"
          alt="Background Image"
          className="w-full h-auto"
          width={20}
          height={10}
        />
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full">
          <div className="w-full mx-12 my-2 overflow-y-hidden text-center bg-white h-28 rounded-3xl">
            <Find/>
          </div>
        </div>
      </div>
      <Stays/>
      </RootLayout>
     
    </div>
  );
};

export default RoomStays;
