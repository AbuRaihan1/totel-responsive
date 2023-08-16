import RootLayout from "@/UI/RootLayout/RootLayout";
import CareerOptions from "@/components/career/CareerOptions";
import Head from "next/head";

export default function Career() {
  const careerOptions = [
    {
      imageURL: "/Images/rectangle-24754@2x.png",
      jobType: "Full Time / Part Time",
      jobTitle: "Travel Guide",
      jobDescription:
        "But happy to move in with more than that, I’m super easy going and tidy.",
    },

    {
      imageURL: "/Images/rectangle-24751@2x.png",
      jobType: "Full Time",
      jobTitle: "Supervisor",
      jobDescription:
        "But happy to move in with more than that, I’m super easy going and tidy.",
    },
    {
      imageURL: "/Images/rectangle-24752@2x.png",
      jobType: "Part Time",
      jobTitle: "Receptionist",
      jobDescription:
        "But happy to move in with more than that, I’m super easy going and tidy.",
    },
    {
      imageURL: "/Images/rectangle-24753@2x.png",
      jobType: "Full Time / Part Time",
      jobTitle: "Tech Operator",
      jobDescription:
        "But happy to move in with more than that, I’m super easy going and tidy.",
    },
  ];
  return (
    <div>
      <Head>
        <title>Career</title>
      </Head>
      <RootLayout>
        <div className="self-stretch bg-greyish overflow-hidden shrink-0 flex flex-col py-[4rem] px-[7.75rem] items-center justify-center text-[3.25rem]  lg:flex-col md:flex-col sm:flex-col">
          <div className="self-stretch flex flex-col  items-start justify-center gap-[1rem] z-[0]  lg:flex-col md:flex-col sm:flex-col">
            <div className="relative tracking-[-0.01em] leading-[3.75rem] font-semibold">
              Build Your Solid Career
            </div>
            <div className="relative text-[1.13rem] tracking-[-0.1px] leading-[1.63rem] inline-block w-[65.51rem] lg:self-stretch lg:w-auto lg:flex-1 md:self-stretch md:w-auto sm:self-stretch sm:w-auto">
              In this step, we will ask you which type of stays you have and if
              guests will book the entire place or just a room. Then let us know
              the location and how many guests can stay.
            </div>
          </div>
        </div>
        <div className="bg-white w-[94.5rem] flex flex-col py-[4rem] px-[9rem] box-border items-center justify-start text-[0.75rem]  lg:w-auto lg:h-auto md:flex-col sm:flex-col">
          <div className="flex items-start justify-start gap-[2rem] lg:w-auto flex-col lg:h-auto lg:flex-row  md:flex-row sm:flex-col">
            {careerOptions.map((careerOption) => (
              <CareerOptions {...careerOption} key={careerOption.jobTitle} />
            ))}
          </div>
        </div>

        <div className="self-stretch bg-greyish-200 h-[34.63rem] flex flex-col py-[4rem] px-[9rem]  box-border items-center justify-center gap-[4rem] text-purple-600 lg:w-auto lg:h-auto md:flex-col sm:flex-col">
          <div className="w-[80rem] flex flex-row items-center justify-start lg:w-auto lg:h-auto lg:flex-col md:w-auto md:h-auto sm:flex-col">
            <div className="w-[80rem] flex flex-col items-start justify-center gap-[0.5rem] lg:w-auto lg:h-auto md:flex-col sm:flex-col">
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden">
                1% OF THE INDUSTRY
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] text-[2rem] text-gray-700">
                <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] ">
                  Why Join Us
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
          <div className="w-[80rem] flex flex-col items-center justify-center gap-[4rem] text-[1.38rem]  lg:w-auto lg:h-auto lg:flex-row md:w-auto md:h-auto md:flex-row sm:h-auto">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem] lg:w-auto lg:h-auto lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[3.63rem] h-[3.63rem]"
                    alt=""
                    src="/svg/union112.svg"
                  />
                </div>
                <b className="relative tracking-[-0.02em] leading-[2.5rem]">
                  Good Salary
                </b>
              </div>
              <div className="relative text-[1rem] tracking-[-0.02em] leading-[1.5rem] text-gray-50 inline-block w-[22.75rem] h-[7.44rem] shrink-0">
                Affordable price refers to a cost that is reasonably priced or
                within ones budgetary means. It typically implies a lower price
                compared to other alternatives in the market while still
                offering satisfactory quality or value for money.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem] lg:w-auto lg:h-auto lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="rounded-mini bg-purple rounded-2xl w-[3.63rem] h-[3.63rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
                  <img
                    className="relative w-[1.94rem] h-[1.94rem]"
                    alt=""
                    src="/svg/vector211.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <b className="relative tracking-[-0.02em] leading-[2.5rem]">
                    Friendly Environment
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
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem] lg:w-auto lg:h-auto lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="rounded-mini bg-purple w-[3.63rem] rounded-2xl h-[3.63rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
                  <img
                    className="relative w-[2.02rem] h-[2.02rem] "
                    alt=""
                    src="/svg/union1121.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <b className="relative tracking-[-0.02em] leading-[2.5rem]">
                    Career Develop
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
      </RootLayout>
    </div>
  );
}
