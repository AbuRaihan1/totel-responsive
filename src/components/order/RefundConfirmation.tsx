import Image from "next/image";
import React from "react";

interface RefundConfirmation {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function RefundConfirmation({ setVisible }: RefundConfirmation) {
  return (
    <div className="sm:px-8 sm:py-4">
      <div className="flex justify-between gap-4 text-2xl font-semibold">
        <div>Refund Intiated</div>
        <div className="text-right">$420</div>
      </div>

      <div className="mt-2.5 flex justify-between gap-4 font-light text-[#818181]">
        <div>Order ID : 123ahr970b5i35</div>
        <div className="text-right">Transaction ID : 123ahr970b5i35</div>
      </div>

      <p className="my-5 border-t border-card"></p>
      <div className="mt-10 flex justify-center sm:mt-16">
        <Image width={240} height={240} src="/svg/icon-true.svg" alt="true" />
      </div>

      <h3 className="mt-10 text-center text-2xl font-semibold leading-tight sm:mt-16 sm:text-[30px]">
        Your Refund has been Initated!
      </h3>
      <p className="mt-4 text-center text-2xl text-[#818181] sm:mt-8 sm:text-[25px]">
        Refund Cash to card
      </p>

      <p className="my-5 border-t border-card"></p>

      <p className="text-center text-gray-50">
        By selecting the button below, I agree to the House Rules, Safety
        Disclosures, Social-distancing and other Covid-19-related guidelines,
        and Guest Refund Policy. I also agree to pay the total amount shown,
        which includes Occupancy Taxes and Service Fees. Now collects, remits
        government-imposed Occupancy Taxes in this location.
      </p>

      <div className="mt-16 space-x-6 text-center flex items-center justify-center">
        <button
          className="w-1/4 mt-8 font-bold text-white rounded-full bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary"
          onClick={() => setVisible(false)}
          type="button"
        >
          Contact Us
        </button>

        <button
          className="w-1/4 mt-8 font-bold  rounded-full ring-1 bg-white ring-blue shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] whitespace-nowrap px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-purple"
          onClick={() => setVisible(false)}
          type="button"
        >
          Apply for Refund
        </button>
      </div>
    </div>
  );
}

export default RefundConfirmation;
