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

            <div className="flex gap-4 overflow-auto px-5 my-6">
              <select className="listingCategoryUnActiveBtn outline-none mb-4">
                <option value="amenities">
                  Price
                  {/* <FiChevronDown /> */}
                </option>
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">item 3</option>
              </select>

              <select className="listingCategoryUnActiveBtn outline-none mb-4">
                <option value="price">Gender {/* <FiChevronDown /> */}</option>
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">item 3</option>
              </select>

              <button className="listingCategoryUnActiveBtn min-w-fit mb-4">
                Free Cancellation
              </button>
              <button className="listingCategoryUnActiveBtn min-w-fit mb-4">
                Pet Lover
              </button>
              <button className="listingCategoryUnActiveBtn min-w-fit mb-4">
                Single
              </button>
              <button className="listingCategoryUnActiveBtn min-w-fit mb-4">
                Couples
              </button>
              <button className="listingCategoryUnActiveBtn min-w-fit mb-4">
                Foot Baller
              </button>
              <button className="listingCategoryUnActiveBtn min-w-fit mb-4">
                Student
              </button>
              <button className="listingCategoryUnActiveBtn min-w-fit mb-4">
                Professional
              </button>
              <button className="listingCategoryUnActiveBtn min-w-fit mb-4">
                <img src="/filter21.svg" alt="" /> Filter
              </button>
              <button className="listingCategoryUnActiveBtn min-w-fit mb-4 ">
                <div className="flex items-center gap-2">
                  <img src="/svg/map21.svg" alt="" />
                  Show in map
                </div>
              </button>
            </div>

            <div className="text-[1.25rem]">
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
                <button className="listingCategoryUnActiveBtn min-w-fit">
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
