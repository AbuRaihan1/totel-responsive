import React from "react";
import { FaApple, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import FooterInfo from "./FooterInfo";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-[url('/svg/shade.svg')] bg-no-repeat mt-6">
      <div className="text-base-white py-10">
        <div className="text-white ">
          <div className="font-semibold py-5 mt-4  text-center">
            1% OF THE INDUSTRY
          </div>
          <div className="text-2xl text-center leading-[42px] font-medium">
            Welcome to your room sharing platform thatwhich will rock your room
            stays truly at all.
          </div>

          <div className="text-center mt-5">
            <input
              className="w-[94%] md:w-1/2 bg-white rounded-full py-2 px-4 text-black outline-none "
              placeholder="Subsribe to our Newsletter"
              type="text"
            />
          </div>
          <button className="text-white bg-black px-6 py-2 rounded-full block m-auto mt-3 ">
            Submit
          </button>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}

export default Footer;
