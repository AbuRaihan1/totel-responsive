import RootLayout from "@/UI/RootLayout/RootLayout";
import Feature from "@/components/partnerhosting/Feature";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsHouseCheckFill, BsHouseFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import {
  MdMeetingRoom,
  MdOutlineApartment,
  MdOutlineBedroomChild,
} from "react-icons/md";

function Pricing() {
  return (
    <div>
      <Head>
        <title>Proposal</title>
      </Head>

      <RootLayout>
        <div className="max-w-[83rem] py-10 mx-auto space-y-3">
          <div className="space-y-9">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-base md:text-4xl font-semibold">
                  Give your pricing
                </p>
                <p className="text-sm md:text-sm">
                  In this step, we'll ask you which type of stays you have and
                  if guests will book the entire place or just a room.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <AiOutlinePlusCircle size={34} className="text-gray-50" />
                <div className="rounded-full cursor-pointer hover:bg-purple hover:text-white transition ring-card flex items-center gap-2 ring-1 px-5 py-2">
                  <p className="font-semibold">USD $80.00</p>
                </div>
                <AiOutlineMinusCircle size={34} className="text-gray-50" />
              </div>

              <div className="space-y-2">
                <div
                  className="rounded-full cursor-pointer 
              bg-greyish hover:bg-purple w-52 hover:text-white transition ring-card flex items-center gap-2 ring-1 px-5 py-2"
                >
                  <p className="font-semibold text-center">USD $80.00</p>
                </div>

                <div className="font-semibold text-sm text-gray-50">
                  His Bid rate is $75 to $90
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-base md:text-4xl font-semibold">
                  Which of these best describe your booked room?
                </p>
                <p className="text-sm md:text-sm">
                  In this step, we'll ask you which type of stays you have and
                  if guests will book the entire place or just a room.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Feature text="Apartment" Icon={MdOutlineApartment} />
                <Feature text="Hotel" Icon={BsHouseCheckFill} />
                <Feature text="Flat" Icon={FaHotel} />
                <Feature text="House" Icon={BsHouseFill} />
                <Feature text="Single Room" Icon={MdOutlineBedroomChild} />
                <Feature text="Shared Room" Icon={MdMeetingRoom} />
              </div>
            </div>
            <div className="w-full text-right space-x-3 mt-16">
              <Link href="/proposal">
                <button className="bg-black w-52 hover:bg-card hover:text-black text-white rounded-3xl px-4 py-2">
                  Back
                </button>
              </Link>
              <Link href="/proposal/location">
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

export default Pricing;
