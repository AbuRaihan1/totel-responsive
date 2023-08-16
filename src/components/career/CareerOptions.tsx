import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CareerOptions {
  imageURL: string;
  jobType: string;
  jobTitle: string;
  jobDescription: string;
}

export default function CareerOptions({
  imageURL,
  jobType,
  jobTitle,
  jobDescription,
}: CareerOptions) {
  return (
    <div className="flex flex-col items-center justify-start">
      <Image
        className="relative rounded-t-lg rounded-b-none w-[18.5rem] h-[17.81rem] object-cover"
        width={500}
        height={500}
        alt=""
        src={imageURL}
      />
      <div className="career-card border-card">
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative tracking-[-0.01em] leading-[1.25rem] text-purple">
              {jobType}
            </div>
            <div className="relative text-[1.5rem] tracking-[-0.01em] leading-[2.13rem] font-semibold text-label-color-light-primary">
              {jobTitle}
            </div>
          </div>
          <div className="relative text-[0.88rem] tracking-[-0.1px] leading-[1.25rem] text-neutral-950 inline-block w-[16.5rem]">
            {jobDescription}
          </div>
        </div>
        <Link href="/career/travel-guide">

        <div className="rounded-3xl bg-purple-secondary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-[0.94rem] text-system-background-light-primary">
          <div className="relative bg-purple hover:bg-purple cursor-pointer px-4 py-3 rounded-full text-white leading-[1.38rem] font-semibold">
            Apply Now
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}
