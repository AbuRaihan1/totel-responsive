import React from "react";
import styles from "../Styles/BlueCard1.module.css";
export default function Bluecard1() {
  return (
    <div className={styles.box}>
      <div className="flex flex-col md:flex-row items-center gap-5 justify-center mt-10">
        <div className="mt-3">
          <div className={styles.content1}>1% OF THE INDUSTRY</div>
          <div className={styles.content2}>
            <p>
              Welcome to your room sharing platform that
              <br /> which will rock your room stays truly at all.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center ml-24">
          <form>
            <div className={styles.txt}>Subscribe to our newsletter</div>
            <div className="flex items-center justify-center pb-1">
            <input
            className={styles.form}
              type="text"
              id="input"
              name="name"
              placeholder="Your name here"
            />
            <button type="submit" className={styles.submit}>Submit</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
