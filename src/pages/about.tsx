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
        <div className="bg-greyish mx-4 py-10 text-center">
          <h2 className="text-[3.25rem] font-semibold">{`We are best for tours & travel`}</h2>
          <p className=" text-[1.13rem] tracking-[-0.1px]  md:text-center text-justify">
            In this step, we will ask you which type of stays you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </div>

        <div className="bg-system-background-light-primary mx-10 my-12">
          <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] text-[2rem] text-gray-700">
            Why Choose Us?
          </b>
          <p className=" text-[1rem]   text-gray-50  lg:w-1/2 w-full">
            Real adventure and travels encompass engaging in thrilling and
            immersive experiences that take you beyond the ordinary and allow
            you to explore new places, cultures, and activities. Here are a few
            suggestions to embrace real adventure and travels:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-6">
          <div className=" shadow-2xl rounded-xl p-6">
            <div className="">
              <div className="">
                <img
                  className="mb-5 w-[3.63rem] h-[3.63rem]"
                  alt=""
                  src="/svg/union112.svg"
                />
              </div>
              <b className="">Affordable Price</b>
            </div>
            <div className="text-[1rem] mt-4  text-gray-50">
              Affordable price refers to a cost that is reasonably priced or
              within ones budgetary means. It typically implies a lower price
              compared to other alternatives in the market while still offering
              satisfactory quality or value for money.
            </div>
          </div>

          <div className="">
            <div className="shadow-2xl rounded-xl p-6">
              <div className="">
                <div className="">
                  <img
                    className="mb-5 w-[3.63rem] h-[3.63rem] bg-purple p-2 rounded-xl"
                    alt=""
                    src="/svg/union12.svg"
                  />
                </div>
                <b className="">Easy & Quick Booking</b>
              </div>
              <div className="text-[1rem] mt-4  text-gray-50">
                Affordable price refers to a cost that is reasonably priced or
                within ones budgetary means. It typically implies a lower price
                compared to other alternatives in the market while still
                offering satisfactory quality or value for money.
              </div>
            </div>
          </div>

          <div className="">
            <div className=" shadow-2xl rounded-xl p-6">
              <div className="">
                <div className="">
                  <img
                    className="mb-5 w-[3.63rem] h-[3.63rem] bg-purple p-2 rounded-xl"
                    alt=""
                    src="/svg/page11.svg"
                  />
                </div>
                <b className="">24/7 Support</b>
              </div>
              <div className="text-[1rem] mt-4  text-gray-50">
                Affordable price refers to a cost that is reasonably priced or
                within ones budgetary means. It typically implies a lower price
                compared to other alternatives in the market while still
                offering satisfactory quality or value for money.
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mx-6 mt-12">
          <div className="">
            <p className="text-2xl font-bold py-3">
              Explore Real Adventure & Travels
            </p>
            <div className="text-[1rem] text-gray-50">
              <p className="m-0 text-justify">
                Real adventure and travels encompass engaging in thrilling and
                immersive experiences that take you beyond the ordinary and
                allow you to explore new places, cultures, and activities. Here
                are a few suggestions to embrace real adventure and travels:
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0 text-justify">
                Outdoor expeditions: Engage in activities like hiking, trekking,
                camping, or mountaineering to experience natures beauty and
                challenge yourself physically.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0 text-justify">
                Wildlife safaris: Embark on a safari tour to observe and
                photograph diverse wildlife in their natural habitats, whether
                its on a game drive in Africa or exploring national parks.
              </p>
            </div>
          </div>
          <div>
            <Image
              className=" rounded-3xl h-[21.38rem] w-full"
              alt=""
              width={400}
              height={0}
              src="/Images/rectangle-2474@2x.png"
            />
          </div>
        </div>
        {/* <div className="bg-system-background-light-primary w-[94.5rem] flex flex-col items-center justify-start text-[2rem] text-purple-secondary-600 lg:w-auto lg:h-auto md:flex-col sm:flex-col">
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
