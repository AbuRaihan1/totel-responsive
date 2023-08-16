import RootLayout from "@/UI/RootLayout/RootLayout";
import Feature from "@/components/partnerhosting/Feature";
import ShareDetailsType from "@/components/proposal/ShareDetailsType";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BsFillPersonFill, BsFillPersonPlusFill } from "react-icons/bs";

type Props = {};

function ShareDetails({}: Props) {
  return (
    <div>
      <Head>
        <title>Proposal</title>
      </Head>

      <RootLayout>
        <div className="max-w-[83rem] py-10 mx-auto space-y-3">
          <div className="space-y-9">
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-base md:text-4xl font-semibold">
                  Who will share the room?
                </p>
                <p className="text-sm md:text-sm">
                  In this step, we'll ask you which type of stays you have and
                  if guests will book the entire place or just a room.
                </p>
              </div>

              <div className="flex items-center gap-5">
                <Feature text="Only me" Icon={BsFillPersonFill} />
                <Feature text="Multiple persons" Icon={BsFillPersonPlusFill} />
              </div>
            </div>

            <div className="space-y-8">
              <p className="font-semibold text-sm text-gray-50">
                Shareable details
              </p>
              <div className="space-y-5">
                <ShareDetailsType text="Persons" counter={10} />
                <ShareDetailsType text="Bedrooms" counter={2} />
                <ShareDetailsType text="Bathrooms" counter={4} />
                <ShareDetailsType text="Beds" counter={5} />
              </div>
            </div>

            <div className="w-full text-right space-x-3 mt-16">
              <Link href="/proposal/location">
                <button className="bg-black w-52 hover:bg-card hover:text-black text-white rounded-3xl px-4 py-2">
                  Back
                </button>
              </Link>

              <Link href="/proposal/amenities">
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

export default ShareDetails;
