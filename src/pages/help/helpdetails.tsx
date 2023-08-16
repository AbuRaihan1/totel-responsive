import React from "react";
import Head from "next/head";
import { Accordion, AccordionTab } from "primereact/accordion";
import RootLayout from "@/UI/RootLayout/RootLayout";
import { helpDetails } from "@/utils/help-details";

function HelpDetails() {
  return (
    <div>
      <Head>
        <title>Help Details - Hotel Booking</title>
      </Head>
      <RootLayout>
        <div className="bg-greyish w-[94.5rem] overflow-hidden flex flex-col py-[4rem] px-[7.75rem] box-border items-center justify-center text-[3.25rem] lg: lg:h-auto md:flex-col sm:flex-col">
          <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] z-[0] lg: lg:h-auto md:flex-col sm:flex-col">
            <div className="relative tracking-[-0.01em] leading-[3.75rem] font-semibold">
              Hotel Booking
            </div>
            <div className="relative text-[1.13rem] tracking-[-0.1px] leading-[1.63rem] inline-block w-[65.51rem]">
              In this step, we will ask you which type of stays you have and if
              guests will book the entire place or just a room. Then let us know
              the location and how many guests can stay.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 px-[7.5rem] py-10">
          <div className="flex flex-col">
            <Accordion className="space-y-4">
              {helpDetails.map(
                (helpDetail, i) =>
                  i & 1 && (
                    <AccordionTab
                      key={helpDetail.heading}
                      header={helpDetail.heading}
                    >
                      <p className="m-0">{helpDetail.content}</p>
                    </AccordionTab>
                  )
              )}
            </Accordion>
          </div>

          <div className="flex flex-col gap-5">
            <Accordion className="space-y-4">
              {helpDetails.map(
                (helpDetail, i) =>
                  !(i & 1) && (
                    <AccordionTab
                      key={helpDetail.heading}
                      header={helpDetail.heading}
                    >
                      <p className="m-0">{helpDetail.content}</p>
                    </AccordionTab>
                  )
              )}
            </Accordion>
          </div>
        </div>

        <div className="bg-greyish flex flex-col py-[4rem] px-[0.63rem] box-border items-center justify-start text-[1.5rem] text-label-color-light-primary lg: lg:h-auto md:flex-col sm:flex-col">
          <div className="flex flex-row items-start justify-start gap-[2rem] lg: lg:h-auto md:flex-row sm:flex-col">
            <div className="bg-white w-[39rem] shadow-md flex flex-col p-[2rem] box-border items-center justify-start lg: lg:h-auto md:flex-col sm:flex-col">
              <div className="flex flex-row items-center justify-start gap-[2rem] lg: lg:h-auto">
                <div className="flex flex-col items-start justify-start gap-[1rem]">
                  <b className="relative tracking-[-0.01em] leading-[1.88rem]">
                    Ask in the forums
                  </b>
                  <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[28rem] h-[3.13rem] shrink-0">
                    Affordable price refers to a cost that is reasonably priced
                    or within ones budgetary lower price compared.
                  </div>
                </div>
                <div className="rounded-3xl  bg-purple  overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-[0.94rem] text-white">
                  <div className="relative leading-[1.38rem] font-semibold">
                    Ask
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-[39rem] shadow-md flex flex-col p-[2rem] box-border items-center justify-start lg: lg:h-auto md:flex-col sm:flex-col">
              <div className="flex flex-row items-center justify-start gap-[2rem] lg: lg:h-auto">
                <div className="flex flex-col items-start justify-start gap-[1rem]">
                  <b className="relative tracking-[-0.01em] leading-[1.88rem]">
                    Contact Us
                  </b>
                  <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[28rem] h-[3.13rem] shrink-0">
                    Affordable price refers to a cost that is reasonably priced
                    or within ones budgetary lower price compared.
                  </div>
                </div>
                <div className="rounded-3xl  bg-purple  overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-[0.94rem] text-white">
                  <div className="relative leading-[1.38rem] font-semibold">
                    Log In
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default HelpDetails;
