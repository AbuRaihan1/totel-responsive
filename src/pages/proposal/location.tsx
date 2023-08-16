import RootLayout from "@/UI/RootLayout/RootLayout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

type Props = {};

function Location({}: Props) {
  return (
    <div>
      <Head>
        <title>Proposal</title>
      </Head>
      <RootLayout>
        <div className="max-w-[83rem] py-10 mx-auto space-y-3">
          <div className="space-y-9">
            <div className="space-y-2">
              <p className="text-base md:text-4xl font-semibold">
                Where’s your place located?
              </p>
              <p className="text-sm md:text-sm">
                In this step, we'll ask you which type of stays you have and if
                guests will book the entire place or just a room.
              </p>
            </div>
            <div className="flex flex-col gap-4 mb-4 ">
              <p className="text-gray-50 text-sm font-semibold pt-5">
                Add Address
              </p>
              <div className="flex rounded-3xl gap-3 items-center px-2 ring-1 py-2 ring-card w-1/2">
                <IoLocationOutline />
                <input
                  type="text"
                  className="w-full flex-1 outline-none placeholder:font-semibold "
                  placeholder="Enter your address "
                />
              </div>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221064.84269118926!2d-90.04737444823233!3d30.032893740892582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sen!2sin!4v1689183731155!5m2!1sen!2sin"
                width="1340"
                height="475"
                loading="lazy"
                style={{ borderRadius: "20px" }}
              ></iframe>
            </div>

            <div className="w-full text-right space-x-3 ">
              <Link href="/proposal/pricing">
                <button className="bg-black w-52 hover:bg-card hover:text-black text-white rounded-3xl px-4 py-2">
                  Back
                </button>
              </Link>

              <Link href="/proposal/share-details">
                <button className="bg-purple w-52 hover:bg-light-purple text-white rounded-3xl px-4 py-2">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default Location;
