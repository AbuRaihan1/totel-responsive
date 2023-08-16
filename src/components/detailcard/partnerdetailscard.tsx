import React from "react";
import styles from "./detailcard.module.css";
import Link from "next/link";
export default function detailscard() {
  return (
    <div className={styles.box}>
      <div className="flex items-center gap-1 ">
        <div className={styles.rate}>$75-$90</div>{" "}
        <div className={styles.rate2}>/ night</div>
      </div>

      <div className="flex items-center gap-1 mt-4">
        <div>
          <button className="px-6 py-2 font-bold text-black transition-colors duration-300 bg-white border rounded-full border-grey hover:bg-black hover:text-white hover:border-transparent">
            Send Message
          </button>
        </div>
        <div>
          <Link href="/bookingflow/page1">
            <button className="px-6 py-2 font-bold text-white transition-colors duration-300 border border-white rounded-full bg-purple text-wj hover:bg-grey hover:text-white hover:border-transparent">
              Send Proposal
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-4 ml-20">
        <p>You won’t be charged yet</p>
      </div>
    </div>
  );
}
