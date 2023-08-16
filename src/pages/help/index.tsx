import React from "react";
import Head from "next/head";

import RootLayout from "@/UI/RootLayout/RootLayout";

export default function Help({}) {
  return (
    <div>
      <Head>
        <title>Help</title>
      </Head>
      <RootLayout>
        <div className="bg-greyish w-[94.5rem] overflow-hidden flex flex-col py-[4rem] px-[7.75rem] box-border items-center justify-center text-[3.25rem] text-gray-700 lg:w-auto lg:h-auto lg:flex-col md:flex-col sm:flex-col">
          <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] z-[0] lg:w-auto lg:h-auto lg:flex-col md:flex-col sm:flex-col">
            <div className="relative tracking-[-0.01em] leading-[3.75rem] font-semibold">
              How can we help?
            </div>
            <div className="relative text-[1.13rem] tracking-[-0.1px] leading-[1.63rem] inline-block w-[65.51rem] lg:self-stretch lg:w-auto lg:flex-1 md:self-stretch md:w-auto sm:self-stretch sm:w-auto">
              In this step, well ask you which type of stays you have and if
              guests will book the entire place or just a room. Then let us know
              the location and how many guests can stay.
            </div>
          </div>
        </div>

        <div className="bg-system-background-light-primary w-full gap-8 py-[4rem] text-[1.38rem] items-center justify-center flex flex-col px-[7.75rem] lg:w-auto lg:h-auto md:flex-row sm:flex-col">
          <div className="flex flex-col w-full items-start justify-start gap-[1rem] lg:w-auto lg:h-auto lg:flex-col md:flex-col sm:flex-col">
            <div className="self-stretch border-card w-full   flex flex-col py-[2rem] px-[0.63rem] items-center justify-start border-[1px] border-solid border-neutral-700 lg:w-auto lg:h-auto lg:flex-row md:flex-row sm:flex-col">
              <div className="flex flex-row items-start justify-start gap-[1rem] lg:w-auto lg:h-auto md:flex-row sm:flex-row">
                <div className=" h-[5.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                  <img
                    className="relative w-[5rem] h-[3.75rem] overflow-hidden shrink-0"
                    alt=""
                    src="/svg/hotel01.svg"
                  />
                </div>
                <div className="flex flex-col py-[0rem] pr-[2rem] pl-[0rem] items-start justify-start gap-[0.5rem] lg:w-auto lg:h-auto md:flex-col sm:flex-col">
                  <b className="relative tracking-[-0.02em] leading-[1.88rem]">
                    Hotel Booking
                  </b>
                  <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[28rem] h-[3.13rem] shrink-0 sm:self-stretch sm:w-auto sm:flex-1">
                    Affordable price refers to a cost that is reasonably priced
                    or within ones budgetary lower price compared.
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch border-card w-full  flex flex-col py-[2rem] px-[0.63rem] items-center justify-start border-[1px] border-solid border-neutral-700 lg:w-auto lg:h-auto md:flex-col sm:flex-col">
              <div className=" flex flex-row items-start justify-start gap-[1rem] lg:w-auto lg:h-auto md:flex-row sm:flex-row">
                <div className=" h-[5.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                  <img
                    className="relative w-[3.75rem] h-[3.75rem] overflow-hidden "
                    alt=""
                    src="/svg/textfirstlineleft.svg"
                  />
                </div>
                <div className="flex flex-col py-[0rem] pr-[2rem] pl-[0rem] items-start justify-start gap-[0.5rem] lg:w-auto lg:h-auto md:flex-col sm:flex-col">
                  <b className="relative tracking-[-0.02em] leading-[1.88rem]">
                    Listing
                  </b>
                  <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[28rem] h-[3.13rem] shrink-0">
                    Affordable price refers to a cost that is reasonably priced
                    or within ones budgetary lower price compared.
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch border-card w-full  flex flex-col py-[2rem] px-[0.63rem] items-center justify-start border-[1px] border-solid border-neutral-700 lg:w-auto lg:h-auto md:flex-row sm:flex-col">
              <div className=" flex flex-row items-start justify-start gap-[1rem] lg:w-auto lg:h-auto md:flex-row sm:flex-row">
                <div className="h-[5.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                  <img
                    className="relative w-[5.3rem] h-[3.75rem] overflow-hidden shrink-0 ml-1"
                    alt=""
                    src="/svg/moneyexchange02.svg"
                  />
                </div>
                <div className="flex flex-col py-[0rem] pr-[2rem] pl-[0rem] items-start justify-start gap-[0.5rem] lg:w-auto lg:h-auto md:flex-col sm:flex-col">
                  <b className="relative tracking-[-0.02em] leading-[1.88rem]">
                    Refund
                  </b>
                  <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[28rem] h-[3.13rem] shrink-0 lg:self-stretch lg:w-auto lg:flex-1 md:self-stretch md:w-auto md:flex-1 sm:self-stretch sm:w-auto">
                    Affordable price refers to a cost that is reasonably priced
                    or within ones budgetary lower price compared.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-start justify-start gap-[1rem] lg:w-auto lg:h-auto lg:flex-col md:flex-col sm:flex-col">
            <div className="self-stretch border-card w-full  flex flex-col py-[2rem] px-[0.63rem] items-center justify-start border-[1px] border-solid border-neutral-700 lg:w-auto lg:h-auto lg:flex-row md:flex-row sm:flex-row">
              <div className=" flex flex-row items-start justify-start gap-[1rem]">
                <div className=" h-[5.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                  <img
                    className="relative w-[5rem] h-[3.75rem] overflow-hidden shrink-0"
                    alt=""
                    src="/svg/usersearch01.svg"
                  />
                </div>
                <div className="flex flex-col py-[0rem] pr-[2rem] pl-[0rem] items-start justify-start gap-[0.5rem] lg:w-auto lg:h-auto md:flex-col sm:flex-col">
                  <b className="relative tracking-[-0.02em] leading-[1.88rem]">
                    Looking for Partner
                  </b>
                  <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[28rem] h-[3.13rem] shrink-0 lg:self-stretch lg:w-auto lg:flex-1 md:self-stretch md:w-auto sm:self-stretch sm:w-auto">
                    Affordable price refers to a cost that is reasonably priced
                    or within ones budgetary lower price compared.
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch border-card w-full  flex flex-col py-[2rem] px-[0.63rem] items-center justify-start border-[1px] border-solid border-neutral-700 lg:w-auto lg:h-auto md:flex-col sm:flex-col">
              <div className=" flex flex-row items-center justify-start gap-[1rem] lg:w-auto lg:h-auto md:flex-row sm:flex-row">
                <div className=" h-[5.8rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                  <img
                    className="relative w-[7rem] h-[3.75rem] overflow-hidden shrink-0"
                    alt=""
                    src="/svg/cleaningbucket.svg"
                  />
                </div>
                <div className="flex flex-col py-[0rem] pr-[2rem] pl-[0rem] items-start justify-start gap-[0.5rem] lg:w-auto lg:h-auto md:flex-col sm:flex-col">
                  <b className="relative tracking-[-0.02em] leading-[1.88rem]">
                    Self Cleaning
                  </b>
                  <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[28rem] h-[3.13rem] shrink-0 lg:self-stretch lg:w-auto lg:flex-1 md:self-stretch md:w-auto md:flex-1 sm:flex-1">
                    Affordable price refers to a cost that is reasonably priced
                    or within ones budgetary lower price compared.
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch border-card w-full  flex flex-col py-[2rem] px-[0.63rem] items-center justify-start border-[1px] border-solid border-neutral-700 lg:w-auto lg:h-auto md:flex-col sm:flex-col">
              <div className=" flex flex-row items-center justify-start gap-[1rem] lg:w-auto lg:h-auto md:flex-row sm:flex-row">
                <div className="h-[5.5rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                  <img
                    className="relative w-[3.75rem] h-[3.75rem] overflow-hidden shrink-0"
                    alt=""
                    src="/svg/slideshare.svg"
                  />
                </div>
                <div className="flex flex-col py-[0rem] pr-[2rem] pl-[0rem] items-start justify-start gap-[0.5rem] lg:w-auto lg:h-auto md:flex-col sm:flex-col">
                  <b className="relative tracking-[-0.02em] leading-[1.88rem]">
                    Room Sharing
                  </b>
                  <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[28rem] h-[3.13rem] shrink-0">
                    Affordable price refers to a cost that is reasonably priced
                    or within ones budgetary lower price compared.
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

Help;
