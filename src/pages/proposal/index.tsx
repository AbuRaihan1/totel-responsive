import RootLayout from "@/UI/RootLayout/RootLayout";
import Head from "next/head";
import Link from "next/link";
import { Calendar } from "primereact/calendar";
import React from "react";

type Props = {};

function Availabilty({}: Props) {
  return (
    <div>
      <Head>
        <title>Proposal</title>
      </Head>

      <RootLayout>
        <div className="max-w-[83rem] py-10 mx-auto space-y-3">
          <div className="space-y-9">
            <div className="space-y-2">
              <p className="text-base md:text-4xl font-semibold">
                Give your availabilty
              </p>
              <p className="text-sm md:text-sm">
                In this step, we'll ask you which type of stays you have and if
                guests will book the entire place or just a room.
              </p>
            </div>
            <div className="flex items-start gap-14 w-full">
              <div className="space-y-4">
                <p className="text-base md:text-4xl font-semibold">Day</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col gap-3 justify-start">
                      <p className="text-sm md:text-sm text-gray-50">From</p>
                      <input
                        type="date"
                        className="border border-gray-50 rounded-md p-2 w-[200px]"
                      />
                    </div>
                    <div className="flex flex-col gap-3 justify-start">
                      <p className="text-sm md:text-sm text-gray-50">To</p>
                      <input
                        type="date"
                        className="border border-gray-50 rounded-md p-2 w-[200px]"
                      />
                    </div>
                  </div>
                  <div className="w-92">
                    <Calendar inline showWeek />
                  </div>
                </div>
              </div>
              <div className="ring-1  h-[36rem]   ring-card" />

              <div className="space-y-4 mt-3">
                <p className="text-base md:text-4xl font-semibold">Time</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col gap-3 justify-start">
                      <p className="text-sm md:text-sm text-gray-50">
                        Check-in
                      </p>
                      <input
                        type="time"
                        className="border border-gray-50 rounded-md p-2 w-[200px]"
                      />
                    </div>
                    <div className="flex flex-col gap-3 justify-start">
                      <p className="text-sm md:text-sm text-gray-50">
                        Check-out
                      </p>
                      <input
                        type="time"
                        className="border border-gray-50 rounded-md p-2 w-[200px]"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-4 gap-7">
                      {Array.from(Array(24)).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-full bg-greyish cursor-pointer hover:bg-purple hover:text-white transition ring-card flex items-center gap-2 ring-1 px-3 py-2"
                        >
                          <p className="">12:00 AM</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-right space-x-3 mt-16">
              <Link href="/">
                <button className="bg-black w-52 hover:bg-card hover:text-black text-white rounded-3xl px-4 py-2">
                  Back
                </button>
              </Link>

              <Link href="/proposal/pricing">
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

export default Availabilty;
