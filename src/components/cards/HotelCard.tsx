import React from "react";
import styles from "../Styles/HotelCard.module.css";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
export default function HotelCard() {
  return (
    <Link href="hoteldetails">
      <div className={styles.body}>
        <Image
          className={styles.img}
          src="/Images/room.jpg"
          alt="Hotel Image"
          width={0}
          height={0}
          unoptimized
        />
        <div className="p-4">
          <div className="flex">
            <h2 className={styles.hname}>Hotel Name</h2>
            <div className={styles.star}>
              <div>
                <FaRegStar />
              </div>
              <p className="text-lg font-semibold text-gray-700">4.2</p>
            </div>
          </div>

          <h2 className={styles.dates}>24 April 2023 - 28 April 2023</h2>
          <h3 className={styles.about}>
            But happy to move in with more than <br />
            that,I’m super easy going and tidy.
          </h3>

          <p className={styles.rate}>$200/night</p>
        </div>
      </div>
    </Link>
  );
}
