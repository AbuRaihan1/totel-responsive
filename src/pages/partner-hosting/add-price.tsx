import RootLayout from "@/UI/RootLayout/RootLayout";
import BottomBar from "@/components/partnerhosting/BottomBar";
import UpperNavigation from "@/components/partnerhosting/UpperNavigation";
import Head from "next/head";
import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Slider, SliderChangeEvent } from "primereact/slider";

import { Calendar, CalendarChangeEvent } from "primereact/calendar";

type Props = {};

function AddPrice({}: Props) {
  const [active, setActive] = useState("daily");
  const [price, setPrice] = useState<number | null>(25);
  const [dates, setDates] = useState<string | Date | Date[] | null>(null);

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
                  Set your price limit
                </div>
                <div className="relative text-lg tracking-[-0.1px] leading-[26px] inline-block w-[780px] lg:flex-1 md:text-[19px]">
                  Short titles work best. Have fun with it – you can always
                  change it later.
                </div>
              </div>
              <div className="space-y-7 my-7 mb-16">
                <div className="rounded-3xl ring-1 ring-card flex items-center gap-3 my-5  bg-[#F8F9FB] w-[13.3rem]">
                  <div
                    className={` font-semibold cursor-pointer rounded-3xl py-2 px-3 ${
                      active === "hour"
                        ? "bg-purple text-white"
                        : "text-gray-50"
                    }`}
                    onClick={() => setActive("hour")}
                  >
                    Hour
                  </div>
                  <div
                    className={` font-semibold cursor-pointer rounded-3xl py-2 px-3 ${
                      active === "daily"
                        ? "bg-purple text-white"
                        : "text-gray-50"
                    }`}
                    onClick={() => setActive("daily")}
                  >
                    Daily
                  </div>
                  <div
                    className={` font-semibold cursor-pointer rounded-3xl py-2 px-3 ${
                      active === "month"
                        ? "bg-purple text-white"
                        : "text-gray-50"
                    }`}
                    onClick={() => setActive("month")}
                  >
                    Month
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <AiOutlinePlusCircle size={44} />
                  <div className="rounded-full cursor-pointer hover:bg-purple hover:text-white transition ring-card flex items-center gap-2 ring-1 px-5 py-2">
                    <p className="font-semibold">
                      USD ${price} / per{" "}
                      {active[0].toUpperCase() + active.slice(1)}
                    </p>
                  </div>
                  <AiOutlineMinusCircle size={44} className="font-normal" />
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-50 font-semibold">
                    Places starts at minimum of $25 per day
                  </p>
                </div>

                <div className="w-[30rem]">
                  <Slider
                    value={price as number}
                    min={25}
                    onChange={(e: SliderChangeEvent) =>
                      setPrice(e.value as number)
                    }
                    className="w-14rem"
                  />
                </div>
              </div>

              <div className="ring-1 ring-card w-full " />
            </div>

            <div className="mb-7">
              <div className="space-y-4">
                <div className="w-full  leading-[60px] font-semibold md:text-5xl md:flex-1 sm:text-lg   text-left">
                  Set your availability
                </div>
                <div className="relative text-lg tracking-[-0.1px] leading-[26px] inline-block w-[780px] lg:flex-1 md:text-[19px]">
                  Short titles work best. Have fun with it – you can always
                  change it later.
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-sm font-semibold text-gray-50">
                  Select multiple days to set your availability
                </p>
                <Calendar
                  value={dates as Date}
                  selectionMode="multiple"
                  minDate={new Date()}
                  onChange={(e: CalendarChangeEvent) =>
                    setDates(e!.value as Date)
                  }
                  inline
                  showWeek
                />
              </div>
            </div>
          </main>

          <BottomBar back="/partner-hosting/finish-up" next="/partner-hosting/publish"/>
        </div>
      </RootLayout>
    </div>
  );
}

export default AddPrice;
