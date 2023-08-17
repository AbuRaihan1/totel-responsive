import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import styles from "../styles/hoteldetails.module.css";
import Container from "@/components/Container";
import Avatar from "@/core-components/csr/atoms/avatar";
import HiShieldCheck from "react-icons/hi";
import { IoShieldCheckmark } from "react-icons/io5";
import Detailscard from "@/components/detailcard/detailscard";
import { GiThreeLeaves } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";
import Footer1 from "@/components/footer/Footer1";
import Link from "next/link";

export default function Hoteldetails() {
  return (
    <div>
      <Navbar />
      <div>
        <Link href="room-stays">
          <button className="px-6 py-2 ml-10 text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent font-semibold mt-6">
            Back
          </button>
        </Link>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 lg:mx-10 mx-2 mt-10">
          <div className="">
            <Image
              className="rounded-3xl w-full h-[700px]"
              src="/Images/room.jpg"
              alt="Image"
              width={0}
              height={0}
              unoptimized
            />
          </div>

          <div className="gap-2">
            <div className="grid lg:grid-cols-2 gap-6 sm:grid-cols-2 grid-cols-1">
              <div>
                <Image
                  className="w-full rounded-3xl"
                  src="/Images/room.jpg"
                  alt="Image"
                  width={0}
                  height={0}
                  unoptimized
                />
              </div>
              <div>
                <Image
                  className="w-full rounded-3xl"
                  src="/Images/room.jpg"
                  alt="Image"
                  width={0}
                  height={0}
                  unoptimized
                />
              </div>
            </div>

            <div className="mt-2">
              <Image
                className="w-full h-[350px] rounded-3xl"
                src="/Images/room.jpg"
                alt="Image"
                width={0}
                height={0}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* hosted by part start from here  */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-16 mx-10">
        <div className="mb-4">
          <div className="flex items-center md:py-1 md:px-2 justify-between">
            <div className="flex items-center gap-2">
              <Avatar src={""} />
              <div className={styles.hostedby}>Hosted by Gahazal</div>
            </div>

            <button className="px-6 py-2 text-sm text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent font-semibold">
              View Profile
            </button>
          </div>

          <div className="flex items-center justify-start gap-2 mt-2 ml-2">
            <IoShieldCheckmark />
            <div>
              To protect your payment, never transfer money or communicate
              outside of the Airbnb website or app.
            </div>
          </div>

          <div>
            <div>
              <div className={styles.des}>Description</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                <br />
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                <br />
              </div>
              <div>
                <button className="px-6 py-2 mt-3 text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
                  <p className="text-sm font-semibold">Show more</p>
                </button>
              </div>
              <div className="mt-4">
                <div className={styles.des}>Offered Amenities</div>
                <div className="flex gap-20 my-4">
                  <div className="flex items-center gap-2">
                    <div>
                      <GiThreeLeaves />
                    </div>
                    <div> Garden View</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <TbToolsKitchen2 />
                    </div>
                    <div>Kitchen</div>
                  </div>
                </div>
                <div className="flex gap-20 my-4">
                  <div className="flex items-center gap-2">
                    <div>
                      <GiThreeLeaves />
                    </div>
                    <div> Garden View</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <TbToolsKitchen2 />
                    </div>
                    <div>Kitchen</div>
                  </div>
                </div>
                <div className="flex gap-20 my-4">
                  <div className="flex items-center gap-2">
                    <div>
                      <GiThreeLeaves />
                    </div>
                    <div> Garden View</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <TbToolsKitchen2 />
                    </div>
                    <div>Kitchen</div>
                  </div>
                </div>
                <div className="flex gap-20 my-4">
                  <div className="flex items-center gap-2">
                    <div>
                      <GiThreeLeaves />
                    </div>
                    <div> Garden View</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <TbToolsKitchen2 />
                    </div>
                    <div>Kitchen</div>
                  </div>
                </div>
                <div className="flex gap-20 my-4">
                  <div className="flex items-center gap-2">
                    <div>
                      <GiThreeLeaves />
                    </div>
                    <div> Garden View</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <TbToolsKitchen2 />
                    </div>
                    <div>Kitchen</div>
                  </div>
                </div>
                <div className="flex gap-20 my-4">
                  <div className="flex items-center gap-2">
                    <div>
                      <GiThreeLeaves />
                    </div>
                    <div> Garden View</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <TbToolsKitchen2 />
                    </div>
                    <div>Kitchen</div>
                  </div>
                </div>
              </div>
              <div>
                <button className="px-6 py-2 text-sm text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent font-semibold">
                  Show more amenities
                </button>
              </div>
            </div>
            <div className="">
              <div className={styles.des}>Where you’ll be</div>
              <div>here will be map</div>
            </div>
          </div>
        </div>
        <div className="">
          <Detailscard />
        </div>
      </div>
      <Footer1 />
    </div>
  );
}
