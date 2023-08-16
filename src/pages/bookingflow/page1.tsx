import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/Container";
import { BsClockHistory, BsCalendar4 } from "react-icons/bs";
import styles from "./bookflow.module.css";
import Link from "next/link";
import Footer1 from "@/components/footer/Footer1";
export default function page1() {
  return (
    <div>
      <Navbar />
      <div className="mt-3">
        <Container>
          <div className={styles.heading}>Give your availability</div>
          <div className={styles.des}>
            In this step, we will ask you which type of stays you have and if
            guests will book the entire place or just a room. Then let us
            <br /> know the location and how many guests can stay.
          </div>
          <Link href="/">
            <div className={styles.day}>
              <div className="ml-2">Hour</div>
              <div className={styles.day1}>Day</div>
            </div>
          </Link>
          <div className="mt-6">
            <div className="flex gap-3 mt-6">
              <div>
                <div className="my-3">Check In</div>
                <div className={styles.date}>
                  <div>15/04/23</div>
                  <div className="hidden sm:block">
                    <BsCalendar4 className="ml-4 search-icon" />
                  </div>
                </div>
              </div>
              <div>
                <div className="my-3">Check Out</div>
                <div className={styles.date}>
                  <div>15/04/23</div>
                  <div className="hidden sm:block">
                    <BsCalendar4 className="ml-4 search-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-20 mb-10">
            <Link href="/partnerdetails">
              <button className="px-6 py-2 transition-colors duration-300 bg-white border rounded-full text-semibold black font- border-grey hover:bg-black hover:text-white hover:border-transparent">
                Back
              </button>
            </Link>

            <Link href="/bookingflow/page2">
              <button className="px-6 py-2 font-semibold text-white transition-colors duration-300 border border-white rounded-full bg-purple hover:bg-black hover:text-white hover:border-transparent">
                Next
              </button>
            </Link>
          </div>
        </Container>
      </div>
      <Footer1 />
    </div>
  );
}
