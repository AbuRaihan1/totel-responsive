import { BsThreeDots } from "react-icons/bs";
import { FiChevronDown, FiFilter } from "react-icons/fi";

const ListingCategory = () => {
  return (
    <div className="bg-white border py-4">
      <div className="flex overflow-x-auto  px-5 gap-6 items-center">
        <div className="input_area relative inline-block min-w-fit">
          <input
            type="text"
            className="w-64 p-3 rounded-full pr-24 outline-none border-card border"
            placeholder="Find.."
          />
          <button className="absolute right-1 top-1 bg-purple text-white rounded-full border-none outline-none px-4 font-semibold py-2 ">
            Search
          </button>
        </div>
        <div className="flex gap-2 min-w-fit">
          <button className="listingCategoryActiveBtn">All</button>
          <button className="listingCategoryUnActiveBtn">Already Booked</button>
          <button className="listingCategoryUnActiveBtn">
            Looking for a partner
          </button>
          <button className="listingCategoryUnActiveBtn">Listing</button>
        </div>
        <div className="flex gap-4 min-w-fit">
          <select className="listingCategoryUnActiveBtn outline-none">
            <option value="amenities">
              Amenities
              {/* <FiChevronDown /> */}
            </option>
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">item 3</option>
          </select>

          <select className="listingCategoryUnActiveBtn outline-none">
            <option value="poststatus">
              Post status
              {/* <FiChevronDown /> */}
            </option>
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">item 3</option>
          </select>

          <button className="listingCategoryUnActiveBtn">
            <FiFilter />
          </button>
          <button className="listingCategoryUnActiveBtn">
            <BsThreeDots />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCategory;
