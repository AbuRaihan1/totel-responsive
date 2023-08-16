import Head from "next/head";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import RootLayout from "@/UI/RootLayout/RootLayout";
import Companies from "@/components/Companies";

function OurPartners() {
  return (
    <div>
      <Head>
        <title>Our Partners</title>
      </Head>

      <RootLayout>
        <div className="bg-greyish w-[94.5rem] overflow-hidden flex flex-col py-[4rem] px-[7.75rem] box-border items-center justify-center text-[3.25rem]  lg:h-auto md:flex-col sm:flex-col">
          <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] z-[0]  lg:h-auto md:flex-col sm:flex-col">
            <div className="relative tracking-[-0.01em] leading-[3.75rem] font-semibold">
              Our Partners
            </div>
            <div className="relative text-[1.13rem] tracking-[-0.1px] leading-[1.63rem] inline-block w-[65.51rem] lg:self-stretch  lg:flex-1 md:self-stretch md:w-auto md:flex-1 sm:self-stretch sm:w-auto">
              In this step, well ask you which type of stays you have and if
              guests will book the entire place or just a room. Then let us know
              the location and how many guests can stay.
            </div>
          </div>
        </div>

        <div className="w-[94.5rem] flex flex-col py-[4rem] px-[7.75rem] box-border items-center justify-start lg:h-auto md:w-auto sm:flex-col">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-[5rem] lg:grid-cols-6">
            <Companies />
          </div>
        </div>

        <div className="bg-greyish w-[94.5rem] h-[34.63rem] flex flex-col py-[4rem] px-[0rem] box-border items-center justify-center gap-[4rem] text-purple-600  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
          <div className="px-[7.75rem] flex flex-row items-center justify-start  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
            <div className=" flex flex-col items-start justify-center gap-[0.5rem]">
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden">
                1% OF THE INDUSTRY
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] text-[2rem] text-gray-700">
                <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] ">
                  Why Partner With Us
                </b>
                <div className="relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 inline-block w-[78rem] lg:self-stretch  lg:flex-1 md:self-stretch md:w-auto md:flex-1 sm:flex-1">
                  Real adventure and travels encompass engaging in thrilling and
                  immersive experiences that take you beyond the ordinary and
                  allow you to explore new places, cultures, and activities.
                  Here are a few suggestions to embrace real adventure and
                  travels:
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-24 text-[1.38rem] text-label-color-light-primary lg:h-auto lg:flex-row md:flex-row sm:flex-col">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem]  lg:h-auto lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch sm:flex-col sm:flex-[unset] sm:self-stretch">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="rounded-mini bg-purple w-[3.63rem] h-[3.63rem] flex flex-col p-[0.63rem] box-border items-center rounded-2xl justify-center">
                  <img
                    className="relative w-[1.52rem] h-[2.13rem]"
                    alt=""
                    src="/svg/vector111.svg"
                  />
                </div>
                <b className="relative tracking-[-0.02em] leading-[2.5rem]">
                  Future of Events
                </b>
              </div>
              <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[22.75rem] h-[7.44rem] shrink-0">
                Affordable price refers to a cost that is reasonably priced or
                within ones budgetary means. It typically implies a lower price
                compared to other alternatives in the market while still
                offering satisfactory quality or value for money.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem]  lg:h-auto lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch sm:flex-col sm:flex-[unset] sm:self-stretch">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="rounded-mini bg-purple w-[3.63rem] h-[3.63rem] flex flex-col p-[0.63rem] box-border items-center rounded-2xl justify-center">
                  <img
                    className="relative w-[1.94rem] h-[1.94rem]"
                    alt=""
                    src="/svg/vector1111.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <b className="relative tracking-[-0.02em] leading-[2.5rem]">
                    Collaborative Work
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
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem]  lg:h-auto lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch sm:flex-col sm:flex-[unset] sm:self-stretch">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="rounded-mini bg-purple w-[3.63rem] h-[3.63rem] flex flex-col p-[0.63rem] box-border items-center rounded-2xl justify-center">
                  <img
                    className="relative w-[2.06rem] h-[2.13rem]"
                    alt=""
                    src="/svg/page11.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <b className="relative tracking-[-0.02em] leading-[2.5rem]">
                    Dedicated Support
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
        <div className="bg-system-background-light-primary w-[94.5rem] flex flex-col py-[4rem] px-[0rem] box-border items-center justify-start text-purple-600  lg:h-auto md:flex-col sm:flex-col">
          <div className="flex flex-col items-center justify-start gap-[4rem] lg:h-auto md:flex-col sm:flex-col">
            <div className="px-[7.75rem] flex flex-row items-center justify-start  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
              <div className=" flex flex-col items-start justify-center gap-[0.5rem]">
                <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden">
                  1% OF THE INDUSTRY
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] text-[2rem] text-gray-700">
                  <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] ">
                    Are You Excited to Join Us?
                  </b>
                  <div className="relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 inline-block w-[78rem] lg:self-stretch  lg:flex-1 md:self-stretch md:w-auto md:flex-1 sm:flex-1">
                    Real adventure and travels encompass engaging in thrilling
                    and immersive experiences that take you beyond the ordinary
                    and allow you to explore new places, cultures, and
                    activities. Here are a few suggestions to embrace real
                    adventure and travels:
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start px-[7rem]  gap-[2rem] w-full  text-[0.94rem] text-gray-25  lg:h-auto md:flex-col sm:flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] lg:h-auto  sm:flex-col">
                <div className="flex flex-row items-start justify-start gap-[1rem] lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                  <div className="rounded-lg w-full bg-system-background-light-primary box-border  h-[2.88rem] overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem] lg:h-auto lg:flex-row md:flex-row sm:flex-col">
                    <div className="flex-1 w-full flex flex-row items-start justify-start lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                      <InputText
                        type="text"
                        placeholder="First Name"
                        className="w-full"
                      />
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] hidden"
                      alt=""
                      src="/svg/information21.svg"
                    />
                  </div>
                  <div className="rounded-lg w-full bg-system-background-light-primary box-border  overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem]  border-solid border-neutral-700  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                    <div className="flex-1 w-full flex flex-row items-start justify-start lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                      <InputText
                        type="text"
                        placeholder="Last Name"
                        className="w-full"
                      />
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] hidden"
                      alt=""
                      src="/svg/information21.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1rem]  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                  <div className="rounded-lg w-full bg-system-background-light-primary box-border  overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem] border-solid border-neutral-700  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                    <div className="flex-1 flex flex-row items-start justify-start w-full lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                      <InputText
                        type="email"
                        placeholder="Email Address"
                        className="w-full"
                      />
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] hidden"
                      alt=""
                      src="/svg/information21.svg"
                    />
                  </div>
                  <div className="rounded-lg w-full bg-system-background-light-primary box-border  overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem] border-solid border-neutral-700  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                    <div className="flex-1 flex flex-row items-start justify-start w-full lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                      <InputText
                        type="digit"
                        placeholder="Phone Number"
                        className="w-full"
                      />
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] hidden"
                      alt=""
                      src="/svg/information21.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1rem]  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                  <div className="rounded-lg w-full bg-system-background-light-primary box-border  overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem] border-solid border-neutral-700  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                    <div className="flex-1 flex flex-row items-start justify-start w-full lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                      <InputText
                        type="text"
                        placeholder="Your Position"
                        className="w-full"
                      />
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] hidden"
                      alt=""
                      src="/svg/information21.svg"
                    />
                  </div>
                  <div className="rounded-lg w-full bg-system-background-light-primary box-border  overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem]  border-solid border-neutral-700  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                    <div className="flex-1 flex flex-row items-start justify-start w-full lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                      <InputText
                        type="text"
                        placeholder="Company Name"
                        className="w-full"
                      />
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] hidden"
                      alt=""
                      src="/svg/information21.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1rem]  lg:h-auto lg:flex-col md:flex-col">
                  <div className="rounded-lg w-full bg-system-background-light-primary box-border  overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem]  border-solid border-neutral-700  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                    <div className="flex-1 flex flex-row items-start justify-start w-full lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                      <InputText
                        type="text"
                        placeholder="Company Location"
                        className="w-full"
                      />
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] hidden"
                      alt=""
                      src="/svg/information21.svg"
                    />
                  </div>
                  <div className="rounded-lg w-full bg-system-background-light-primary box-border  overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-center justify-start gap-[0.5rem] border-solid border-neutral-700  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                    <div className="flex-1 flex flex-row items-start justify-start w-full lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                      <InputText
                        type="url"
                        placeholder="Company Website Url"
                        className="w-full"
                      />
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] hidden"
                      alt=""
                      src="/svg/information21.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start  lg:h-auto lg:flex-col md:flex-col sm:flex-col">
                  <div className="rounded-lg  bg-system-background-light-primary box-border w-[80rem] h-[19.75rem] overflow-hidden shrink-0 flex flex-row py-[0.75rem] px-[1rem] items-start justify-start gap-[0.5rem] border-solid border-neutral-700">
                    <div className="flex-1 w-full flex flex-row items-start justify-start">
                      <InputTextarea
                        placeholder="Your message here"
                        className="w-full resize-none"
                        rows={8}
                        cols={30}
                      />
                    </div>
                    <img
                      className="relative w-[1.5rem] h-[1.5rem] hidden"
                      alt=""
                      src="/svg/information21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xl text-white rounded-full bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary">
                <div className="relative leading-[1.38rem] font-semibold cursor-pointer">
                  Send Application
                </div>
              </div>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default OurPartners;
