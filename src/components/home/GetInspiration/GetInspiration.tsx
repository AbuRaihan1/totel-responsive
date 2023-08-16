import React from "react";

type Props = {};

function GetInspiration({}: Props) {
  return (
    <div className=" bg-[#F8F8FF] mt-9 py-10">
      <div className="text-13xl text-gray-700">
        <div className="font-bold  text-2xl tracking-[-0.02em] leading-[40px] text-center sm:text-3xl md:text-4xl lg:6xl">
          Get inspiration for your next stay
        </div>
        <div className="text-base tracking-[-0.1px] leading-[24px] text-gray-50 text-center break-all px-4 mt-4">
          You can find places and stay with hotels and home-stays ranked by
          travellers. What fun could we have more than having roommate with
          Desert Education Filters Browse from categories Get inspiration for
          your next stay You can find places and stay with hotels and home-stays
          ranked by travellers. What fun could we have m similar interest.
        </div>
      </div>

      <div className="justify-center items-center gap-5 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-2 mt-10">
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className="relative rounded-lg shadow-2xl">
            <img
              className="rounded-t-4xs w-full h-[285px] object-cover"
              alt=""
              src="/Images/rectangle-24@2x.png"
            />
            <div className=" p-2">
              <h2 className="text-2xl font-semibold">South Haven</h2>
              <p className="font-medium">185</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Min $25 - $32 / Day</p>
                <button className="text-sm text-purple font-semibold text-purple-secondary-600 hover:bg-light-purple hover:text-white p-1 rounded">
                  See more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetInspiration;
