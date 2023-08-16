import React from "react";
import { MdVerified } from "react-icons/md";

function FindBestWay() {
  return (
    <div className="py-6 pb-10">
      <div className="text-center">
        <div className="text-center font-bold inline-block text-3xl">
          Find your best way
        </div>
        <div className="text-base  text-gray-50 text-center">
          You can find places and stay with hotels and home-stays ranked by
          travellers. What fun could we have more than having roommate with
          similar interest.
        </div>
      </div>

      <div className=" grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-2 gap-4 mt-10">
        <div className="relative mb-2 shadow-2xl pb-2 rounded-lg">
          <img
            className="rounded-t-lg h-[285px] w-full object-cover"
            alt=""
            src="/Images/rectangle-22111111@2x.png"
          />
          <MdVerified className="absolute h-[6.62%] w-[6.19%] top-[3.53%] right-[3.6%] bottom-[89.86%] left-[90.2%] max-w-full overflow-hidden max-h-full text-purple" />
          <div className="px-2">
            <div className="flex items-center justify-between mt-2">
              <h2 className="font-semibold text-xl">Name</h2>
              <p className="font-semibold text-md">23 yr / Male</p>
            </div>
            <p className="text-justify text-sm text-gray-50 mt-4">
              {" "}
              Looking for 1-2 roommates for a place in Manchester city centre
              (wanting to move in around August time) but happy to move in with
              more than that, I’m super easy going and tidy.
            </p>

            <p className="text-base text-purple p-2 rounded-lg font-semibold bg-light-primary text-center mt-2">
              Looking Near: Bristol, Bath & London
            </p>
          </div>
        </div>

        <div className="relative mb-2 shadow-2xl pb-2 rounded-lg">
          <img
            className="rounded-t-lg h-[285px] w-full object-cover"
            alt=""
            src="/Images/rectangle-111111111111@2x.png"
          />
          <MdVerified className="absolute h-[6.62%] w-[6.19%] top-[3.53%] right-[3.6%] bottom-[89.86%] left-[90.2%] max-w-full overflow-hidden max-h-full text-purple" />
          <div className="px-2">
            <div className="flex items-center justify-between mt-2">
              <h2 className="font-semibold text-xl">Name</h2>
              <p className="font-semibold text-md">23 yr / Male</p>
            </div>
            <p className="text-justify text-sm text-gray-50 mt-4">
              {" "}
              Looking for 1-2 roommates for a place in Manchester city centre
              (wanting to move in around August time) but happy to move in with
              more than that, I’m super easy going and tidy.
            </p>

            <p className="text-base text-purple p-2 rounded-lg font-semibold bg-light-primary text-center mt-2">
              Looking Near: Bristol, Bath & London
            </p>
          </div>
        </div>

        <div className="relative mb-2 shadow-2xl pb-2 rounded-lg">
          <img
            className="rounded-t-lg h-[285px] w-full object-cover"
            alt=""
            src="/Images/rectangle-121111@2x.png"
          />
          <MdVerified className="absolute h-[6.62%] w-[6.19%] top-[3.53%] right-[3.6%] bottom-[89.86%] left-[90.2%] max-w-full overflow-hidden max-h-full text-purple" />
          <div className="px-2">
            <div className="flex items-center justify-between mt-2">
              <h2 className="font-semibold text-xl">Name</h2>
              <p className="font-semibold text-md">23 yr / Male</p>
            </div>
            <p className="text-justify text-sm text-gray-50 mt-4">
              {" "}
              Looking for 1-2 roommates for a place in Manchester city centre
              (wanting to move in around August time) but happy to move in with
              more than that, I’m super easy going and tidy.
            </p>

            <p className="text-base text-purple p-2 rounded-lg font-semibold bg-light-primary text-center mt-2">
              Looking Near: Bristol, Bath & London
            </p>
          </div>
        </div>

        <div className="relative mb-2 shadow-2xl pb-2 rounded-lg">
          <img
            className="rounded-t-lg h-[285px] w-full object-cover"
            alt=""
            src="/Images/rectangle-2311111@2x.png"
          />
          <MdVerified className="absolute h-[6.62%] w-[6.19%] top-[3.53%] right-[3.6%] bottom-[89.86%] left-[90.2%] max-w-full overflow-hidden max-h-full text-purple" />
          <div className="px-2">
            <div className="flex items-center justify-between mt-2">
              <h2 className="font-semibold text-xl">Name</h2>
              <p className="font-semibold text-md">23 yr / Male</p>
            </div>
            <p className="text-justify text-sm text-gray-50 mt-4">
              {" "}
              Looking for 1-2 roommates for a place in Manchester city centre
              (wanting to move in around August time) but happy to move in with
              more than that, I’m super easy going and tidy.
            </p>

            <p className="text-base text-purple p-2 rounded-lg font-semibold bg-light-primary text-center mt-2">
              Looking Near: Bristol, Bath & London
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindBestWay;
