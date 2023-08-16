import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/Container";
import { BsClockHistory, BsCalendar4 } from "react-icons/bs";
import styles from "./bookflow.module.css";
import Link from "next/link";
import Footer1 from "@/components/footer/Footer1";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
export default function page1() {
  return (
    <div>
      <Navbar />
      <div className="mt-3">
        <Container>
          <div className={styles.heading}>
            Tell about the booked room details.
          </div>
          <div className={styles.des}>
            In this step, we will ask you which type of stays you have and if
            guests will book the entire place or just a room. Then let us
            <br /> know the location and how many guests can stay.
          </div>

          <div className="flex items-center gap-4 mt-10">
            <div className={styles.circle}>
              <AiOutlineMinus />
            </div>
            <div className={styles.long}>USD $80.00 / Per Day</div>
            <div className={styles.circle}>
              <AiOutlinePlus />
            </div>
          </div>

          <div className="flex justify-between mt-20 mb-10">
            <Link href="/bookingflow/page1">
              <button className="px-6 py-2 transition-colors duration-300 bg-white border rounded-full text-semibold black font- border-grey hover:bg-black hover:text-white hover:border-transparent">
                Back
              </button>
            </Link>

            <Link href="/bookingflow/page3">
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
