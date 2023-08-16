import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/Container";
import { BsClockHistory, BsCalendar4 } from "react-icons/bs";
import styles from "./bookflow.module.css";
import Link from "next/link";
import Footer1 from "@/components/footer/Footer1";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Date from "../date";
export default function page1() {
  return (
    <div>
      <Navbar />
      <div className="mt-3">
        <Container>
          <div className={styles.heading}>Set your availability</div>
          <div className={styles.des}>
            Short titles work best. Have fun with it – you can always change it
            later.
          </div>
          <div className={styles.cal}>
            <Date />
          </div>
          <div className="flex justify-between mt-20 mb-10">
            <Link href="/bookingflow/page2">
              <button className="px-6 py-2 transition-colors duration-300 bg-white border rounded-full text-semibold black font- border-grey hover:bg-black hover:text-white hover:border-transparent">
                Back
              </button>
            </Link>

            <Link href="/">
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
