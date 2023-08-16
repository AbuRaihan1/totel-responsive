import RootLayout from "@/UI/RootLayout/RootLayout";
import BookingRoom from "@/components/listing/BookingRoom";
import Head from "next/head";
import Link from "next/link";

function bookings() {
  return (
    <div>
    <Head>
      <title>Bookings</title>
    </Head>
    <RootLayout>
      <div className="bg-white pt-3 flex flex-row items-start justify-start text-[0.94rem] text-gray-50  lg:h-auto  md:flex-row sm:flex-col">
        <div className="self-stretch bg-white box-border w-[17.5rem] overflow-hidden shrink-0 flex flex-col py-[0.75rem] px-[0rem] items-start justify-start gap-[0.25rem] border-r-[1px] border-solid border-card  lg:h-auto md:flex-col sm:flex-col">
          <Link href="/inbox">
            <div className="self-stretch h-[2.88rem] overflow-hidden shrink-0 flex flex-row py-[0rem] px-[1.75rem] box-border items-center justify-start gap-[0.75rem]">
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
          <div className="self-stretch h-[2.88rem] overflow-hidden shrink-0 flex flex-row py-[0rem] px-[1.75rem] box-border items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
              alt=""
              src="/svg/boxdoublehorizontal1111111.svg"
            />
            <div className="flex-1 relative tracking-[-0.1px] leading-[1.38rem] font-semibold">
              Listings
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
          <Link href="/bookings">
          <div className="self-stretch bg-purple-secondary-25 h-[2.88rem] overflow-hidden shrink-0 flex flex-row py-[0rem] px-[1.75rem] box-border items-center justify-start relative gap-[0.75rem] text-purple" >
            <img
              className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0 z-[0]"
              alt=""
              src="/svg/document21111111.svg"
            />
            <div className="flex-1 relative tracking-[-0.1px] leading-[1.38rem] font-semibold z-[1]">
              Bookings
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
          <div className="self-stretch h-[2.88rem] overflow-hidden shrink-0 flex flex-row py-[0rem] px-[1.75rem] box-border items-center justify-start gap-[0.75rem]">
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
          <div className="self-stretch h-[2.88rem] overflow-hidden shrink-0 flex flex-row py-[0rem] px-[1.75rem] box-border items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[1.38rem] h-[1.38rem] overflow-hidden shrink-0"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 py-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
          <BookingRoom key={i} />
        ))}
      </div>
      </div>
    </RootLayout>
  </div>
  )
}

export default bookings