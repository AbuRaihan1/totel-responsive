import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import RootLayout from "@/UI/RootLayout/RootLayout";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiFillPlusCircle, AiOutlinePlus } from "react-icons/ai";
import AddCardModal from "@/UI/Modal/AddCardModal";

function AddCard() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full">
      <Head>
        <title>Add Card</title>
      </Head>
      <RootLayout>
        <div className="flex gap-5 md:flex-row flex-col max-w-[84rem] mx-auto py-6 items-center ">
          <div className="space-y-5 w-full">
            <div>
              <h2 className="font-bold py-5 text-lg">Payment</h2>
              <div>
                <Image
                  width={516}
                  height={342}
                  src="/Images/product.png"
                  alt="Product"
                />
              </div>
              <p className="text-gray-50 text-sm py-2">Room Details</p>
              <div className="space-y-3">
                <h5 className="font-bold">Twentynine Palms, California</h5>
                <p className="text-sm text-gray-50">
                  11551 Fifth Street, CA, United States
                </p>
                <p className="text-sm text-gray-50">27 Mar - 30 March</p>
              </div>
              <div className=" border-[1px] border-t border-[#F2F2F7] w-full" />
            </div>

            <div className="flex gap-2 items-start">
              <BiUserCircle size={27} />

              <div className="space-y-2">
                <p className="font-semibold">konsikan@totel.com</p>
                <p className="text-gray-50 text-sm">(123) 456-7890</p>
                <p className="text-xs text-gray-50">
                  *We’ll provide your profile to your roommate.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5 w-full">
            <div className="space-y-3">
              <h2 className="font-semibold">Debit/Credit Card</h2>
              <div>
                <div className="flex items-center">
                  <Image
                    width={28}
                    height={17}
                    src="/svg/master-card.svg"
                    alt="ms"
                  />
                  <span className="ml-3 text-[15px] font-semibold">
                    **** **** **** 1728
                  </span>
                  <div className="ml-auto">
                    <input
                      name="refund-card"
                      type="radio"
                      className="form-radio h-7 w-7"
                    />
                  </div>
                </div>
              </div>

              <p className="my-5 border-t border-[#F2F2F7]"></p>

              <div>
                <div className="flex items-center">
                  <Image
                    width={28}
                    height={17}
                    src="/svg/western-union.svg"
                    alt="ms"
                  />
                  <span className="ml-3 text-[15px] font-semibold">
                    **** **** **** 2930
                  </span>
                  <div className="ml-auto">
                    <input
                      name="refund-card"
                      type="radio"
                      className="form-radio h-7 w-7"
                    />
                  </div>
                </div>
              </div>

              <p className="my-5 border-t border-[#F2F2F7]"></p>

              <div>
                <div className="flex items-center">
                  <Image width={28} height={17} src="/svg/visa.svg" alt="ms" />
                  <span className="ml-3 text-[15px] font-semibold">
                    **** **** **** 3423
                  </span>
                  <div className="ml-auto">
                    <input
                      name="refund-card"
                      type="radio"
                      className="form-radio h-7 w-7"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center pb-5">
                <button
                  type="button"
                  onClick={() => setVisible(true)}
                  className="group flex items-center gap-2 text-[15px] font-semibold text-purple"
                >
                  <span className="group-hover:underline">Add New Card</span>
                  <AiOutlinePlus size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-semibold">Payment Methods</h2>
              <div className="flex gap-2 items-center">
                <div className="flex gap-3 items-center flex-1">
                  <FcGoogle size={25} />
                  <p className="text-sm font-semibold">Google Pay</p>
                </div>
                <input
                  name="refund-card"
                  type="radio"
                  className="form-radio h-7 w-7"
                />
              </div>
              <div className=" border-[1px] border-t border-[#F2F2F7] w-full" />
              <div className="flex gap-2 items-center">
                <div className="flex gap-3 items-center flex-1">
                  <img src="/svg/paypal.svg" alt="paypal" className="h-6 w-6" />
                  <p className="text-sm font-semibold">Pay Pal</p>
                </div>
                <input
                  name="refund-card"
                  type="radio"
                  className="form-radio h-7 w-7"
                />
              </div>
              <div className=" border-[1px] border-t border-[#F2F2F7] w-full" />
              <div className="flex gap-2 items-center">
                <div className="flex gap-3 items-center flex-1">
                  <AiFillApple size={25} />
                  <p className="text-sm font-semibold">Apple Pay</p>
                </div>
                <input
                  name="refund-card"
                  type="radio"
                  className="form-radio h-7 w-7"
                />
              </div>
              <div className=" border-[1px] border-t border-[#F2F2F7] w-full" />
            </div>
            <div className="w-full justify-end flex">
              <button className="w-1/2 mt-8  text-white rounded-full bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary">
                Pay USD $920.00
              </button>
            </div>
          </div>
        </div>
      </RootLayout>
      <AddCardModal visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default AddCard;
