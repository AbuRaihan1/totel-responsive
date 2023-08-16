import Image from "next/image";
import React from "react";

type Props = {};

function RefundCard({}: Props) {
  return (
    <div className="overflow-hidden rounded-[10px] lg:sticky lg:top-24">
      <div>
        <Image
          width={516}
          height={342}
          src="/Images/product.png"
          alt="Product"
        />
      </div>
      <div className="rounded-b-[10px] border-x border-b border-card px-[26px] pb-6 pt-[16px] shadow-lg">
        <div>
          <div className="inline-flex items-center rounded-full bg-green-shade-100 px-2 py-1 text-[13px] font-medium leading-none text-success-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-shade-700 mr-1"></span>
            <span className="">Published</span>
          </div>
          <h2 className="mt-1 text-xl font-semibold">Hotel Assenzio Karoeke</h2>
          <p className="mt-1 font-medium">25 Apr 2023 - 28 Apr 2023</p>
          <p className="mt-2 text-gray-50">
            But happy to move in with more than that, I’m super easy going and
            tidy. I’m super easy going and tidy.I’m super easy going and tidy.
          </p>
          <table className="mt-4 table w-full table-fixed text-[15px] font-medium">
            <tbody className="space-y-2">
              <tr className="border-b border-card">
                <td>
                  <p>Amount you have paid</p>
                </td>
                <td className="text-right">
                  <span className="text-lg">$420</span>
                </td>
              </tr>
              <tr className="border-b border-card w-full" >
                <td >
                  <p className="mt-2 w-full">Refund pending review</p>
                  <p className="mt-3 text-xs font-normal  text-gray-50">
                    Refund to Visa123*****56497812
                  </p>
                </td>
                <td className="text-right">
                  <span className="text-lg">$420</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RefundCard;
