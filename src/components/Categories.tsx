import Image from "next/image";
import Cards from "./cards/cards";
import styles from "./Styles/Categories.module.css";
import { IoMapSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { RiArrowDropDownLine } from "react-icons/Ri";

export default function CategoryBox() {
  return (
    <div className="">
      <div className="flex overflow-x-auto items-center my-5 py-4 px-5 gap-4 xl:justify-center">
        <button className={styles.button}>
          <p className={styles.text}>Price</p>
          <div className="ml-2">
            <RiArrowDropDownLine />
          </div>
        </button>
        <button className={styles.button}>
          <p className={styles.text}>Type of place</p>
        </button>
        <button className={styles.button}>
          <p className={styles.text}>Free Cancellations</p>
        </button>
        <button className={styles.button}>
          <p className={styles.text}>WiFi</p>
        </button>
        <button className={styles.button}>
          <p className={styles.text}>Air Conditioning</p>
        </button>
        <button className={styles.button}>
          <p className={styles.text}>Washer</p>
        </button>
        <button className={styles.button}>
          <p className={styles.text}>Dryer</p>
        </button>
        <button className={styles.button}>
          <p className={styles.text}>Free Parking</p>
        </button>
        <button className={styles.button}>
          <div className="mr-2">
            <FiFilter />
          </div>
          <p className={styles.text}>Filter</p>
        </button>
        <button className={styles.button}>
          <div className="mr-2">
            <IoMapSharp />
          </div>
          <p className={styles.text}>Show in Map </p>
        </button>
      </div>
      <Cards />
    </div>
  );
}
