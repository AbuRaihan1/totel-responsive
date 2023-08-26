// import React from "react";
// import Navbar from "@/components/navbar/Navbar";
// import Image from "next/image";
// import styles from "../styles/hoteldetails.module.css";
// import Container from "@/components/Container";
// import Avatar from "@/core-components/csr/atoms/avatar";
// import HiShieldCheck from "react-icons/hi";
// import { IoShieldCheckmark } from "react-icons/io5";
// import Detailscard from "@/components/detailcard/detailscard";
// import { GiThreeLeaves } from "react-icons/gi";
// import { TbToolsKitchen2 } from "react-icons/tb";
// import Footer1 from "@/components/footer/Footer1";
// import Link from "next/link";

// export default function Hoteldetails() {
//   return (
//     <div>
//       <Navbar />
//       <div>
//         <Link href="room-stays">
//           <button className="px-6 py-2 ml-10 text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent font-semibold mt-6">
//             Back
//           </button>
//         </Link>

//         <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 lg:mx-10 mx-2 mt-10">
//           <div className="">
//             <Image
//               className="rounded-3xl w-full h-[700px]"
//               src="/Images/room.jpg"
//               alt="Image"
//               width={0}
//               height={0}
//               unoptimized
//             />
//           </div>

//           <div className="gap-2">
//             <div className="grid lg:grid-cols-2 gap-6 sm:grid-cols-2 grid-cols-1">
//               <div>
//                 <Image
//                   className="w-full rounded-3xl"
//                   src="/Images/room.jpg"
//                   alt="Image"
//                   width={0}
//                   height={0}
//                   unoptimized
//                 />
//               </div>
//               <div>
//                 <Image
//                   className="w-full rounded-3xl"
//                   src="/Images/room.jpg"
//                   alt="Image"
//                   width={0}
//                   height={0}
//                   unoptimized
//                 />
//               </div>
//             </div>

//             <div className="mt-2">
//               <Image
//                 className="w-full h-[350px] rounded-3xl"
//                 src="/Images/room.jpg"
//                 alt="Image"
//                 width={0}
//                 height={0}
//                 unoptimized
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* hosted by part start from here  */}
//       <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-16 mx-10">
//         <div className="mb-4">
//           <div className="flex items-center md:py-1 md:px-2 justify-between">
//             <div className="flex items-center gap-2">
//               <Avatar src={""} />
//               <div className={styles.hostedby}>Hosted by Gahazal</div>
//             </div>

//             <button className="px-6 py-2 text-sm text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent font-semibold">
//               View Profile
//             </button>
//           </div>

//           <div className="flex items-center justify-start gap-2 mt-2 ml-2">
//             <IoShieldCheckmark />
//             <div>
//               To protect your payment, never transfer money or communicate
//               outside of the Airbnb website or app.
//             </div>
//           </div>

//           <div>
//             <div>
//               <div className={styles.des}>Description</div>
//               <div>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 <br />
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 <br />
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 <br />
//               </div>
//               <div>
//                 <button className="px-6 py-2 mt-3 text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
//                   <p className="text-sm font-semibold">Show more</p>
//                 </button>
//               </div>
//               <div className="mt-4">
//                 <div className={styles.des}>Offered Amenities</div>
//                 <div className="flex gap-20 my-4">
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <GiThreeLeaves />
//                     </div>
//                     <div> Garden View</div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <TbToolsKitchen2 />
//                     </div>
//                     <div>Kitchen</div>
//                   </div>
//                 </div>
//                 <div className="flex gap-20 my-4">
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <GiThreeLeaves />
//                     </div>
//                     <div> Garden View</div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <TbToolsKitchen2 />
//                     </div>
//                     <div>Kitchen</div>
//                   </div>
//                 </div>
//                 <div className="flex gap-20 my-4">
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <GiThreeLeaves />
//                     </div>
//                     <div> Garden View</div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <TbToolsKitchen2 />
//                     </div>
//                     <div>Kitchen</div>
//                   </div>
//                 </div>
//                 <div className="flex gap-20 my-4">
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <GiThreeLeaves />
//                     </div>
//                     <div> Garden View</div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <TbToolsKitchen2 />
//                     </div>
//                     <div>Kitchen</div>
//                   </div>
//                 </div>
//                 <div className="flex gap-20 my-4">
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <GiThreeLeaves />
//                     </div>
//                     <div> Garden View</div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <TbToolsKitchen2 />
//                     </div>
//                     <div>Kitchen</div>
//                   </div>
//                 </div>
//                 <div className="flex gap-20 my-4">
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <GiThreeLeaves />
//                     </div>
//                     <div> Garden View</div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <TbToolsKitchen2 />
//                     </div>
//                     <div>Kitchen</div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <button className="px-6 py-2 text-sm text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent font-semibold">
//                   Show more amenities
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="">
//           <Detailscard />
//         </div>
//       </div>

