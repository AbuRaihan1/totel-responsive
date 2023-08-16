import React from "react";

type Props = {};

function UpperNavigation({}: Props) {
  return (
    <div className="self-stretch h-[5px] flex flex-row items-start justify-start gap-[16px] z-[2] md:self-stretch md:w-auto md:h-0">
      <div className="flex-1 relative bg-purple h-[5px]" />
      <div className="flex-1 relative bg-purple h-[5px]" />
      <div className="flex-1 relative bg-card h-[5px]" />
      <div className="flex-1 relative bg-card h-[5px]" />
      <div className="flex-1 relative bg-card h-[5px]" />
      <div className="flex-1 relative bg-card h-[5px]" />
      <div className="flex-1 relative bg-card h-[5px]" />
    </div>
  );
}

export default UpperNavigation;
