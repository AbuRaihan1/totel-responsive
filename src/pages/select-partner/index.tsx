// Import Swiper React components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./slider.css";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper select-partner-swiper h-[600px] md:w-[545px] w-full relative rounded-2xl"
      >
        <div className="border">
          <SwiperSlide className="relative">
            <div className="relative">
              <div>
                <img src="/Images/slider-img1.png" alt="" className="" />
                <div className="absolute  bottom-0 top-[340px] left-0 pl-7 bg-gradient-to-b from-transparent to-black bg-opacity-30">
                  <h2 className="text-[28px] font-bold text-[#FFF]">
                    Heeshi <span className="text-[24px] ml-3">25y</span>
                  </h2>
                  <h3 className="text-[20px] text-[#FFF] font-semibold">
                    $300 - 400$ / Month
                  </h3>
                  <h3 className="text-[20px] text-[#FFF] font-semibold">
                    Available from - 28 Aug 2023
                  </h3>
                  <p className="text-[#DBDBDB] text-[16px]">
                    Looking for 1-2 roommates for a place in Manchester city
                    centre (wanting to move in around August time).
                  </p>

                  <div className=" flex mt-5 items-center justify-center gap-10">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        className="bg-gradient-to-r from-[#FF7070] to-[#BA0000] rounded-full cursor-pointer"
                      >
                        <path
                          d="M14.3486 14.3484L33.6517 33.6514M14.3486 33.6514L33.6517 14.3484"
                          stroke="white"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 37 37"
                        fill="none"
                        className="bg-gradient-to-r from-[#06E775] via-[#00DC6D] to-[#76FFB9] rounded-full p-1 cursor-pointer"
                      >
                        <path
                          d="M18.5911 32.8634L16.3776 30.8484C8.51608 23.7195 3.32593 19.0026 3.32593 13.2476C3.32593 8.53071 7.02009 4.85181 11.7218 4.85181C14.3779 4.85181 16.9272 6.08828 18.5911 8.02696C20.255 6.08828 22.8043 4.85181 25.4604 4.85181C30.1621 4.85181 33.8562 8.53071 33.8562 13.2476C33.8562 19.0026 28.6661 23.7195 20.8045 30.8484L18.5911 32.8634Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="relative">
              <div>
                <img src="/Images/slider-img1.png" alt="" className="" />
                <div className="absolute  bottom-0 top-[340px] left-0 pl-7 bg-gradient-to-b from-transparent to-black bg-opacity-30">
                  <h2 className="text-[28px] font-bold text-[#FFF]">
                    Heeshi <span className="text-[24px] ml-3">25y</span>
                  </h2>
                  <h3 className="text-[20px] text-[#FFF] font-semibold">
                    $300 - 400$ / Month
                  </h3>
                  <h3 className="text-[20px] text-[#FFF] font-semibold">
                    Available from - 28 Aug 2023
                  </h3>
                  <p className="text-[#DBDBDB] text-[16px]">
                    Looking for 1-2 roommates for a place in Manchester city
                    centre (wanting to move in around August time).
                  </p>

                  <div className=" flex mt-5 items-center justify-center gap-10">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        className="bg-gradient-to-r from-[#FF7070] to-[#BA0000] rounded-full cursor-pointer"
                      >
                        <path
                          d="M14.3486 14.3484L33.6517 33.6514M14.3486 33.6514L33.6517 14.3484"
                          stroke="white"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 37 37"
                        fill="none"
                        className="bg-gradient-to-r from-[#06E775] via-[#00DC6D] to-[#76FFB9] rounded-full p-1 cursor-pointer"
                      >
                        <path
                          d="M18.5911 32.8634L16.3776 30.8484C8.51608 23.7195 3.32593 19.0026 3.32593 13.2476C3.32593 8.53071 7.02009 4.85181 11.7218 4.85181C14.3779 4.85181 16.9272 6.08828 18.5911 8.02696C20.255 6.08828 22.8043 4.85181 25.4604 4.85181C30.1621 4.85181 33.8562 8.53071 33.8562 13.2476C33.8562 19.0026 28.6661 23.7195 20.8045 30.8484L18.5911 32.8634Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="relative">
              <div>
                <img src="/Images/slider-img1.png" alt="" className="" />
                <div className="absolute  bottom-0 top-[340px] left-0 pl-7 bg-gradient-to-b from-transparent to-black bg-opacity-30">
                  <h2 className="text-[28px] font-bold text-[#FFF]">
                    Heeshi <span className="text-[24px] ml-3">25y</span>
                  </h2>
                  <h3 className="text-[20px] text-[#FFF] font-semibold">
                    $300 - 400$ / Month
                  </h3>
                  <h3 className="text-[20px] text-[#FFF] font-semibold">
                    Available from - 28 Aug 2023
                  </h3>
                  <p className="text-[#DBDBDB] text-[16px]">
                    Looking for 1-2 roommates for a place in Manchester city
                    centre (wanting to move in around August time).
                  </p>

                  <div className=" flex mt-5 items-center justify-center gap-10">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        className="bg-gradient-to-r from-[#FF7070] to-[#BA0000] rounded-full cursor-pointer"
                      >
                        <path
                          d="M14.3486 14.3484L33.6517 33.6514M14.3486 33.6514L33.6517 14.3484"
                          stroke="white"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 37 37"
                        fill="none"
                        className="bg-gradient-to-r from-[#06E775] via-[#00DC6D] to-[#76FFB9] rounded-full p-1 cursor-pointer"
                      >
                        <path
                          d="M18.5911 32.8634L16.3776 30.8484C8.51608 23.7195 3.32593 19.0026 3.32593 13.2476C3.32593 8.53071 7.02009 4.85181 11.7218 4.85181C14.3779 4.85181 16.9272 6.08828 18.5911 8.02696C20.255 6.08828 22.8043 4.85181 25.4604 4.85181C30.1621 4.85181 33.8562 8.53071 33.8562 13.2476C33.8562 19.0026 28.6661 23.7195 20.8045 30.8484L18.5911 32.8634Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="relative">
              <div>
                <img src="/Images/slider-img1.png" alt="" className="" />
                <div className="absolute  bottom-0 top-[340px] left-0 pl-7 bg-gradient-to-b from-transparent to-black bg-opacity-30">
                  <h2 className="text-[28px] font-bold text-[#FFF]">
                    Heeshi <span className="text-[24px] ml-3">25y</span>
                  </h2>
                  <h3 className="text-[20px] text-[#FFF] font-semibold">
                    $300 - 400$ / Month
                  </h3>
                  <h3 className="text-[20px] text-[#FFF] font-semibold">
                    Available from - 28 Aug 2023
                  </h3>
                  <p className="text-[#DBDBDB] text-[16px]">
                    Looking for 1-2 roommates for a place in Manchester city
                    centre (wanting to move in around August time).
                  </p>

                  <div className=" flex mt-5 items-center justify-center gap-10">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        className="bg-gradient-to-r from-[#FF7070] to-[#BA0000] rounded-full cursor-pointer"
                      >
                        <path
                          d="M14.3486 14.3484L33.6517 33.6514M14.3486 33.6514L33.6517 14.3484"
                          stroke="white"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 37 37"
                        fill="none"
                        className="bg-gradient-to-r from-[#06E775] via-[#00DC6D] to-[#76FFB9] rounded-full p-1 cursor-pointer"
                      >
                        <path
                          d="M18.5911 32.8634L16.3776 30.8484C8.51608 23.7195 3.32593 19.0026 3.32593 13.2476C3.32593 8.53071 7.02009 4.85181 11.7218 4.85181C14.3779 4.85181 16.9272 6.08828 18.5911 8.02696C20.255 6.08828 22.8043 4.85181 25.4604 4.85181C30.1621 4.85181 33.8562 8.53071 33.8562 13.2476C33.8562 19.0026 28.6661 23.7195 20.8045 30.8484L18.5911 32.8634Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
