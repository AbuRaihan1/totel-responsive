import Head from "next/head";
import Image from "next/image";
import React from "react";
import RootLayout from "@/UI/RootLayout/RootLayout";

function About({}) {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <RootLayout>
        <div className="border bg-greyish mx-4 py-10 text-center">
          <h2 className="text-[3.25rem] font-semibold">{`We are best for tours & travel`}</h2>
          <p className=" text-[1.13rem] tracking-[-0.1px]  md:text-center text-justify">
            In this step, we will ask you which type of stays you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </div>

        {/* <div className="bg-system-background-light-primary w-[94.5rem] h-[34.63rem] flex flex-col py-[4rem] box-border items-center justify-center gap-[3.13rem] text-purple-600 lg:w-auto lg:h-auto md:flex-col sm:flex-col">
          <div className="w-[80rem] flex flex-row items-center justify-start lg:w-auto lg:h-auto lg:flex-col md:flex-col sm:flex-col">
            <div className="w-[80rem] flex flex-col items-start justify-center gap-[0.5rem]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] text-[2rem] text-gray-700">
                <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] ">
                  Why Choose Us?
                </b>
                <div className="relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 inline-block w-[78rem] lg:self-stretch lg:w-auto lg:flex-1 md:self-stretch md:w-auto md:flex-1 sm:flex-1">
                  Real adventure and travels encompass engaging in thrilling and
                  immersive experiences that take you beyond the ordinary and
                  allow you to explore new places, cultures, and activities.
                  Here are a few suggestions to embrace real adventure and
                  travels:
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90rem] flex flex-col items-center justify-evenly  gap-[2rem] text-[1.38rem] text-label-color-light-primary lg:h-auto lg:flex-row">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem] lg:h-auto lg:flex-col lg:flex-[unset] lg:self-stretch md:flex-col sm:flex-col">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[3.63rem] h-[3.63rem]"
                    alt=""
                    src="/svg/union112.svg"
                  />
                </div>
                <b className="relative tracking-[-0.02em] leading-[2.5rem]">
                  Affordable Price
                </b>
              </div>
              <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[22.75rem] h-[7.44rem] shrink-0">
                Affordable price refers to a cost that is reasonably priced or
                within ones budgetary means. It typically implies a lower price
                compared to other alternatives in the market while still
                offering satisfactory quality or value for money.
              </div>
            </div>

            <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem] lg:w-auto lg:h-auto lg:flex-[unset] lg:self-stretch md:flex-col sm:flex-col">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="rounded-mini bg-purple rounded-2xl w-[3.63rem] h-[3.63rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
                  <img
                    className="relative w-[2.41rem] h-[1.75rem]"
                    alt=""
                    src="/svg/union12.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <b className="relative tracking-[-0.02em] leading-[2.5rem]">{`Easy & Quick Booking`}</b>
                </div>
              </div>
              <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[22.75rem] h-[7.44rem] shrink-0">
                Affordable price refers to a cost that is reasonably priced or
                within ones budgetary means. It typically implies a lower price
                compared to other alternatives in the market while still
                offering satisfactory quality or value for money.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem] lg:w-auto lg:h-auto lg:flex-[unset] lg:self-stretch md:flex-col sm:flex-col">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="rounded-mini bg-purple rounded-2xl w-[3.63rem] h-[3.63rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
                  <img
                    className="relative w-[2.06rem] h-[2.13rem]"
                    alt=""
                    src="/svg/page1.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <b className="relative tracking-[-0.02em] leading-[2.5rem]">
                    24/7 Support
                  </b>
                </div>
              </div>
              <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[22.75rem] h-[7.44rem] shrink-0">
                Affordable price refers to a cost that is reasonably priced or
                within ones budgetary means. It typically implies a lower price
                compared to other alternatives in the market while still
                offering satisfactory quality or value for money.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-greyish w-[94.5rem] flex flex-row py-[4rem] px-[7.5rem] box-border items-center justify-between text-[2rem] lg:w-auto lg:h-auto lg:flex-row md:flex-row gap-6 sm:flex-col">
          <div className="w-[41.44rem] flex flex-col items-start justify-center gap-[2rem] lg:w-auto lg:h-auto lg:flex-col md:flex-col sm:flex-col">
            <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem]">
              Explore Real Adventure & Travels
            </b>
            <div className="self-stretch relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50">
              <p className="m-0">
                Real adventure and travels encompass engaging in thrilling and
                immersive experiences that take you beyond the ordinary and
                allow you to explore new places, cultures, and activities. Here
                are a few suggestions to embrace real adventure and travels:
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Outdoor expeditions: Engage in activities like hiking, trekking,
                camping, or mountaineering to experience natures beauty and
                challenge yourself physically.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Wildlife safaris: Embark on a safari tour to observe and
                photograph diverse wildlife in their natural habitats, whether
                its on a game drive in Africa or exploring national parks.
              </p>
            </div>
          </div>
          <Image
            className="relative rounded-3xl w-[33.5rem] h-[21.38rem] object-cover lg:flex-1 md:flex-1 sm:flex-1"
            alt=""
            width={500}
            height={500}
            src="/Images/rectangle-2474@2x.png"
          />
        </div>
        <div className="bg-system-background-light-primary w-[94.5rem] flex flex-col items-center justify-start text-[2rem] text-purple-secondary-600 lg:w-auto lg:h-auto md:flex-col sm:flex-col">
          <div className="bg-system-background-light-primary w-[80rem] flex flex-row py-[4rem] px-[0rem] box-border items-start justify-center gap-[7.63rem] lg:w-auto lg:h-auto lg:flex-row">
            <div className="flex-1 flex flex-col items-center justify-start gap-[0.63rem] lg:flex-[unset] lg:self-stretch">
              <b className="relative tracking-[-0.1px] leading-[1.5rem] text-purple">
                4,958
              </b>
              <div className="relative text-[1.25rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50">
                Destinations
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start gap-[0.63rem] lg:flex-[unset] lg:self-stretch">
              <b className="relative tracking-[-0.1px] leading-[1.5rem] text-purple">
                2,869
              </b>
              <div className="relative text-[1.25rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50">
                Total Properties
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start gap-[0.63rem] lg:flex-[unset] lg:self-stretch">
              <b className="relative tracking-[-0.1px] leading-[1.5rem] text-purple">
                2M
              </b>
              <div className="relative text-[1.25rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50">
                Happy customers
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start gap-[0.63rem] lg:flex-[unset] lg:self-stretch">
              <b className="relative tracking-[-0.1px] leading-[1.5rem] text-purple">
                5,749
              </b>
              <div className="relative text-[1.25rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50">
                Hotels Listing
              </div>
            </div>
          </div>
        </div> */}
      </RootLayout>
    </div>
  );
}

export default About;
