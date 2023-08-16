import {
  AiFillApple,
  AiOutlineGoogle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook, BsGooglePlay } from "react-icons/bs";
import { FaAppStore } from "react-icons/fa";
import Logo from "../navbar/Logo";
const Footer1 = () => {
  return (
    <div>
      <footer className="w-full py-4 overflow-x-hidden text-gray-400">
        <div className="container flex justify-around mx-2 text-black ">
          <div>
            <h2 className="text-sm font-semibold">Products</h2>
            <ul className="mt-3">
              <li className="mt-2">
                <a href="#" className="text-sm text-grey">
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
            <h3 className="text-sm font-semibold">Resourses</h3>
            <ul className="mt-2 text-sm">
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
            <h3 className="text-sm font-semibold ">Company</h3>
            <ul className="mt-2 text-sm">
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
              <li className="mt-2">
                <a href="#">
                  <BsGooglePlay size={28} />
                </a>
              </li>
              <li className="mt-3">
                <a href="#">
                  <FaAppStore size={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between p-8 px-[3.5rem] mx-20">
          <Logo />
          <span className="text-gray-50 text-md">
            © 2023 Totel. All Rights Reserved.
          </span>
          <div className="grid grid-flow-col gap-3">
            <BsFacebook />
            <AiOutlineGoogle />
            <AiFillApple />
            <AiOutlineInstagram size={18} />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer1;
