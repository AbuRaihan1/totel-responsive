import Link from "next/link";
import React from "react";

const ListingSideBar = () => {
  return (
    <div>
      <div className="min-h-screen fixed z-10 h-auto bg-white  w-[17.5rem] py-[0.75rem] border border-card">
        <Link href="/inbox">
          <div className="listingSidebardItemsStyle">
            <img
              className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
              alt=""
              src="/svg/mail11111111.svg"
            />
            <div className="flex-1 relative tracking-[-0.1px] leading-[1.38rem] font-semibold">
              Inbox
            </div>

            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
              alt=""
              src="/svg/chevrondown111.svg"
            />
          </div>
        </Link>
        <Link href="/listing">
          <div className="listingSidebardItemsStyle">
            <img
              className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0 z-[0]"
              alt=""
              src="/svg/boxdoublehorizontal1111111.svg"
            />
            <div className="flex-1 relative tracking-[-0.1px] leading-[1.38rem] font-semibold z-[1]">
              Listings
            </div>
            <div className="rounded-xl bg-purple-600 h-[1.25rem] hidden flex-col py-[0rem] px-[0.38rem] box-border items-center justify-center z-[2] text-[0.88rem] text-white">
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                9
              </div>
            </div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden z-[3]"
              alt=""
              src="/svg/chevrondown111.svg"
            />
            <div className="absolute my-0 mx-[!important] h-full top-[0rem] bottom-[0rem] left-[0rem] bg-purple w-[0.19rem] z-[4]" />
          </div>
        </Link>
        <Link href="/bookings">
          <div className="listingSidebardItemsStyle">
            <img
              className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
              alt=""
              src="/svg/document21111111.svg"
            />
            <div className="flex-1 relative tracking-[-0.1px] leading-[1.38rem] font-semibold">
              Bookings
            </div>
            <div className="rounded-xl bg-greyish h-[1.5rem] hidden flex-col py-[0rem] px-[0.38rem] box-border items-center justify-center text-[0.88rem] text-gray-700">
              <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
                9
              </div>
            </div>
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
              alt=""
              src="/svg/chevrondown111.svg"
            />
          </div>
        </Link>
        <div className="listingSidebardItemsStyle">
          <img
            className="relative w-[1.38rem] h-[1.38rem]"
            alt=""
            src="/svg/like111.svg"
          />
          <div className="flex-1 relative tracking-[-0.1px] leading-[1.38rem] font-semibold">
            Wishlist
          </div>
          <div className="rounded-xl bg-greyish h-[1.5rem] hidden flex-col py-[0rem] px-[0.38rem] box-border items-center justify-center text-[0.88rem] text-gray-700">
            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
              9
            </div>
          </div>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
            alt=""
            src="/svg/chevrondown111.svg"
          />
        </div>
        <div className="listingSidebardItemsStyle">
          <img
            className="relative w-[1.38rem] h-[1.38rem]"
            alt=""
            src="/svg/gear-1111121.svg"
          />
          <div className="flex-1 relative tracking-[-0.1px] leading-[1.38rem] font-semibold">
            Settings
          </div>
          <div className="rounded-xl bg-greyish h-[1.5rem] hidden flex-col py-[0rem] px-[0.38rem] box-border items-center justify-center text-[0.88rem] text-gray-700">
            <div className="relative tracking-[-0.1px] leading-[1.25rem] font-medium">
              9
            </div>
          </div>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
            alt=""
            src="/svg/chevrondown111.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingSideBar;
