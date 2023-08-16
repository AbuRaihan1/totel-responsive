/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/UI/RootLayout/RootLayout";
import BottomBar from "@/components/partnerhosting/BottomBar";
import UpperNavigation from "@/components/partnerhosting/UpperNavigation";
import Head from "next/head";

const HostingFlowStep1Start = () => {
  return (
    <div>
      <Head>
        <title>Partner hosting</title>
      </Head>

      <RootLayout>
        <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-mini text-gray-700 font-text-button-semibold-large md:items-center max-w-[83rem] mx-auto py-5">
          <main className="self-stretch bg-white overflow-hidden flex flex-col py-16 px-[124px] items-center justify-center gap-[32px] md:py-10 md:px-[15px] md:box-border sm:py-10 sm:px-2.5 sm:box-border">
            <UpperNavigation/>
            <main className="self-stretch flex flex-col items-start justify-start z-[1] text-center text-lg text-black font-text-button-semibold-large">
              <div className="self-stretch rounded-8xs flex flex-col items-start justify-center gap-[8px]">
                <div className="relative tracking-[-0.1px] leading-[28px] font-semibold">
                  Step 1
                </div>
                <div className="w-[780px] flex flex-col items-start justify-center gap-[16px] text-left text-4xl">
                  <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[60px] font-semibold lg:flex-1 md:text-5xl text-lg md:flex-1 sm:text-lg sm:flex-1">
                    Tell us about your self
                  </div>
                  <div className="relative text-lg tracking-[-0.1px] leading-[26px] inline-block w-[780px] lg:flex-1 md:text-[19px]">
                    In this step, we will ask you which type of stays you have
                    and if guests will book the entire place or just a room.
                    Then let us know the location and how many guests can stay.
                  </div>
                </div>
              </div>
            </main>
            <img
              className="self-stretch relative rounded-3xl max-w-full overflow-hidden h-[463px] shrink-0 object-cover  z-[0] lg:flex-1 md:flex-1"
              alt=""
              src="/svg/about.svg"
            />
          </main>
        <BottomBar back="/" next="/partner-hosting/room-type"/>
        </div>
      </RootLayout>
    </div>
  );
};

export default HostingFlowStep1Start;
