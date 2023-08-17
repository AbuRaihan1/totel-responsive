import React from "react";
import Image from "next/image";
import Find from "@/components/Find";
import Stays from "@/components/searchstays/stays";
import Head from "next/head";
import RootLayout from "@/UI/RootLayout/RootLayout";

const RoomStays = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Search stays</title>
      </Head>
      <RootLayout>
        <div className="relative py-5">
          <Find />
        </div>
        <Stays />
      </RootLayout>
    </div>
  );
};

export default RoomStays;
