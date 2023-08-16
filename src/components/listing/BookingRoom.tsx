import React from 'react'
import { TbPencil } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import {BiTrashAlt} from "react-icons/bi";
import {BiMailSend} from "react-icons/bi";
import {BiPhone} from "react-icons/bi";


function BookingRoom() {
  return (
    <div className="rounded-xl bg-white box-border w-[24rem] overflow-hidden shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-card">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[10.9rem] shrink-0 object-cover"
        alt=""
        src="/Images/entire.jpg"
      />
      <div className="self-stretch flex flex-col p-[1rem] items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
          <img
            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
            alt=""
            src="/placeholder3212.svg"
          />
          <img
            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
            alt=""
            src="/arrowright11111.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[0.5rem] text-[0.81rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.13rem]">
                <div className="inline-flex items-center rounded-full bg-green-shade-100 px-2 py-1 text-[13px] font-medium leading-none text-success-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-shade-700 mr-1"></span>
                  <span className="">Booked</span>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="relative leading-[1.75rem] font-semibold">
                    Devid Johanson
                  </div>
                  <MdVerified className="text-purple" />
                </div>
                <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.88rem]">
                  <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                    23 Years
                  </div>
                  <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                    /
                  </div>
                  <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                    Male
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                
                <div className="rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row p-[0.63rem] items-center justify-center border-[1px] border-solid border-card">
                  <BiTrashAlt />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <div className="rounded-3xl bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] box-border flex flex-col p-[0.63rem] items-center justify-center border-[1px] border-solid border-card">
                    <BsThreeDots />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start ">
                <BiMailSend  />
                  <div className="relative ">
                    nasim.cse.gub@gmail.com
                  </div>
            </div>
            <div className="flex flex-row items-center justify-start ">
                <BiPhone  />
                  <div className="relative ">
                    +8801989230820
                  </div>
            </div>
            <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem]">
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                Check In
              </div>
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                -
              </div>
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                28 Apr 2023
              </div>
            </div>
            <div className="w-[16.5rem] flex flex-row items-start justify-start gap-[0.25rem]">
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                Check Out
              </div>
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                -
              </div>
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                29 Apr 2023
              </div>
            </div>
            
            <div className="relative text-[0.94rem] tracking-[-0.1px] leading-[1.38rem] text-gray-700">
              <span>Location:</span>
              <span className="font-medium">{` Bristol, Bath & London`}</span>
            </div>
          </div>
          <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-center gap-[0.38rem] text-[0.94rem]">
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
              alt=""
              src="/placeholder3212.svg"
            />
            <div className="flex flex-row items-center justify-start font-semibold">
              Payment: $320
            </div>
            <img
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
              alt=""
              src="/arrowright11111.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingRoom