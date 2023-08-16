import RootLayout from "@/UI/RootLayout/RootLayout";
import { useUploadImages } from "@/hooks/useUploadImages";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import Swal from "sweetalert2";

function ParnterDetails() {
  return (
    <div>
      <Head>
        <title>Parnter Details</title>
      </Head>

      <RootLayout>
        <div className="my-8 px-32 overflow-y-auto flex flex-col text-gray-700">
          {/* name and address start */}
          <div className="mt-8 flex items-center">
            <div className="flex-1 flex">

            <div className="flex">
              <img
                src="https://i.ibb.co/k2nyZrJ/image.png"
                alt=""
                className="w-16 mr-4"
              />
            </div>
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
            <div className="flex gap-2 items-center">
            
               
              <div className="rounded-full cursor-pointer hover:bg-purple hover:text-white transition ring-card flex items-center gap-2 ring-1 px-7 py-2">
          <p className="font-semibold">Follow</p>
        </div>
              
              <p className="border border-card h-10 w-10 flex items-center justify-center rounded-full">
               
                <TbShare3 size={25} />{" "}
              </p>
            </div>
          </div>
          {/* name and address end */}

          {/* images grid start */}
          <div className="mt-8">
            <div className="flex gap-5">
              <img src="/Images/p1.png" alt="" className="w-6/12" />
              <div className="grid grid-cols-2 gap-2">
                <img src="/Images/p2.png" className="" alt="" />
                <img src="/Images/p3.png" className="" alt="" />
                <div className="col-span-2 mt-5">
                  <img src="/Images/p4.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="col-span-2">
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
              <div className="card rounded-3xl bg-base-100 shadow-xl border border-[#DAE0E6]">
                <div className="card-body">
                  <h3 className="text-2xl font-semibold">
                    $75 <span className="font-normal"> / night</span>{" "}
                  </h3>
                  <div className="mt-5">
                    <div className="flex flex-col gap-2">
                      <button className="btn btn-block border-card rounded-full">
                        Claim Cleaning Fees
                      </button>
                      <Link href="/proposal">
                        <button className="btn bg-purple text-white hover:bg-light-purple btn-block border-card rounded-full">
                          Send Proposal
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <img
                  src="https://i.ibb.co/B3gh62p/image.png"
                  className="mr-2 w-5"
                  alt=""
                />
                <p>Report this partner</p>
              </div>
            </div>
            {/* map start */}
            <div>
              <p className="my-8 text-2xl font-semibold">Where you will be</p>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221064.84269118926!2d-90.04737444823233!3d30.032893740892582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sen!2sin!4v1689183731155!5m2!1sen!2sin"
                  width="1300"
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
    </div>
  );
}

export default ParnterDetails;
