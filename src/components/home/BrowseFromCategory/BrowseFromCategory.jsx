import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const BrowseFromCategory = () => {
  return (
    <div className="flex items-center gap-4 mt-5 ml-4">
      <select className="bg-purple text-white outline-none border-none rounded p-2 font-bold cursor-pointer">
        <option value="browseFromCategory">
          Browse From Category
          {/* <FiChevronDown /> */}
        </option>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">item 3</option>
      </select>

      <div>
        <button className="flex items-center gap-2 px-4 py-2 border shadow bg-white rounded hover:bg-purple hover:text-white font-bold">
          {/* <BiFilterAlt />  */}
          Filters
        </button>
      </div>
    </div>
  );
};

export default BrowseFromCategory;