//       <div className="md:w-3/4 mx-auto w-full m-16">
//         <div className={styles.des}>Where you’ll be</div>
//         <div className="mapouter mx-6">
//           <div className="gmap_canvas">
//             <iframe
//               className="gmap_iframe"
//               width="100%"
//               frameBorder="0"
//               scrolling="no"
//               src="https://maps.google.com/maps?width=564&amp;height=400&amp;hl=en&amp;q=Banani, Dhaka, Bangladesh&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//             ></iframe>
//           </div>
//           <style>
//             {`
//           .mapouter{position:relative;}
//           .gmap_canvas{overflow:hidden;background:none!important;height:400px;}
//           .gmap_iframe{height:400px!important;}
//         `}
//           </style>
//         </div>
//       </div>
//       <Footer1 />
//     </div>
//   );
// }

import RootLayout from "@/UI/RootLayout/RootLayout";
import Head from "next/head";
import Link from "next/link";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Hoteldetails() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date());

  const [isSeeMoreDetailsOpen, setIsSeeMoreDetailsOpen] = useState(false);

  const openPopup = () => {
    setIsSeeMoreDetailsOpen(true);
  };

  const closePopup = () => {
    setIsSeeMoreDetailsOpen(false);
  };

  const bookingTimeSlots = [
    {
      dayName: "Monday",
      date: "21",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
    {
      dayName: "Tuesday",
      date: "22",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
    {
      dayName: "Wednesday",
      date: "23",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
    {
      dayName: "Thursday",
      date: "24",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
    {
      dayName: "Friday",
      date: "25",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
    {
      dayName: "Saturday",
      date: "26",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },

    {
      dayName: "Sunday",
      date: "27",
      dayTimeSlots: [
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
      ],
    },
  ];

  return (
    <section>
      <Head>
        <title>Hotel Details</title>
      </Head>
      <RootLayout>
        <div className="my-8 px-32 relative overflow-y-auto flex flex-col text-gray-700">
          <Link href="room-stays">
            <button className="btn border border-[#DAE0E6] btn-sm absolute top-0 rounded-full">
              Back
            </button>
          </Link>
          {/* name and address start */}
          <div className="mt-10 flex items-center justify-between">
            <div>
              <h3 className="text-4xl font-bold">Cerulean Tower Tokyu Hotel</h3>
              <p className="font-medium text-gray-50">
                26-1 Sakuragaokacho, Shibuya City, Tokyo 150-8512, Japan
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="border border-gray-50 h-10 w-10 flex items-center justify-center rounded-full">
                {" "}
                <AiOutlineLike size={25} />{" "}
              </p>
              <p className="border border-gray-50 h-10 w-10 flex items-center justify-center rounded-full">
                {" "}
                <TbShare3 size={25} />{" "}
              </p>
            </div>
          </div>
          {/* name and address end */}

          {/* images grid start */}
          <div className="mt-8">
            <div className="flex gap-5">
              <img
                src="https://i.ibb.co/h94r75j/image.png"
                alt=""
                className="w-6/12"
              />
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="https://i.ibb.co/LxNTXZ2/image.png"
                  className=""
                  alt=""
                />
                <img
                  src="https://i.ibb.co/K6tRrxN/image.png"
                  className=""
                  alt=""
                />
                <div className="col-span-2 mt-5">
                  <img src="https://i.ibb.co/MhryDnT/image.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* images grid end */}

          {/* host and room details start */}
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="col-span-2">
              {/* image and name with the view profile btn start */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex">
                    <img
                      src="https://i.ibb.co/k2nyZrJ/image.png"
                      alt=""
                      className="w-16 mr-4"
                    />
                    <div>
                      <div className="flex items-center">
                        <img
                          src="https://i.ibb.co/0mjD2gY/image.png"
                          alt=""
                          className="mr-1 w-4"
                        />
                        <p>Identity verified</p>
                      </div>
                      <h3 className="text-2xl font-medium">Hosted by Ghazal</h3>
                    </div>
                  </div>
                </div>
                <button className="btn rounded-full">View Profile</button>
              </div>
              {/* image and name with the view profile btn end */}

              <div className="mt-4 flex items-center">
                <img
                  src="https://i.ibb.co/Fbtd42b/image.png"
                  alt=""
                  className="w-6 mr-4"
                />
                <p>
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </p>
              </div>

              {/* room details start */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Available rooms</h3>
                <p className="mt-6 text-base font-medium mb-2">
                  2 of 4 Rooms Available
                </p>
                <div className="grid grid-cols-2 h-2">
                  <div className="bg-purple rounded-s-md"></div>
                </div>
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold">Description</h2>
                  <p className="mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className="btn rounded-xl mt-4 mb-8">See More</button>
                  {/* amenities start */}
                  <p className="text-2xl font-semibold">Offered Amenities</p>
                  <div className="grid grid-cols-2 mt-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/SKBFKDQ/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Garden View</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/MskS3pD/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Free Wifi</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/RCpGVYm/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Free Washer</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/GkdbtCZ/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Air Conditioning</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/x6B8ZmW/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Refrigerator</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/QN9GxjJ/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Kitchen</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/MBgWq2D/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Pets Allowed</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/7CVDQcJ/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Dryer</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/NS91j5N/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Security cameras on property</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="https://i.ibb.co/T4k1pG5/image.png"
                          className="w-8 mr-4"
                          alt=""
                        />
                        <p>Bicycle</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn rounded-full mt-4">
                      Show more amenities
                    </button>
                  </div>
                  {/* amenities end */}
                </div>
              </div>
              {/* room details end */}
            </div>
            <div className="">
              <Tabs>
                <div className="card rounded-3xl bg-base-100 shadow-xl border border-[#DAE0E6]">
                  <div className="card-body">
                    <h3 className="text-2xl font-semibold">
                      $75 <span className="font-normal"> / night</span>{" "}
                    </h3>
                    <div className="mt-5">
                      <TabList>
                        <div className="border-card border rounded-full flex gap-2 w-[138px] h-[44px] p-[1px]">
                          <Tab className=" px-4 py-2 rounded-full text-[#49556D] text-[15px] font-[600]">
                            <button>Hour</button>
                          </Tab>
                          <Tab className="text-[#49556D] text-[15px] font-[600] px-4 py-2 rounded-full  ">
                            <button>Day</button>
                          </Tab>
                        </div>
                      </TabList>

                      {/* hour tab pannel  */}
                      <TabPanel>
                        <p className="text-[#272D37] text-sm font-[500] mt-4">
                          Select Duration
                        </p>
                        <select className="select border border-card focus:outline-none w-full rounded-full mt-3 mb-[10px]  max-w-xs">
                          <option disabled selected>
                            1 hour
                          </option>
                          <option>2 hour</option>
                          <option>3 hour</option>
                          <option>4 hour</option>
                          <option>5 hour</option>
                          <option>6 hour</option>
                        </select>
                        <p className="text-[#574EFA] text-sm font-medium flex justify-end cursor-pointer">
                          See available time slots
                        </p>

                        <div className="mt-4">
                          <p className="text-tiny font-medium text-[#272D37]">
                            Guests
                          </p>
                          <select className="select border border-card focus:outline-none w-full rounded-full mt-2 mb-4  max-w-xs">
                            <option disabled selected>
                              Guests
                            </option>
                            <option>3 guests, 1 infant, 1 pet</option>
                            <option>2 guests</option>
                            <option>3 guests</option>
                            <option>1 guests, 1 infant, 1 pet</option>
                            <option>2 guests, 1 infant, 1 pet</option>
                          </select>
                        </div>
                        <button className="text-sm font-semibold bg-purple px-[18px] py-3 rounded-full w-full text-white">
                          Send Proposal
                        </button>

                        <p className="text-gray-50 text-center text-tiny mt-4">
                          You will not be charged yet
                        </p>
                        <div className="mt-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-black text-[16px] font-normal">
                                $75 x 7 nights
                              </p>
                            </div>
                            <div>
                              <p>$525</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p>Weekly discount</p>
                            </div>
                            <div>
                              <p className="text-[#10B981]">-$28</p>
                            </div>
                          </div>
                        </div>
                        <div className="border border-light-primary my-4"></div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">Total</p>
                          </div>
                          <div>
                            <p className="font-semibold">$493</p>
                          </div>
                        </div>

                        <button
                          className="text-sm font-semibold bg-purple px-[18px] py-3 rounded-full w-full text-white mt-4"
                          onClick={openPopup}
                        >
                          See more details
                        </button>

                        {isSeeMoreDetailsOpen && (
                          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 ">
                            <div className="overflow-auto bg-white rounded-lg p-6 pt-10 my-5 max-w-[1293px] lg:h-[1034px] w-full  h-auto  max-h-full py-10 mx-4 relative">
                              <button
                                onClick={closePopup}
                                className="absolute top-9 right-10 border-2 font-bold text-black h-8 w-8 flex justify-center items-center bg-gray-200 rounded-full p-1"
                              >
                                &#10005;
                              </button>
                              <div className="">
                                <div className="select-area grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start">
                                  <div>
                                    <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                                      Select Duration
                                    </p>
                                    <select className="select border border-card focus:outline-none w-[273px] rounded-full mt-2 mb-4  max-w-xs">
                                      {" "}
                                      <option disabled selected>
                                        Hour
                                      </option>
                                      <option>2 hour</option>
                                      <option>3 hour</option>
                                      <option>4 hour</option>
                                      <option>5 hour</option>
                                      <option>6 hour</option>
                                    </select>
                                  </div>

                                  <div>
                                    <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                                      Year
                                    </p>
                                    <select className="w-[206px] select border border-card focus:outline-none rounded-full mt-2 mb-4  max-w-xs">
                                      {" "}
                                      <option disabled selected>
                                        2023
                                      </option>
                                      <option>2023</option>
                                      <option>2024</option>
                                      <option>2025</option>
                                      <option>2026</option>
                                      <option>2027</option>
                                    </select>
                                  </div>

                                  <div>
                                    <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                                      Month
                                    </p>
                                    <select className="select border border-card focus:outline-none w-[206px] rounded-full mt-2 mb-4  max-w-xs">
                                      {" "}
                                      <option disabled selected>
                                        Month
                                      </option>
                                      <option>January</option>
                                      <option>February</option>
                                      <option>March</option>
                                      <option>April</option>
                                      <option>May</option>
                                      <option>June</option>
                                      <option>July</option>
                                      <option>August</option>
                                      <option>September</option>
                                      <option>October</option>
                                      <option>November</option>
                                      <option>December</option>
                                    </select>
                                  </div>

                                  <div>
                                    <p className="ml-2 mb-1 text-[#272D37] text-[16px] font-medium">
                                      Week
                                    </p>
                                    <select className="select border border-card focus:outline-none w-[206px] rounded-full mt-2 mb-4  max-w-xs">
                                      {" "}
                                      <option disabled selected>
                                        Week
                                      </option>
                                      <option>Week</option>
                                      <option>21st - 27st</option>
                                      <option>31st - 37st</option>
                                      <option>41st - 47st</option>
                                      <option>51st - 57st</option>
                                      <option>11st - 17st</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-between gap-2 mt-10">
                                {bookingTimeSlots.map((bookingTime, idx) => {
                                  return (
                                    <div key={idx} className="">
                                      <div className="text-center">
                                        <div className="border-t-8 rounded-xl bg-[#ECEBFF] text-purple text-[20px] font-semibold py-4 px-7 ">
                                          <h1 className="">
                                            {bookingTime.dayName}
                                          </h1>
                                          <p>{bookingTime.date}</p>
                                        </div>
                                        <div className="flex  flex-col">
                                          {bookingTime.dayTimeSlots.map(
                                            (dayTime, idx) => {
                                              return (
                                                <div
                                                  className="text-center flex"
                                                  key={idx}
                                                >
                                                  <button className="block mt-10 mx-auto text-[16px] font-medium text-[#929292]">
                                                    {dayTime}
                                                  </button>
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              <div>
                                <div className="mt-8 h-[10px] mx-6 rounded-full bg-gradient-to-b from-[#827BFF] to-[#DDDBFF]"></div>
                                <div className="flex justify-between items-center mt-5">
                                  <div className="flex gap-7 items-center  mx-6">
                                    <button className="text-[16px] font-medium text-purple">
                                      Available times
                                    </button>
                                    <button className="text-[16px] font-medium text-[#ABABBB]">
                                      Booked times
                                    </button>
                                  </div>

                                  <div className="gap-4 flex">
                                    <button className="bg-[#F3F2FF] px-5 py-3  font-semibold text-black text-sm rounded-full">
                                      Back
                                    </button>
                                    <button className="bg-purple px-5 py-3 font-semibold text-white text-sm rounded-full">
                                      Book time
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </TabPanel>

                      {/* day tab pannel  */}
                      <TabPanel>
                        <div>
                          <div className="grid grid-cols-2 gap-3 mt-5">
                            <div>
                              <label className="mb-2" htmlFor="checkIn">
                                Check-In
                              </label>
                              <Calendar
                                inputId="checkIn"
                                value={checkInDate}
                                onChange={(e: CalendarChangeEvent) =>
                                  setCheckInDate(e!.value as Date)
                                }
                                showIcon
                              />
                            </div>
                            <div>
                              <label className="mb-2" htmlFor="checkOut">
                                Check-Out
                              </label>
                              <Calendar
                                inputId="checkOut"
                                value={checkOutDate}
                                onChange={(e: CalendarChangeEvent) =>
                                  setCheckOutDate(e!.value as Date)
                                }
                                showIcon
                              />
                            </div>
                          </div>
                          <div className="my-5 flex items-center justify-between">
                            <div>
                              <img
                                src="https://i.ibb.co/kGx7RSB/image.png"
                                className="w-6"
                                alt=""
                              />
                            </div>
                            <div>
                              <p className="underline">Clear dates</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-tiny font-medium">Guests</p>
                            <select className="select border border-card focus:outline-none w-full rounded-full mt-3 mb-4  max-w-xs">
                              <option disabled selected>
                                Guests
                              </option>
                              <option>1 guests</option>
                              <option>2 guests</option>
                              <option>3 guests</option>
                              <option>1 guests, 1 infant, 1 pet</option>
                              <option>2 guests, 1 infant, 1 pet</option>
                              <option>3 guests, 1 infant, 1 pet</option>
                            </select>
                          </div>
                          <div>
                            <button className="btn bg-purple text-white hover:text-white hover:bg-purple btn-block border-card rounded-full mb-4">
                              Send Proposal
                            </button>
                          </div>
                          <p className="text-gray-50 text-center text-tiny mt-4">
                            You will not be charged yet
                          </p>
                          <div className="mt-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p>$75 x 7 nights</p>
                              </div>
                              <div>
                                <p>$525</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p>Cleaning fees</p>
                              </div>
                              <div>
                                <p>$20</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p>Weekly discount</p>
                              </div>
                              <div>
                                <p className="text-[#10B981]">-$28</p>
                              </div>
                            </div>
                          </div>
                          <div className="border border-light-primary my-4"></div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold">Total</p>
                            </div>
                            <div>
                              <p className="font-semibold">$513</p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center">
                  <img
                    src="https://i.ibb.co/B3gh62p/image.png"
                    className="mr-2 w-5"
                    alt=""
                  />
                  <p>Report this listing</p>
                </div>
              </Tabs>
            </div>
            {/* map start */}
            <div>
              <p className="my-8 text-2xl font-semibold">Where you will be</p>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221064.84269118926!2d-90.04737444823233!3d30.032893740892582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sen!2sin!4v1689183731155!5m2!1sen!2sin"
                  width="1650"
                  height="475"
                  loading="lazy"
                  style={{ borderRadius: "20px" }}
                ></iframe>
              </div>
              <p className="mt-6 mb-4">
                Very dynamic and appreciated district by the people of Bordeaux
                thanks to rue St James and place Fernand Lafargue. Home to many
                historical monuments such as the Grosse Cloche, the Porte de
                Bourgogne and the Porte Cailhau, and cultural sites such as the
                Aquitaine Museum.
              </p>
              <button className="btn rounded-xl mt-4 mb-8">See More</button>
            </div>
            {/* map end */}
          </div>
          {/* host and room details end */}
          {/* reviews start */}
          <div className="mt-8">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/9wjRYgq/image.png"
                className="w-6"
                alt=""
              />
              <div className="flex items-center">
                <h2 className="ml-1 font-bold text-2xl">5.0</h2>
                <img
                  src="https://i.ibb.co/RCFNTzy/image.png"
                  className="w-1 mx-2"
                  alt=""
                />
                <p className="font-medium">12 Reviews</p>
              </div>
            </div>
            <div className="my-8 grid grid-cols-3 gap-8">
              <div className="card">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/rmbSbrq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                </div>
                <div className="mt-6">
                  <p className="mb-6">
                    “Absolutely incredible. This place was definitely a dream!
                    From the entryway, to each floor... stunning”
                  </p>
                  <div>
                    <div className="flex">
                      <img
                        src="https://i.ibb.co/WPW29T8/image.png"
                        alt=""
                        className="w-12 mr-4"
                      />
                      <div>
                        <div className="">
                          <h3 className="font-medium">Dave Jones</h3>
                          <p className="text-[#5F6D7E]">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/rmbSbrq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                </div>
                <div className="mt-6">
                  <p className="mb-6">
                    “Absolutely incredible. This place was definitely a dream!
                    From the entryway, to each floor... stunning”
                  </p>
                  <div>
                    <div className="flex">
                      <img
                        src="https://i.ibb.co/WPW29T8/image.png"
                        alt=""
                        className="w-12 mr-4"
                      />
                      <div>
                        <div className="">
                          <h3 className="font-medium">Dave Jones</h3>
                          <p className="text-[#5F6D7E]">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/9wjRYgq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/rmbSbrq/image.png"
                    className="w-6 mr-1"
                    alt=""
                  />
                </div>
                <div className="mt-6">
                  <p className="mb-6">
                    “Absolutely incredible. This place was definitely a dream!
                    From the entryway, to each floor... stunning”
                  </p>
                  <div>
                    <div className="flex">
                      <img
                        src="https://i.ibb.co/WPW29T8/image.png"
                        alt=""
                        className="w-12 mr-4"
                      />
                      <div>
                        <div className="">
                          <h3 className="font-medium">Dave Jones</h3>
                          <p className="text-[#5F6D7E]">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="btn rounded-full">Show more reviews</button>
            </div>
          </div>
          {/* reviews end */}
        </div>
        {/* near by start */}
        <div className="bg-[#F9F9F9] py-16 px-32">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h1 className="text-4xl font-bold">Nearby hotels</h1>
              <p>
                You can find places and stay with hotels and home-stays ranked
                by travellers. What fun could we have more than having roommate
                with similar interest.
              </p>
            </div>
            <div>
              <button className="btn">Show More</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src="https://i.ibb.co/029MpwB/image.png" alt="" />
              </figure>
              <div className="card-body bg-white rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">Hotel Assenzio</h2>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/MPsBd9T/image.png"
                      className="w-5 mr-1"
                      alt=""
                    />
                    <p>4.2</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <h4 className="text-tiny font-medium">25 Apr 2022</h4>
                  <span className="mx-1 text-tiny font-medium"> - </span>
                  <h4 className="text-tiny font-medium">28 Apr 2022</h4>
                </div>
                <p className="text-tiny text-gray-50">
                  But happy to move in with more than that, I am super easy
                  going and tidy.
                </p>
                <h3 className="font-bold">$32 / Day</h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src="https://i.ibb.co/WxspM9T/image.png" alt="" />
              </figure>
              <div className="card-body bg-white rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">Hotel Assenzio</h2>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/MPsBd9T/image.png"
                      className="w-5 mr-1"
                      alt=""
                    />
                    <p>4.2</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <h4 className="text-tiny font-medium">25 Apr 2022</h4>
                  <span className="mx-1 text-tiny font-medium"> - </span>
                  <h4 className="text-tiny font-medium">28 Apr 2022</h4>
                </div>
                <p className="text-tiny text-gray-50">
                  But happy to move in with more than that, I am super easy
                  going and tidy.
                </p>
                <h3 className="font-bold">$32 / Day</h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src="https://i.ibb.co/6FPkZV3/image.png" alt="" />
              </figure>
              <div className="card-body bg-white rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">Hotel Assenzio</h2>
                  <div className="flex items-center">
                    <img
                      src="https://i.ibb.co/MPsBd9T/image.png"
                      className="w-5 mr-1"
                      alt=""
                    />
                    <p>4.2</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <h4 className="text-tiny font-medium">25 Apr 2022</h4>
                  <span className="mx-1 text-tiny font-medium"> - </span>
                  <h4 className="text-tiny font-medium">28 Apr 2022</h4>
                </div>
                <p className="text-tiny text-gray-50">
                  But happy to move in with more than that, I am super easy
                  going and tidy.
                </p>
                <h3 className="font-bold">$32 / Day</h3>
              </div>
            </div>
          </div>
        </div>
        {/* near by end */}
      </RootLayout>
    </section>
  );
}
