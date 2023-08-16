import RootLayout from "@/UI/RootLayout/RootLayout";
import BottomBar from "@/components/partnerhosting/BottomBar";
import Feature from "@/components/partnerhosting/Feature";
import UpperNavigation from "@/components/partnerhosting/UpperNavigation";
import Head from "next/head";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BiFemale, BiMale, BiMaleFemale } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { GiCigarette } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdOutlineBedroomChild,
  MdPets,
  MdSingleBed,
  MdSmokeFree,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

type Props = {};

function RoomType({}: Props) {
  return (
    <div>
      <Head>
        <title>Partner hosting</title>
      </Head>
      <RootLayout>
        <div className=" bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-mini text-gray-700 font-text-button-semibold-large md:items-center max-w-[83rem] mx-auto py-5">
          <main className="self-stretch bg-white overflow-hidden flex flex-col py-16 px-[124px]  gap-[32px] md:py-10 md:px-[15px] md:box-border sm:py-10 sm:px-2.5 sm:box-border">
            <UpperNavigation />
            <div className="mb-7">
              <div className=" flex flex-col justify-start gap-[16px]  text-4xl">
                <div className="w-full  leading-[60px] font-semibold md:text-5xl md:flex-1 sm:text-lg mt-6   text-left">
                  What type of place are you looking for?
                </div>
                <div className="relative text-lg tracking-[-0.1px] leading-[26px] inline-block w-[780px] lg:flex-1 md:text-[19px]">
                  In this step, we will ask you which type of stays you have and
                  if guests will book the entire place or just a room. Then let
                  us know the location and how many guests can stay.
                </div>
              </div>

              <div className="flex gap-4 items-center my-5 mb-10">
                <Feature text="Entire house" Icon={FiHome} />
                <Feature text="Shared Room" Icon={MdOutlineBedroomChild} />
                <Feature text="Single Room" Icon={MdSingleBed} />
              </div>
              <div className="ring-1 ring-card w-full " />
            </div>

            <div className="mb-7">
              <div className=" flex flex-col justify-start gap-[16px]  text-4xl">
                <div className="w-full  leading-[60px] font-semibold md:text-5xl md:flex-1 sm:text-lg   text-left">
                  Where are you looking for partner?
                </div>
                <div className="relative text-lg tracking-[-0.1px] leading-[26px] inline-block w-[780px] lg:flex-1 md:text-[19px]">
                In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-4 ">
                <p className="text-gray-50 text-sm font-semibold pt-5">
                  Add Address
                </p>
                <div className="flex rounded-3xl gap-3 items-center px-2 ring-1 py-2 ring-card w-80">
                  <IoLocationOutline />
                  <input
                    type="text"
                    className="w-full flex-1 outline-none placeholder:font-semibold "
                    placeholder="Enter your address "
                  />
                </div>
              </div>
              <div className="flex gap-4 items-center mb-10">
                <Feature text="Birstol" Icon={FiHome} />
                <Feature text="Birmingham" Icon={MdOutlineBedroomChild} />
                <Feature text="Southampton" Icon={MdSingleBed} />
                <Feature text="Northampton" Icon={MdSingleBed} />
              </div>
              <div className="ring-1 ring-card w-full " />
            </div>
            <div className="mb-7">
              <div className=" flex flex-col justify-start gap-[16px]  text-4xl">
                <div className="w-full  leading-[60px] font-semibold md:text-5xl md:flex-1 sm:text-lg   text-left">
                  Who can stay with you?
                </div>
                <div className="relative text-lg tracking-[-0.1px] leading-[26px] inline-block w-[780px] lg:flex-1 md:text-[19px]">
                Your address is only shared with guests after they’ve made a reservation.
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-4 ">
                <p className="text-gray-50 text-sm font-semibold py-5">
                  Shareable details
                </p>
                <div className="flex items-center mb-5 w-60">
                  <p className="font-semibold flex-1 text-gray-50 text-sm">
                    Guests
                  </p>

                  <div className="flex gap-4 items-center">
                    <AiOutlinePlusCircle size={34} className="text-gray-50" />
                    <p className="text-lg font-semibold">
                     02
                    </p>
                    <AiOutlineMinusCircle size={34} className="text-gray-50" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-5">
                  <p className="font-semibold flex-1 text-gray-50 text-sm">
                    Gender
                  </p>

                  <div className="flex gap-4 items-center">
                    <Feature text="Male" Icon={BiMale} />
                    <Feature text="Female" Icon={BiFemale} />
                    <Feature text="Both can stay" Icon={BiMaleFemale} />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-5">
                  <p className="font-semibold flex-1 text-gray-50 text-sm">
                    Pets
                  </p>

                  <div className="flex gap-4 items-center">
                    <Feature text="Pets allowed" Icon={MdPets} />
                    <Feature text="Pets not allowed" Icon={RxCross2} />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-5">
                  <p className="font-semibold flex-1 text-gray-50 text-sm">
                    Smoking habit
                  </p>

                  <div className="flex gap-4 items-center">
                    <Feature text="Smoker" Icon={GiCigarette} />
                    <Feature text="Non smoker" Icon={MdSmokeFree} />
                  </div>
                </div>
              </div>

            
            </div>

            <BottomBar back="/partner-hosting" next="/partner-hosting/standout"/>
          </main>
        </div>
      </RootLayout>
    </div>
  );
}

export default RoomType;
