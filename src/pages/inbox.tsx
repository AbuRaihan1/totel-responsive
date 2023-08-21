import RootLayout from "@/UI/RootLayout/RootLayout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineEmojiHappy, HiOutlineStar } from "react-icons/hi";
import { IoMdAttach } from "react-icons/io";
import io from "socket.io-client";
import ListingSideBar from "./ListingSideBar";

const ENDPOINT = "http://localhost:5001";
let socket = io(ENDPOINT);

function Inbox() {
  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");
  const [typing, setTyping] = useState(false);
  const [acceptProposal, setAcceptProposal] = useState(false);
  const [makePayment, setMakePayment] = useState(false);
  const router = useRouter();

  socket.on("message received", (data: any) => {
    console.log(data);
    setContent(data);
  });

  const handleClick = () => {
    setAcceptProposal(true);
    setMakePayment(true);
  };

  const handleMakePayment = () => {
    router.push("/make-payment");
  };

  return (
    <div>
      <Head>
        <title>Inbox</title>
      </Head>
      <RootLayout>
        <div className="bg-white pt-3 text-[0.94rem] text-gray-50 grid grid-cols-[17.5rem,1fr]">
          <ListingSideBar />
          <div className="flex">
            <div className="border border-[#DAE0E6] border-b-0 min-h-[94vh]">
              <div className="card cursor-pointer hover:bg-[#F8F9FB] rounded-none">
                <div className="w-[350px] p-4">
                  <div>
                    <div className="flex items-center">
                      <div className="w-3/12">
                        <div className="w-14 rounded-full mr-2">
                          <img
                            src="https://i.ibb.co/BGD1m1Y/image.png"
                            className=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between  w-9/12">
                          <p className="font-semibold text-black">Brian Ford</p>
                          <p className="font-medium -mr-16 text-gray-50">
                            10:00 PM
                          </p>
                        </div>
                        <div>
                          <p className="inline-block">
                            Cursus id vitae quam vulputate tem ut. Sit proin
                            arcu nislga lorem ips...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card cursor-pointer hover:bg-[#F8F9FB] rounded-none">
                <div className="w-[350px] p-4">
                  <div>
                    <div className="flex items-center">
                      <div className="w-3/12">
                        <div className="w-14 rounded-full mr-2">
                          <img
                            src="https://i.ibb.co/XX2hhRM/image.png"
                            className=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between  w-9/12">
                          <p className="font-semibold text-black">John Due</p>
                          <p className="font-medium -mr-16 text-gray-50">
                            10:00 PM
                          </p>
                        </div>
                        <div>
                          <p className="inline-block">
                            Cursus id vitae quam vulputate tem ut. Sit proin
                            arcu nislga lorem ips...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card cursor-pointer hover:bg-[#F8F9FB] rounded-none">
                <div className="w-[350px] p-4">
                  <div>
                    <div className="flex items-center">
                      <div className="w-3/12">
                        <div className="w-14 rounded-full mr-2">
                          <img
                            src="https://i.ibb.co/CwL4MxK/image.png"
                            className=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between  w-9/12">
                          <p className="font-semibold text-black">Jinny Rose</p>
                          <p className="font-medium -mr-16 text-gray-50">
                            10:00 PM
                          </p>
                        </div>
                        <div>
                          <p className="inline-block">
                            Cursus id vitae quam vulputate tem ut. Sit proin
                            arcu nislga lorem ips...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="p-6 border border-x-0 border-[#DAE0E6] bg-[#FAFBFC] flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/C9mVh08/image.png"
                    className=""
                    alt=""
                  />
                  <h5 className="text-lg font-semibold ml-2 text-black">
                    Brian Ford
                  </h5>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="border border-gray-50 h-9 w-9 flex items-center justify-center rounded-full">
                    {" "}
                    <HiOutlineStar size={20} />{" "}
                  </p>
                  <p className="border border-gray-50 h-9 w-9 flex items-center justify-center rounded-full">
                    {" "}
                    <BsThreeDots size={20} />{" "}
                  </p>
                </div>
              </div>
              {/* chat section start */}
              <div className="px-8 py-6 custom-scrollbar-container max-h-[72vh] overflow-y-auto">
                <div className="flex items-start">
                  <img
                    src="https://i.ibb.co/C9mVh08/image.png"
                    className="mr-2"
                    alt=""
                  />
                  <div>
                    <div className="card shadow w-9/12 px-4 py-3">
                      <p>
                        Id ultricies quis ipsum eu nibh ullamcorper pharetra
                        velit orci. Nulla nunc augue in sit. Nulla ultrices
                        adipiscing turpis placerat in tempor sagittis tortor.
                      </p>
                    </div>
                    <p className="font-medium mt-2">08:15 PM</p>
                  </div>
                </div>
                <div className="flex items-start  justify-end text-right">
                  <div className="text-right">
                    <div className="card w-9/12 bg-purple text-white ms-auto shadow px-4 py-3">
                      <p>
                        Faucibus nisi sagittis orci magna porta. Mi quam tellus
                        lectus dig nis sim. Pellentesque vestibulum integer ac
                        aliquam faci lisis maec enas purus, massa.
                      </p>
                    </div>
                    <p className="font-medium mt-2">08:40 PM</p>
                  </div>
                  <img
                    src="https://i.ibb.co/G9cSLzd/image.png"
                    className="ml-2"
                    alt=""
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <img
                    src="https://i.ibb.co/2dZTLnq/image.png"
                    className="w-full"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/Vthvtcg/image.png"
                    className="w-full"
                    alt=""
                  />
                  <img
                    src="https://i.ibb.co/VNx8z38/image.png"
                    className="w-full"
                    alt=""
                  />
                </div>

                <div className="divider">
                  <hr className="w-full" />
                  <h2>Today</h2>
                  <hr className="w-full" />
                </div>
                <div className="flex items-start">
                  <img
                    src="https://i.ibb.co/C9mVh08/image.png"
                    className="mr-2"
                    alt=""
                  />
                  <div>
                    <div className="card shadow w-9/12 px-4 py-3">
                      <p>
                        Id ultricies quis ipsum eu nibh ullamcorper pharetra
                        velit orci. Nulla nunc augue in sit. Nulla ultrices
                        adipiscing turpis placerat in tempor sagittis tortor.
                      </p>
                    </div>
                    <p className="font-medium mt-2">08:15 PM</p>
                  </div>
                </div>
                <div className="flex items-start  justify-end text-right">
                  <div className="text-right">
                    <div className="card w-9/12 bg-purple text-white ms-auto shadow px-4 py-3">
                      <p>
                        Faucibus nisi sagittis orci magna porta. Mi quam tellus
                        lectus dig nis sim. Pellentesque vestibulum integer ac
                        aliquam faci lisis maec enas purus, massa.
                      </p>
                    </div>
                    <p className="font-medium mt-2">08:40 PM</p>
                  </div>
                  <img
                    src="https://i.ibb.co/G9cSLzd/image.png"
                    className="ml-2"
                    alt=""
                  />
                </div>
                <div className="flex items-start  justify-end text-right">
                  <div className="text-right">
                    <div className="card w-9/12 bg-purple text-white ms-auto shadow px-4 py-3">
                      <p>
                        Faucibus nisi sagittis orci magna porta. Mi quam tellus
                        lectus dig nis sim. Pellentesque vestibulum integer ac
                        aliquam faci lisis maec enas purus, massa.
                      </p>
                    </div>
                    <p className="font-medium mt-2">08:40 PM</p>
                  </div>
                  <img
                    src="https://i.ibb.co/G9cSLzd/image.png"
                    className="ml-2"
                    alt=""
                  />
                </div>
                <div className="flex items-start">
                  <img
                    src="https://i.ibb.co/C9mVh08/image.png"
                    className="mr-2"
                    alt=""
                  />
                  <div>
                    <div className="card shadow w-9/12 px-4 py-3">
                      <p>
                        Id ultricies quis ipsum eu nibh ullamcorper pharetra
                        velit orci. Nulla nunc augue in sit. Nulla ultrices
                        adipiscing turpis placerat in tempor sagittis tortor.
                      </p>
                    </div>
                    <p className="font-medium mt-2">08:15 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img
                    src="https://i.ibb.co/C9mVh08/image.png"
                    className="mr-2"
                    alt=""
                  />
                  <div>
                    <div className="card w-96 mt-8 bg-base-100 shadow-xl">
                      <figure>
                        <img src="https://i.ibb.co/d4G3ysX/image.png" alt="" />
                      </figure>
                      <div className="card-body">
                        <div className="!badge border-none text-tiny font-medium !bg-[#F0FAF0] !text-green-shade-700 gap-2">
                          <img
                            src="https://i.ibb.co/phkkcyN/image.png"
                            className="w-2"
                            alt=""
                          />
                          Hourly Basis
                        </div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h2 className="text-xl font-semibold text-black">
                              Hotel Assenzio Karoeke
                            </h2>
                            <p className="font-medium text-black">
                              25 Apr 2023 - 28 Apr 2023
                            </p>
                            <p>Place: Bristol</p>
                            <p className="font-semibold text-black">
                              Proposed Amount-$18 / Hour
                            </p>
                          </div>
                          <div>
                            <p className="border border-gray-50 h-9 w-9 flex items-center justify-center rounded-full">
                              {" "}
                              <BsThreeDots size={20} />{" "}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={handleClick}
                          className="btn !bg-purple !text-white hover:text-black rounded-full"
                        >
                          Accept Proposal
                        </button>
                      </div>
                    </div>
                    <p className="font-medium mt-2">09:15 PM</p>
                  </div>{" "}
                </div>
                <div className="flex items-start justify-end text-right">
                  <div className="text-right">
                    <div className="card w-9/12 bg-purple text-white ms-auto shadow px-4 py-3">
                      <p>
                        Hey,, I got a proposal from you. It is good to stay with
                        you. I show your profile. I wan to stay with you for my
                        vacation. But can we negotiate the amount of hourly
                        rate.
                      </p>
                    </div>
                    <p className="font-medium mt-2">08:40 PM</p>
                  </div>
                  <img
                    src="https://i.ibb.co/G9cSLzd/image.png"
                    className="ml-2"
                    alt=""
                  />
                </div>
                <div className="flex items-start">
                  <img
                    src="https://i.ibb.co/C9mVh08/image.png"
                    className="mr-2"
                    alt=""
                  />
                  <div>
                    <div className="card shadow w-full px-4 py-3">
                      <p>
                        Yes, We can, I appreciate your time to consider my
                        proposal.
                      </p>
                    </div>
                    <p className="font-medium mt-2">08:15 PM</p>
                  </div>
                </div>
                {acceptProposal && (
                  <div className="flex items-start justify-end text-right">
                    <div className="text-right">
                      <div>
                        <div className="card w-96 mt-8 bg-base-100 shadow-xl">
                          <figure>
                            <img
                              src="https://i.ibb.co/d4G3ysX/image.png"
                              alt=""
                            />
                          </figure>
                          <div className="card-body text-left">
                            <div className="!badge border-none text-tiny font-medium !bg-[#F0FAF0] !text-green-shade-700 gap-2">
                              <img
                                src="https://i.ibb.co/phkkcyN/image.png"
                                className="w-2"
                                alt=""
                              />
                              Hourly Basis
                            </div>
                            <div className="flex items-start justify-between">
                              <div>
                                <h2 className="text-xl font-semibold text-black">
                                  Hotel Assenzio Karoeke
                                </h2>
                                <p className="font-medium text-black">
                                  25 Apr 2023 - 28 Apr 2023
                                </p>
                                <p>Place: Bristol</p>
                                <p className="font-semibold text-black">
                                  Proposed Amount-$18 / Hour
                                </p>
                              </div>
                              <div>
                                <p className="border border-gray-50 h-9 w-9 flex items-center justify-center rounded-full">
                                  {" "}
                                  <BsThreeDots size={20} />{" "}
                                </p>
                              </div>
                            </div>
                            <div className="!badge border-none text-tiny font-medium !bg-[#F0FAF0] !text-green-shade-700 gap-2">
                              You have accepted the proposal
                            </div>
                          </div>
                        </div>
                        <p className="font-medium mt-2">09:15 PM</p>
                      </div>{" "}
                    </div>
                    <img
                      src="https://i.ibb.co/G9cSLzd/image.png"
                      className="ml-2"
                      alt=""
                    />
                  </div>
                )}
                {makePayment && (
                  <div>
                    <div className="card w-96 mt-8 bg-base-100 shadow-xl">
                      <figure>
                        <img src="https://i.ibb.co/d4G3ysX/image.png" alt="" />
                      </figure>
                      <div className="card-body">
                        <div className="!badge border-none text-tiny font-medium !bg-[#F0FAF0] !text-green-shade-700 gap-2">
                          <img
                            src="https://i.ibb.co/phkkcyN/image.png"
                            className="w-2"
                            alt=""
                          />
                          Hourly Basis
                        </div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h2 className="text-xl font-semibold text-black">
                              Hotel Assenzio Karoeke
                            </h2>
                            <p className="font-medium text-black">
                              25 Apr 2023 - 28 Apr 2023
                            </p>
                            <p>Place: Bristol</p>
                            <p className="font-semibold text-black">
                              Proposed Amount-$18 / Hour
                            </p>
                          </div>
                          <div>
                            <p className="border border-gray-50 h-9 w-9 flex items-center justify-center rounded-full">
                              {" "}
                              <BsThreeDots size={20} />{" "}
                            </p>
                          </div>
                        </div>
                        <div className="!badge border-none text-tiny font-medium !bg-[#F0FAF0] !text-green-shade-700 gap-2">
                          @johndue has accepted the proposal
                        </div>
                        <button
                          onClick={handleMakePayment}
                          className="btn !bg-purple !text-white hover:text-black rounded-full"
                        >
                          Make Payment
                        </button>
                      </div>
                    </div>
                    <p className="font-medium mt-2">09:15 PM</p>
                  </div>
                )}
              </div>
              {/* chat section end */}
              <div className="p-8 flex items-center bg-[#F8F9FB]">
                <img
                  src="https://i.ibb.co/VSsTXgn/image.png"
                  className="mr-4 w-12"
                  alt=""
                />
                <input
                  type="text"
                  className="relative focus:outline-none p-3 border-none rounded outline-none shadow w-full"
                  placeholder="write you message here..."
                />
                <div className="flex items-center absolute right-10">
                  <p>
                    {" "}
                    <HiOutlineEmojiHappy size={25} className="mr-2" />{" "}
                  </p>
                  <p>
                    {" "}
                    <IoMdAttach size={25} />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default Inbox;
