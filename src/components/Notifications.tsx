import React from "react";

function Notifications() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="font-bold  text-md md:text-xl">Notifications</div>
      <div className="flex items-center gap-4 ">
        <div className="rounded-full cursor-pointer hover:bg-purple hover:text-white transition ring-card flex items-center gap-2 ring-1 px-7 py-2">
          <p className="font-semibold">All</p>
        </div>
        <div className="rounded-full cursor-pointer hover:bg-purple hover:text-white transition ring-card flex items-center gap-2 ring-1 px-7 py-2">
          <p className="font-semibold">Today</p>
        </div>
        <div className="rounded-full cursor-pointer hover:bg-purple hover:text-white transition ring-card flex items-center gap-2 ring-1 px-7 py-2 whitespace-nowrap">
          <p className="font-semibold">Last Week</p>
        </div>
        <div className="rounded-full cursor-pointer whitespace-nowrap hover:bg-purple hover:text-white transition ring-card flex items-center gap-2 ring-1 px-7 py-2">
          <p className="font-semibold">Last Month</p>
        </div>
      </div>

      <div className="space-y-7">
        <div className="space-y-5">
          <p className="text-gray-50 text-sm font-semibold">Today</p>
          {[1, 2, 3].map((item, i) => (
            <div key={i} className="flex items-start gap-5">
              <div>
                <img
                  className="rounded-full w-14 h-12"
                  src="/Images/picturenotify.png"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Why don’t you claim a fees by cleaning the room
                  <span className="font-bold mx-2">@stella_jue</span>
                </p>
                <p className="text-gray-50 text-tiny">5 min ago</p>
              </div>
              <div>
                <img
                  className=" w-20 h-14 object-contain"
                  src="/Images/notify.png"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <p className="text-gray-50 text-sm font-semibold">This week</p>
          {[1, 2].map((item, i) => (
            <div key={i} className="flex items-start gap-5">
              <div>
                <img
                  className="rounded-full w-14 h-12"
                  src="/Images/picturenotify2.png"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Why dont you claim a fees by cleaning the room
                  <span className="font-bold mx-5">@stella_jue</span>
                </p>
                <p className="text-gray-50 text-tiny">5 min ago</p>
              </div>
              <div>
                <img
                  className=" w-20 h-14 object-contain"
                  src="/Images/notify2.png"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="font-semibold text-center cursor-pointer text-purple">
        Load more
      </p>
    </div>
  );
}

export default Notifications;
