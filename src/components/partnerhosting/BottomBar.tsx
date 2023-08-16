import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface BottomBar {
  next: string;
  back?: string;
}

function BottomBar({ next, back }: BottomBar) {
  const router=useRouter();
  return (
    <footer className="w-full overflow-hidden flex flex-row py-4 px-[124px] items-center justify-center relative gap-[10px] text-left text-mini text-gray-700 font-text-button-semibold-large md:py-5 md:px-[15px] md:box-border sm:pt-[5px] sm:px-2.5 sm:pb-[05px] sm:box-border">
      <div className="flex-1 flex flex-row items-center justify-between z-[0] w-full">
        {next!=="/listing" && (
      
            <div className="rounded-3xl cursor-pointer hover:bg-gray-50 hover:text-white  shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-3 px-[18px] items-center justify-center gap-[6px] border-[1px] border-solid border-neutral-700" onClick={()=>router.push(back as string)}>
              <div className="relative leading-[22px] font-semibold">Back</div>
            </div>
    
        )}

        <Link href={next}>
          <div className="rounded-3xl self-end  ml-auto bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-3 px-[18px] items-center justify-center gap-[6px] text-white cursor-pointer  hover:bg-light-purple md:hover:cursor-pointer">
            <div className="relative leading-[22px] font-semibold">
              {next === "/listing" ? "Go to listing" : "Next"}
            </div>
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default BottomBar;
