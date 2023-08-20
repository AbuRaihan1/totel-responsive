import React from "react";
import { BsThreeDots } from "react-icons/bs";
import ListingPartner from "./ListingPartner";
import { InputText } from "primereact/inputtext";

type Props = {};

function SideNavigation({}: Props) {
  return (
    <div className=" self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start text-[0.88rem] text-gray-700  lg:h-auto lg:flex-[unset] lg:self-stretch  md:flex-[unset] md:self-stretch sm:flex-col sm:flex-[unset] sm:self-stretch">
      <div className="self-stretch bg-white flex flex-col pt-[1.5rem] px-[1.5rem] pb-[0.75rem] items-start justify-start z-[1] lg:flex-row md:flex-row sm:flex-row">
        <div className="self-stretch rounded-8xs flex flex-row items-center justify-start md:flex-row sm:flex-row">
          <div className="flex-1 flex flex-row items-center justify-between gap-10 z-[0]">
            <div className="rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] flex flex-row py-2 pr-[0.8rem] pl-[1rem] items-center justify-start gap-[0.38rem] text-gray-25 border-[1px] border-solid border-card">
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0"
                alt=""
                src="/svg/zoomsearch11.svg"
              />
              <div className="flex flex-row items-start justify-start">
                <input
                  type="text"
                  className="outline-none border-none w-16  placeholder:text-gray-50 placeholder:font-semibold"
                  placeholder="Find.."
                />
              </div>
              <div className="border-2 rounded-3xl bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.63rem] px-[1rem] items-center justify-center gap-[0.38rem] text-white">
                <img
                  className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder14111111111.svg"
                />
                <div className="relative leading-[1.25rem] font-semibold">
                  Search
                </div>
                <img
                  className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder14111111111.svg"
                />
              </div>
            </div>
            <div className="rounded-3xl shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row items-center justify-center gap-[0.5rem]">
              <div className="rounded-3xl bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-[0.94rem] text-white">
                <div className="relative leading-[1.38rem] font-semibold">
                  All
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder7121111.svg"
                />
              </div>

              <div className="rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center whitespace-nowrap gap-[0.38rem] text-[0.94rem] border-[1px] border-solid border-card">
                <div className="relative leading-[1.38rem] font-semibold">
                  Already Booked
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder311122.svg"
                />
              </div>
              <div className="rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center whitespace-nowrap justify-center gap-[0.38rem] text-[0.94rem] border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder311122.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Looking for a partner
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder311122.svg"
                />
              </div>
              <div className="rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] border-[1px] border-solid border-card">
                <div className="relative leading-[1.25rem] font-semibold">
                  Listing
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder311122.svg"
                />
              </div>
            </div>

            <div className="flex flex-row items-start justify-start gap-[2rem]">
              <div className="flex flex-row items-start justify-start gap-[1rem]">
                <div className="flex flex-col items-start justify-end gap-[0.38rem]">
                  <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                    Headline
                  </div>
                  <div className="self-stretch rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border h-[2.5rem] flex flex-row py-[0.63rem] px-[0.88rem] items-center justify-start gap-[0.75rem] text-[0.94rem] border-[1px] border-solid border-card">
                    <img
                      className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/svg/dot-menu1111.svg"
                    />
                    <div className="relative tracking-[-0.1px] leading-[1.38rem] font-semibold">
                      Amenities
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                      alt=""
                      src="/svg/chevron-down21.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end gap-[0.38rem]">
                  <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium hidden">
                    Headline
                  </div>
                  <div className="self-stretch rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border h-[2.5rem] flex flex-row py-[0.63rem] whitespace-nowrap px-[0.88rem] items-center justify-start gap-[0.75rem] text-[0.94rem] border-[1px] border-solid border-card">
                    <div className="relative tracking-[-0.1px] leading-[1.38rem] font-semibold">
                      Post Status
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                      alt=""
                      src="/svg/chevron-down21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row p-[0.63rem] items-center justify-center border-[1px] border-solid border-card">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/svg/filter1111.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className="rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border  flex flex-col p-[0.63rem] items-center justify-center border-[1px] border-solid border-card">
                  <BsThreeDots />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 px-5 py-4 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
          <ListingPartner key={i} />
        ))}
      </div>
    </div>
  );
}

export default SideNavigation;
