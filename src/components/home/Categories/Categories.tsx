import categoryArray from "@/utils/category";
import React from "react";
import Category from "./Category";

function Categories() {
  return (
    <div className="flex overflow-x-auto items-center mt-5 py-4 px-5">
      <div className="flex gap-1 items-center">
        {categoryArray.map((category) => (
          <Category
            key={category.id}
            Icon={category.Icon}
            text={category.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
