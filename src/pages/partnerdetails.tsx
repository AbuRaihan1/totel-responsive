import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import styles from "../styles/hoteldetails.module.css";
import Container from "@/components/Container";
import Avatar from "@/core-components/csr/atoms/avatar";
import { IoShieldCheckmark } from "react-icons/io5";
import Detailscard from "@/components/detailcard/partnerdetailscard";
import { GiThreeLeaves } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";
import Footer1 from "@/components/footer/Footer1";
import Link from "next/link";
import { MdVerified, MdReport } from "react-icons/md";
import RootLayout from "@/UI/RootLayout/RootLayout";

export default function Hoteldetails() {
  return (
    <div>
      <RootLayout>
        <Link href="/">
          <button className="px-6 py-2 mb-4 ml-20 text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
            Back
          </button>
        </Link>
        <Container>
          <div className="flex flex-row items-center gap-3 p-4 rounded-full cursor-pointer md:py-1 md:px-2">
            <div className="md:block">
              <Avatar src={""} />
            </div>
            <div className={styles.hostedby}>John Ghazal</div>
            <div>
              <MdVerified />
            </div>
            <button className="px-6 py-2 ml-20 text-xs text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
              Follow
            </button>
          </div>
        </Container>
        <div>
          <div className="flex items-center justify-center gap-2 m-10">
            <div className="gap-2">
              <Image
                className={styles.img1}
                src="/Images/user.png"
                alt="Image"
                width={0}
                height={0}
                unoptimized
              />
            </div>

            <div className="gap-2">
              <div className="flex items-center justify-center gap-2">
                <div>
                  <Image
                    className={styles.img2}
                    src="/Images/user.png"
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </div>
                <div>
                  <Image
                    className={styles.img2}
                    src="/Images/user.png"
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </div>
              </div>
              <div className="mt-2">
                <Image
                  className={styles.img3}
                  src="/Images/user.png"
                  alt="Image"
                  width={0}
                  height={0}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mb-4">
            <Container>
              <div className="flex items-center justify-start gap-2 mt-2 ml-2">
                <IoShieldCheckmark />
                <div>
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </div>
              </div>
            </Container>
            <div>
              <Container>
                <div>
                  <div className={styles.des}>Description</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                    <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut
                    <br />
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris
                    <br />
                  </div>
                  <div>
                    <button className="px-6 py-2 mt-3 text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
                      <p className="text-xs">Show more</p>
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className={styles.des}>Amenities Looking for</div>
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
                    <button className="px-6 py-2 text-xs text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
                      Show more amenities
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className={styles.des}>Where you’ll be</div>
                  <div>
                    <Image
                      className={styles.maps}
                      src="/Images/Maps.png"
                      alt="Image"
                      width={0}
                      height={0}
                      unoptimized
                    />
                  </div>
                </div>
              </Container>
            </div>
          </div>

          <div className="mr-10">
            <Detailscard />
            <Link href="">
              <div className="flex items-center justify-center gap-2 mt-3 ">
                <MdReport />
                <div>Report this listing</div>
              </div>
            </Link>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}
