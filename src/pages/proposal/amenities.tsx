import RootLayout from "@/UI/RootLayout/RootLayout";
import Feature from "@/components/partnerhosting/Feature";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BiBox, BiRadio } from "react-icons/bi";
import { FaHotTub, FaParking, FaSwimmingPool, FaWifi } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";

type Props = {};

function Amenties({}: Props) {
  return (
    <div>
      <Head>
        <title>Proposal</title>
      </Head>

      <RootLayout>
        <div className="max-w-[83rem] py-10 mx-auto space-y-3">
          <div className="space-y-9">
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-base md:text-4xl font-semibold">
                  What are the amenities that room have?
                </p>
                <p className="text-sm md:text-sm">
                  In this step, we'll ask you which type of stays you have and
                  if guests will book the entire place or just a room.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5">
                  <Feature text="TV" Icon={BiBox} />
                  <Feature text="Free Parking on premises" Icon={FaParking} />
                  <Feature text="Wifi" Icon={FaWifi} />
                  <Feature text="Dedicated work space" Icon={BiBox} />
                </div>

                <div className="flex items-center gap-5">
                  <Feature text="Air conditioning" Icon={TbAirConditioning} />
                  <Feature text="Washing Machine" Icon={BiBox} />
                </div>
              </div>

              <div className="space-y-5">
                <p className="text-gray-50 text-md">Any standout amenities?</p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-5">
                    <Feature text="Exercise Equipment" Icon={BiBox} />

                    <Feature text="BBQ grill" Icon={GiBarbecue} />
                    <Feature text="Firekit" Icon={BiBox} />
                    <Feature text="Indoor fireplace" Icon={BiBox} />
                  </div>

                  <div className="flex items-center gap-5">
                    <Feature text="Radio" Icon={BiRadio} />
                    <Feature text="Pool" Icon={FaSwimmingPool} />
                    <Feature text="Hot tub" Icon={FaHotTub} />
                    <Feature text="Outdoor shower" Icon={BiBox} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full text-right space-x-3 mt-16">
              <Link href="/proposal/share-details">
                <button className="bg-black w-52 hover:bg-card hover:text-black text-white rounded-3xl px-4 py-2">
                  Back
                </button>
              </Link>

              <Link href="/proposal/upload-images">
                <button className="bg-purple w-52 hover:bg-light-purple text-white rounded-3xl px-4 py-2">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default Amenties;
