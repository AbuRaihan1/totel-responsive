import React from "react";
import styles from "../Styles/BlueCard1.module.css"
export default function Bluecard1() {
  return (
    <div className={styles.box}>
      <div className="px-[9.5rem]">
      <div className={styles.content1}>1% OF THE INDUSTRY</div>
      <div className={styles.content2}>
        <p>
        Welcome to your room sharing platform that which You can find places and<br/>
        stay with hotels and home-stays ranked by travellers. What fun could we<br/>
        have more than having roommate with similar interest.
        </p>
        
      </div>
      <div className={styles.button}>
        <button>Get started</button>
      </div>
      </div>
      
    </div>
  );
}
