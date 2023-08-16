import React, { useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "primereact/menu";
import {  IoMdNotificationsOutline } from "react-icons/io";
import Notifications from "@/components/Notifications";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { MdOutlinePersonSearch, MdPermContactCalendar } from "react-icons/md";
import { FaHandsHelping, FaUserFriends } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
type Props = {};

function Nav({}: Props) {
  const menuLeft = useRef<Menu>(null);

  let items = [
    {
      label: "Profile",
      icon: "pi pi-fw pi-user",
      command: () => {
        window.location.href = "/editprofile";
      },
    },
    { label: "Settings", icon: "pi pi-fw pi-cog" },
    {
      label: "Signout",
      icon: "pi pi-sign-out",
      command: () => {
        localStorage.removeItem("auth-token");
        window.location.href = "/auth/login";
      },
    },
  ];
  return (
    <header className="h-[54px] z-10 font-text-button-semibold-large bg-white relative">
      <nav className="border-b-2   shadow-md bg-white  border-card px-24 py-2 flex justify-between items-center ">
        <div>
          <Link href="/">
            <img className="h-[32.65px]" alt="" src="/svg/main_logo.svg" />
          </Link>
        </div>

        <div className="flex items-center gap-12">
          <Link href="/room-stays">
            <p className="navlinks">Find Room</p>
          </Link>
          <Link href="/about">
            <p className="navlinks">About</p>
          </Link>
          <Link href="/career">
            <p className="navlinks">Career</p>
          </Link>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="dropdown dropdown-bottom">
              <label
                tabIndex={0}
                className="flex group items-center gap-1 cursor-pointer"
              >
                <p className="navlinks">Partner</p>
                <FiChevronDown className="mt-1 group-hover:text-purple" />
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 rounded-md bg-white w-60 mt-5 shadow-lg"
              >
                <div className="flex flex-col p-3 gap-6">
                 
                    <div className="flex group  items-center gap-2">
                      <MdOutlinePersonSearch
                        className="text-purple"
                        size={20}
                      />

                      <Link href="/looking-for-partner">
                        <p className="navlinks">Looking for partner</p>
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCreateSharp
                        className="text-purple"
                        size={20}
                      />

                      <Link href="/partner-hosting">
                        <p className="navlinks">Partner hosting</p>
                      </Link>
                    </div>
               
                 
                   
                 
                </div>
              </div>
            </div>
          </div>

          <Link href="/listing">
            <p className="navlinks">Listing</p>
          </Link>

          <div className="flex items-center gap-1 cursor-pointer">
            <div className="dropdown dropdown-bottom">
              <label
                tabIndex={0}
                className="flex group items-center gap-1 cursor-pointer"
              >
                <p className="navlinks">More</p>
                <FiChevronDown className="mt-1 group-hover:text-purple" />
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 rounded-md bg-white w-60 mt-5 shadow-lg"
              >
                <div className="flex flex-col p-3 gap-6">
                 
                    <div className="flex group  items-center gap-2">
                      <MdPermContactCalendar
                        className="text-purple"
                        size={20}
                      />

                      <Link href="/contact">
                        <p className="navlinks">Contact</p>
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiHelpCircle
                        className="text-purple"
                        size={20}
                      />

                      <Link href="/help">
                        <p className="navlinks">Help</p>
                      </Link>
                    </div>
               
                 
                    <div className="flex group  items-center gap-2">
                      <FaUserFriends
                        className="text-purple"
                        size={20}
                      />

                      <Link href="/ourpartners">
                        <p className="navlinks">Our Partners</p>
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaHandsHelping
                        className="text-purple"
                        size={20}
                      />

                      <Link href="/tutorial">
                        <p className="navlinks">Tutorial</p>
                      </Link>
                    </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-7 ">
          <div className="dropdown dropdown-bottom dropdown-end z-40">
            <label tabIndex={0}>
              <IoMdNotificationsOutline
                className="text-purple cursor-pointer"
                size={28}
              />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content max-h-[40rem] z-[1] menu shadow-lg mt-3 overflow-auto rounded-md bg-white p-7 w-[34rem]"
            >
              <Notifications />
            </div>
          </div>

          <img
            className="object-cover h-14 cursor-pointer"
            alt=""
            src="/Images/group-1000002732@2x.png"
            onClick={(event) => menuLeft!.current!.toggle(event)}
          />
        </div>
      </nav>
      <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
    </header>
  );
}

export default Nav;
