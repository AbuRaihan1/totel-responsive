import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

interface ShareDetailsType {
  text: string;
  counter: number;
}

function ShareDetailsType({ text, counter }: ShareDetailsType) {
  return (
    <div className="flex items-center gap-4 w-96">
      <p className="flex-1 text-lg font-semibold">{text}</p>
      <AiOutlinePlusCircle size={28} className="text-gray-50" />
      <div className="bg-greyish w-10 h-10 rounded-full flex items-center justify-center shrink-0 grow-0">
        <p>{counter}</p>
      </div>
      <AiOutlineMinusCircle size={28} className="text-gray-50" />
    </div>
  );
}

export default ShareDetailsType;
