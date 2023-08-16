import React from "react";
import { IconType } from "react-icons";

interface Category {
  Icon: IconType;
  text: string;
}

function Category({ text, Icon }: Category) {
  return (
    <div className="flex cursor-pointer group  text-gray-50 gap-2 justify-center items-center min-w-[90px] flex-col">
      <Icon size={22} className="group-hover:text-purple" />
      <p className="text-center text-sm text-gray-50 group-hover:text-purple ">
        {text}
      </p>
    </div>
  );
}

export default Category;
