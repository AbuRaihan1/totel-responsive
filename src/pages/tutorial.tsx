import Head from "next/head";
import Image from "next/image";
import RootLayout from "@/UI/RootLayout/RootLayout";

export default function Tutorial() {
  return (
    <div>
      <Head>
        <title>Tutorial</title>
      </Head>
      <RootLayout>
        <div className="relative w-full flex flex-col items-end justify-start text-left text-[0.88rem] text-system-background-light-primary font-headline-xxs-desktop-medium lg:w-auto lg:h-auto md:items-center md:justify-start sm:flex-col">
          <div className="bg-system-background-light-primary w-[94.5rem] flex flex-col py-[4rem] px-[0rem] box-border items-center justify-center text-purple-600 lg:w-auto lg:h-auto">
            <div className="flex flex-col items-start justify-start gap-[3.75rem] lg:w-auto lg:h-auto md:flex-col sm:flex-col">
              <div className="flex flex-col py-[0rem] px-[0.63rem] items-start justify-start">
                <div className="w-[50rem] flex flex-col items-start justify-center gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] text-[2rem] text-gray-700">
                    <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem]">
                      How to Earn Money as a User
                    </b>
                    <div className="self-stretch relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50">
                      You can find places and stay with hotels and home-stays
                      ranked by travellers. What fun could we have more than
                      having roommate with similar interest.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[2.5rem] text-[1.75rem] text-label-color-light-primary lg:w-auto lg:h-auto md:flex-col sm:flex-col">
                <div className="flex md:flex-row items-center justify-start gap-[12.88rem] lg:w-auto lg:h-auto   sm:flex-col">
                  <div className="relative w-[37.56rem] h-[9.47rem] lg:flex-1 lg:self-stretch lg:h-auto md:flex-1 sm:flex-1">
                    <div className="absolute top-[0rem] left-[0rem] tracking-[-0.02em] leading-[2.25rem] font-semibold">
                      Share with Roommate
                    </div>
                    <div className="absolute top-[4.22rem] left-[0.06rem] text-[0.88rem] tracking-[-0.1px] leading-[1.25rem] text-gray-50 inline-block w-[37.5rem] h-[5.25rem]">
                      Hourly basis rent refers to a rental agreement in which a
                      tenant pays rent for the use of a property or a service on
                      an hourly basis. This type of rental agreement is common
                      in situations where a tenant needs to use a property or
                      service for a short period of time, such as a conference
                      room, a co-working space, or a car rental.
                    </div>
                  </div>
                  <Image
                    className="relative w-[26.44rem] h-[20.13rem] object-cover"
                    alt=""
                    height={500}
                    width={500}
                    src="/Images/tutorial2.png"
                  />
                </div>
                <div className="flex md:flex-row items-center justify-start gap-[12.88rem] lg:w-auto lg:h-auto lg:flex-row flex-col sm:flex-col">
                  <Image
                    className="relative w-[26.44rem] h-[20.13rem] object-cover"
                    alt=""
                    height={500}
                    width={500}
                    src="/Images/mask-group1@2x.png"
                  />
                  <div className="relative w-[37.56rem] h-[9.47rem] lg:flex-1 lg:self-stretch lg:h-auto md:flex-1 sm:flex-1">
                    <div className="absolute top-[0rem] left-[0rem] tracking-[-0.02em] leading-[2.25rem] font-semibold">
                      Share with Partner
                    </div>
                    <div className="absolute top-[4.22rem] left-[0.06rem] text-[0.88rem] tracking-[-0.1px] leading-[1.25rem] text-gray-50 inline-block w-[37.5rem] h-[5.25rem]">
                      Hourly basis rent refers to a rental agreement in which a
                      tenant pays rent for the use of a property or a service on
                      an hourly basis. This type of rental agreement is common
                      in situations where a tenant needs to use a property or
                      service for a short period of time, such as a conference
                      room, a co-working space, or a car rental.
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[12.88rem] lg:w-auto lg:h-auto">
                  <div className="relative w-[37.56rem] h-[9.47rem] lg:flex-1 lg:self-stretch lg:h-auto md:flex-1 sm:flex-1">
                    <div className="absolute top-[0rem] left-[0rem] tracking-[-0.02em] leading-[2.25rem] font-semibold">
                      Share with Guest
                    </div>
                    <div className="absolute top-[4.22rem] left-[0.06rem] text-[0.88rem] tracking-[-0.1px] leading-[1.25rem] text-gray-50 inline-block w-[37.5rem] h-[5.25rem]">
                      Hourly basis rent refers to a rental agreement in which a
                      tenant pays rent for the use of a property or a service on
                      an hourly basis. This type of rental agreement is common
                      in situations where a tenant needs to use a property or
                      service for a short period of time, such as a conference
                      room, a co-working space, or a car rental.
                    </div>
                  </div>
                  <Image
                    className="relative w-[26.44rem] h-[20.13rem] object-cover"
                    alt=""
                    height={500}
                    width={500}
                    src="/Images/tutorial1.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-greyish-25 w-[94.5rem] flex flex-col py-[4rem] px-[0rem] box-border items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-[4.88rem] lg:w-auto lg:h-auto lg:flex-row md:flex-row sm:flex-col">
              <div className="relative w-[24.34rem] h-[24.19rem]">
                <div className="absolute top-[0rem] left-[0rem] w-[24.34rem] h-[24.19rem]">
                  <Image
                    className="absolute top-[0rem] left-[0rem] w-[23.31rem] h-[24.19rem] overflow-hidden object-cover"
                    alt=""
                    height={500}
                    width={500}
                    src="/Images/frame41@2x.png"
                  />
                  <div className="absolute h-[12.14%]  top-[70.67%] right-[0%] bottom-[17.18%] left-[65.34%] rounded-full bg-purple shadow-[0px_24px_24px_rgba(0,_0,_0,_0.25)] text-white flex flex-row py-[0.94rem]  box-border items-center justify-center ">
                    <div className="relative tracking-[-0.01em]">
                      Booking Now
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[1.88rem] text-[2.25rem] text-label-color-light-primary">
                <div className="relative tracking-[-0.02em] leading-[2.75rem] font-semibold">
                  Book a Room
                </div>
                <div className="relative text-[0.88rem] tracking-[-0.1px] leading-[1.25rem] text-gray-50 inline-block w-[21.5rem] h-[8.38rem] shrink-0">
                  Hourly basis rent refers to a rental agreement in which a
                  tenant pays rent for the use of a property or a service on an
                  hourly basis. This type of rental agreement is common in
                  situations where a tenant needs to use a property or service
                  for a short period of time, such as a conference room, a
                  co-working space, or a car rental.
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[4.88rem] text-[2.25rem] text-label-color-light-primary lg:w-auto lg:h-auto lg:flex-row md:flex-row sm:flex-col">
              <div className="flex flex-col items-start justify-start gap-[1.88rem]">
                <div className="relative tracking-[-0.02em] leading-[2.75rem] font-semibold">
                  Share Room
                </div>
                <div className="relative text-[0.88rem] tracking-[-0.1px] leading-[1.25rem] text-gray-50 inline-block w-[21.5rem] h-[8.38rem] shrink-0">
                  Hourly basis rent refers to a rental agreement in which a
                  tenant pays rent for the use of a property or a service on an
                  hourly basis. This type of rental agreement is common in
                  situations where a tenant needs to use a property or service
                  for a short period of time, such as a conference room, a
                  co-working space, or a car rental.
                </div>
              </div>

              <div className="relative w-[30.13rem] h-[26.7rem] text-[0.88rem] text-default-systemgray-03-dark font-default-bold-title1">
                <Image
                  className="absolute h-full w-[78.22%] top-[0%] right-[21.78%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  height={500}
                  width={500}
                  src="/Images/group-1171274936@2x.png"
                />
                <div className="absolute top-[9.63rem] left-[16.13rem] rounded-xl bg-white shadow-[0px_44px_34px_rgba(0,_0,_0,_0.07)] flex flex-col p-[1.25rem] items-start justify-start">
                  <div className="w-[11.5rem] flex flex-col py-[0.63rem] px-[0rem] box-border items-start justify-start gap-[0.63rem]">
                    <div className="w-[11.31rem] flex flex-row items-start justify-start gap-[0.63rem]">
                      <img
                        className="relative rounded w-[1rem] h-[1rem] overflow-hidden shrink-0"
                        alt=""
                        src="/svg/checkbox-input.svg"
                      />
                      <div className="relative leading-[145%] flex items-center w-[18.75rem] h-[1rem] shrink-0">
                        Share with Roommate
                      </div>
                    </div>
                    <div className="w-[11.5rem] flex flex-row items-start justify-start gap-[0.63rem]">
                      <img
                        className="relative rounded w-[1rem] h-[1rem] overflow-hidden shrink-0"
                        alt=""
                        src="/svg/checkbox-input1.svg"
                      />
                      <div className="relative leading-[145%] flex items-center w-[18.75rem] h-[1rem] shrink-0">
                        Hourly Rent
                      </div>
                    </div>
                    <div className="w-[11.5rem] flex flex-row items-start justify-start gap-[0.63rem]">
                      <img
                        className="relative rounded w-[1rem] h-[1rem] overflow-hidden shrink-0"
                        alt=""
                        src="/svg/checkbox-input1.svg"
                      />
                      <div className="relative leading-[145%] flex items-center w-[18.75rem] h-[1rem] shrink-0">
                        Share With Partner
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}
