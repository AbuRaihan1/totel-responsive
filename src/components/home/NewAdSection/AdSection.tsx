import React from "react";

type Props = {};

function AdSection({}: Props) {
  return (
    <>
      <section className="h-[420px] relative bg-cover bg-[url('/Images/hero.png')] my-16">
        <div className="[background:linear-gradient(80.85deg,_#574efa,_rgba(87,_78,_250,_0))] h-[420px]">
          <div className="flex">
            <div className="lg:w-1/2 w-full ml-10 mt-24 text-white">
              <h2 className="font-semibold"> 1% OF THE INDUSTRY</h2>
              <p className="mt-6 text-2xl font-medium">
                Welcome to your room sharing platform that which You can find
                places and stay with hotels and home-stays ranked by travellers.
                What fun could we have more than having roommate with similar
                interest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdSection;
