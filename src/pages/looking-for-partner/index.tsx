import RootLayout from "@/UI/RootLayout/RootLayout";
import Container from "@/components/Container";
import Partner from "@/components/partner/Partner";
import Head from "next/head";
import Link from "next/link";

function LookingForPartner() {
  return (
    <div>
      <Head>
        <title>Looking for partner</title>
      </Head>
      <RootLayout>
        {/* <div className="mt-8 overflow-y-auto flex flex-col items-start justify-start text-gray-700">
          <div className="self-stretch flex flex-col py-[0.75rem] px-[7.75rem] items-end justify-center bg-[url(/Images/frame-2@3x.png)] bg-cover bg-no-repeat bg-[top]   md:flex-col sm:flex-col">
            <div className="self-stretch rounded-3xl bg-white flex flex-col p-[2rem] items-start justify-center border-[1px] border-card md:flex-row sm:flex-col">
              <div className="self-stretch flex flex-1 flex-row items-end  gap-[1.5rem] w-full    md:flex-row sm:flex-col">
                <div
                  className="overflow-hidden flex flex-col items-start justify-center gap-[0.5rem] sm:flex-[unset] sm:self-stretch"
                  style={{ flex: "1" }}
                >
                  <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                    Where
                  </div>
                  <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden items-center h-[1.25rem] shrink-0">
                    Hint text
                  </div>
                  <div className="self-stretch rounded-3xl flex flex-col items-start justify-center gap-[0.25rem] lg:self-stretch  md:flex-row sm:flex-row">
                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                      Label
                    </div>
                    <div className="self-stretch flex-1 rounded-3xl bg-system-background-light-primary flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[0.75rem] text-[1rem] border-[1px] border-solid border-card">
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder412111.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                        Minamiuonuma, Niigata
                      </div>
                      <img
                        className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/calendar11.svg"
                      />
                    </div>
                    <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                      Hint text
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden flex flex-col items-start justify-center gap-[0.5rem]">
                  <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                    Budget
                  </div>
                  <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden items-center h-[1.25rem] shrink-0">
                    Hint text
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                    <div className="rounded-3xl flex flex-col items-start justify-center gap-[0.25rem]">
                      <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                        Label
                      </div>
                      <div className="rounded-3xl bg-system-background-light-primary flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[0.75rem] text-[1rem] border-[1px] border-solid border-card">
                        <img
                          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder412111.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Minimum
                        </div>
                        <img
                          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/chevronexpand-verical1.svg"
                        />
                      </div>
                      <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                        Hint text
                      </div>
                    </div>
                    <div className="rounded-3xl flex flex-col items-start justify-center gap-[0.25rem]">
                      <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                        Label
                      </div>
                      <div className="rounded-3xl bg-system-background-light-primary flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[0.75rem] text-[1rem] border-[1px] border-solid border-card">
                        <img
                          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder412111.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Maximum
                        </div>
                        <img
                          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/chevronexpand-verical1.svg"
                        />
                      </div>
                      <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                        Hint text
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-col items-start justify-center gap-[0.5rem]">
                  <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                    Type
                  </div>
                  <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden items-center h-[1.25rem] shrink-0">
                    Hint text
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                    <div className="rounded-3xl flex flex-col items-start justify-center gap-[0.75rem]">
                      <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                        Label
                      </div>
                      <div className="rounded-3xl bg-system-background-light-primary flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[1.5rem] text-[1rem] border-[1px] border-solid border-card">
                        <img
                          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder412111.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Male
                        </div>
                        <img
                          className="relative w-[1.5rem] h-[1.5rem] hidden"
                          alt=""
                          src="/timeloading1.svg"
                        />
                      </div>
                      <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                        Hint text
                      </div>
                    </div>
                    <div className="rounded-3xl flex flex-col items-start justify-center gap-[0.75rem]">
                      <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                        Label
                      </div>
                      <div className="rounded-3xl bg-system-background-light-primary flex flex-row py-[0.75rem] px-[1.25rem] items-center justify-start gap-[1.5rem] text-[1rem] border-[1px] border-solid border-card">
                        <img
                          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder412111.svg"
                        />
                        <div className="relative tracking-[-0.1px] leading-[1.5rem] font-medium">
                          Female
                        </div>
                        <img
                          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/calendar11.svg"
                        />
                      </div>
                      <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium text-gray-50 hidden">
                        Hint text
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-purple w-[2.88rem] overflow-hidden shrink-0 flex flex-row p-[0.75rem] box-border items-center justify-center">
                  <img
                    className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
                    alt=""
                    src="/svg/zoomsearch2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Container>
          <div className="">
            {/* <div className="self-stretch relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden h-[1.25rem] shrink-0">
            1% OF THE INDUSTRY
          </div> */}
            {/* <div className="w-[84.75rem] flex flex-row items-center justify-center gap-[1rem] text-[0.94rem] text-gray-700  lg:flex-row md:flex-row sm:flex-row">
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/svg/filter11.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Price
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/svg/chevron-down11.svg"
                />
              </div>
              <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/filter21.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Gender
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/svg/chevron-down11.svg"
                />
              </div>
            </div>
            <div className="relative box-border w-[0.06rem] h-[1.06rem] border-r-[1px] border-solid border-card" />
            <div className="flex flex-row items-start justify-start gap-[0.5rem]">
              <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <div className="relative leading-[1.38rem] font-semibold">
                  Free Cancellation
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/svg/chevron-down11.svg"
                />
              </div>
              <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/filter4.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Pet Lover
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/svg/chevron-down11.svg"
                />
              </div>
              <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/filter4.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Single
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/svg/chevron-down11.svg"
                />
              </div>
              <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/filter4.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Couples
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/svg/chevron-down11.svg"
                />
              </div>
              <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/filter4.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Foot Baller
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/svg/chevron-down11.svg"
                />
              </div>
              <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/filter4.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Student
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/svg/chevron-down11.svg"
                />
              </div>
              <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/filter5.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Professional
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/svg/chevron-down11.svg"
                />
              </div>
              <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/svg/filter5.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Filter
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-3xl bg-system-background-light-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                  <img
                    className="relative w-[1.25rem] h-[1.25rem]"
                    alt=""
                    src="/svg/map21.svg"
                  />
                  <div className="relative leading-[1.38rem] font-semibold">
                    Show In Map
                  </div>
                </div>
              </div>
            </div>
          </div> */}

            <div className="border-2 text-[1.25rem]">
              <Link href="claim-service-fess">
                <Partner />
              </Link>
              <Link href="claim-service-fess">
                <Partner />
              </Link>
              <Link href="claim-service-fess">
                <Partner />
              </Link>
              <div className="w-full flex justify-center mt-10">
                <button className="listingCategoryUnActiveBtn">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </Container>
      </RootLayout>
    </div>
  );
}

export default LookingForPartner;
