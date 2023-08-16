import React from 'react';
import Image from 'next/image';
const links = ['Room Stays', 'Find roommates'];
import Find from './Find';
export default function RoomStays() {
  return (
    <div className="my-2">
      <div className="relative">
        <Image
          src="/Images/Background.png"
          alt="Background Image"
          width={20}
          height={10}
          className="z-0 object-cover w-full "
          quality={100}
          unoptimized
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <div className="w-full p-8 mx-24 bg-white rounded-3xl">
            <div className="grid max-w-sm grid-cols-2 font-semibold bg-white ">
              {links.map((link) => (
                <div key={link} className="mb-2 text-purple">
                  <a href="#">{link}</a>
                </div>
              ))}
            </div>
            <p className="hidden text-2xl font-bold sm:block">
              You can find places and stay in <br /> hotels with roommates
            </p>
            <div className="flex items-center w-full my-2 overflow-y-hidden text-cente h-28 rounded-3xl ">
              <Find />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
