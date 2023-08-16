import Navbar from "@/components/navbar/Navbar";
import Footer from "@/UI/FooterM/Footer";
import {
  AiOutlineInstagram,
  AiOutlineGoogle,
  AiFillApple,
} from "react-icons/ai";
import { BsFacebook, BsGooglePlay } from "react-icons/bs";
import { RiAppleLine } from "react-icons/ri";
import Logo from "@/components/navbar/Logo";
import { FiHome, FiMenu } from "react-icons/fi";

const hostFlowRooms = () => {
  return (
    <div>
      <Navbar />
      <hr className="border-[#dfdfdf]" />
      <div className="mt-5 mx-3 space-y-4">
        <div className="font-semibold text-[32px] leading-10 tracking-[-0.01em]">
          Which of these best describes your place?
        </div>
        <div className="text-lg leading-[26px] tracking-[-0.1px]">
          <p>
            In this step, well ask you which type of stays you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </div>
        <div className="flex justify-evenly flex-wrap gap-y-2">
          <button className="gap-1.5 h-[38px] border shadow-[0px_1px_2px_rgba(16,24,40,0.04)] px-[22px] py-2 rounded-[18px] border-solid border-[#DAE0E6] flex">
            <FiMenu className="mt-1" />
            <span>Home</span>
          </button>
          <button className="gap-1.5 h-[38px] border shadow-[0px_1px_2px_rgba(16,24,40,0.04)] px-[22px] py-2 rounded-[18px] border-solid border-[#DAE0E6] flex">
            <FiMenu className="mt-1" />
            <span>Apartement</span>
          </button>
          <button className="gap-1.5 h-[38px] border shadow-[0px_1px_2px_rgba(16,24,40,0.04)] px-[22px] py-2 rounded-[18px] border-solid border-[#DAE0E6] flex">
            <FiHome className="mt-1" />
            <span>House</span>
          </button>
          <button className="gap-1.5 h-[38px] border shadow-[0px_1px_2px_rgba(16,24,40,0.04)] px-[22px] py-2 rounded-[18px] border-solid border-[#DAE0E6] flex">
            <FiMenu className="mt-1" />
            <span>Flat</span>
          </button>
        </div>
      </div>
      <div className="my-4 px-10 py-5 border-t-2 border-t-[#dfdfdf] flex justify-between">
        <button className="gap-1.5 w-[73px] h-[38px] border shadow-[0px_1px_2px_rgba(16,24,40,0.04)] px-[22px] py-2 rounded-[18px] border-solid border-[#DAE0E6">
          Back
        </button>
        <button className="w-[72px] h-[38px] bg-[#574EFA] text-white shadow-[0px_1px_2px_rgba(16,24,40,0.04)] rounded-[18px]">
          Next
        </button>
      </div>
      <footer className="w-full py-4">
        <div className="flex flex-col space-y-3 ml-14 md:flex-row md:justify-around mx-2 text-black ">
          <div>
            <h2 className="text-sm font-semibold leading-6 tracking-[-0.1px] text-[#272D37]">
              Products
            </h2>
            <ul className="text-[#5F6D7E] font-medium text-sm leading-6 tracking-[-0.1px] mt-3">
              <li className="mt-2">
                <a href="#" className="text-sm">
                  Features
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-sm">
                  Integration
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-sm">
                  Enterprise
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-sm">
                  Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 tracking-[-0.1px] text-[#272D37]">
              Resourses
            </h3>
            <ul className="text-[#5F6D7E] font-medium text-sm leading-6 tracking-[-0.1px] mt-2">
              <li className="mt-2">
                <a href="#">Partner</a>
              </li>
              <li className="mt-2">
                <a href="#">Developers</a>
              </li>
              <li className="mt-2">
                <a href="#">Community</a>
              </li>
              <li className="mt-2">
                <a href="#">Apps</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 tracking-[-0.1px] text-[#272D37] ">
              Company
            </h3>
            <ul className="text-[#5F6D7E] font-medium text-sm leading-6 tracking-[-0.1px] mt-2">
              <li className="mt-2">
                <a href="#">About Us</a>
              </li>
              <li className="mt-2">
                <a href="#">Carrier</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Mobile App</h2>
            <ul className="mt-4 text-sm">
              <li className="mt-3">
                <a href="#">
                  <RiAppleLine size={28} />
                </a>
              </li>
              <li className="mt-2">
                <a href="#">
                  <BsGooglePlay size={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-between  p-8 ">
          <Logo />
          <span className="text-gray-50 text-md">
            © 2023 Totel. All Rights Reserved.
          </span>
          <div className="grid grid-flow-col gap-3">
            <BsFacebook size={50} />
            <AiOutlineGoogle size={50} />
            <AiFillApple size={50} />
            <AiOutlineInstagram size={50} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default hostFlowRooms;
