/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/UI/RootLayout/RootLayout";
import Container from "@/components/Container";
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
        <Container>
          <div className="mt-24">
            <UpperNavigation />
            <div className="lg:w-[780px] w-full mt-8 ">
              <p className="text-[18px] font-semibold mb-3">Step 1</p>
              <h2 className="lg:text-[52px] sm:text-[32px] font-semibold my-0 py-0">
                Tell us about your place
              </h2>
              <p className="text-[18px] font-normal mt-4">
                In this step, we'll ask you which type of stays you have and if
                guests will book the entire place or just a room. Then let us
                know the location and how many guests can stay.
              </p>
            </div>
            <hr className="border border-card my-16" />
            <div className="mb-20">
              <img
                className=" relative rounded-3xl max-w-full overflow-hidden lg:h-[335px] h-[422px] w-full"
                alt=""
                src="/Images/host-place.png"
              />
            </div>
          </div>
        </Container>

        <BottomBar back="/" next="/partner-hosting/room-type" />
      </RootLayout>
    </div>
  );
};

export default HostingFlowStep1Start;
