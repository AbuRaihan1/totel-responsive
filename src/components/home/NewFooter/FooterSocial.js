import React from "react";
import Link from "next/link";
import { FaApple, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

const FooterSocial = () => {
  return (
    <footer className="md:flex pb-10 justify-between items-center px-10 bg-white text-base-content flex-row mt-2 border-none">
      <div className="">
        <Link href="/">
          <img
            className="w-[109.68px] h-[32.65px]"
            alt=""
            src="/svg/main_logo.svg"
          />
        </Link>
      </div>
      <div className="">
        <p className="text-[16px] font-[400] text-[#5F6D7E] mt-2 font-inter">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
      <div className="flex gap-6 lg:mt-0 mt-4">
        <Link href="#">
          <FaFacebook size={25} />
        </Link>
        <Link href="#">
          <FaGoogle size={25} />
        </Link>
        <Link href="#">
          <FaApple size={25} />
        </Link>
        <Link href="#">
          <FaInstagram size={25} />
        </Link>
      </div>
    </footer>
  );
};

export default FooterSocial;
