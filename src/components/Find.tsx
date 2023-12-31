import React from "react";
import { BsClockHistory, BsCalendar4 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import styles from "./Styles/Find.module.css";
import Link from "next/link";
import Date from "../pages/date";
export default function Find() {
  return (
    <div className="xl:mx-12 m-2 text-center bg-[url('/Images/roomstays.png')] flex overflow-x-auto px-5 py-2 rounded-2xl xl:justify-center">
      <div className="flex items-center justify-center my-3">
        <div>
          <p className="font-semibold text-left text-white">Where</p>
          <div className="my-4">
            <input
              type="text"
              className={styles.where}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="ml-5">
          <p className="mx-2 font-semibold text-left text-white">Check-In</p>
          <div className="flex items-center justify-center gap-2 my-4">
            <div className={styles.date}>
              <div>15/04/23</div>
              <div className="hidden sm:block">
                <BsCalendar4 className="ml-4 search-icon" />
              </div>
            </div>
            <div className={styles.time}>
              <div>08:00_AM</div>
              <div className="hidden sm:block">
                <BsClockHistory className="mr-3 search-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 ">
          <p className="mx-2 font-semibold text-left text-white">Check-Out</p>
          <div className="flex items-center justify-center gap-1 my-4">
            <div className={styles.date}>
              <div>15/04/23</div>
              <div className="hidden sm:block">
                <BsCalendar4 className="ml-4 search-icon" />
              </div>
            </div>
            <div className={styles.time}>
              <div>08:00_AM</div>
              <div className="hidden sm:block">
                <BsClockHistory className="mr-3 search-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-10 h-10 mt-5 ml-3 rounded-full bg-purple hover:cursor-pointer">
          <Link href="searchfindstays">
            <div className="text-center text-white sm:block ">
              <BiSearch className="mt-3 ml-3 search-icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
