import ListingCategory from "./ListingCategory";
import ListingPartner from "./ListingPartner";

type Props = {};

function ListingUserCards({}: Props) {
  return (
    <div className="">
      {/* <ListingCategory /> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 px-5 py-4 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
          <ListingPartner key={i} />
        ))}
      </div>
    </div>
  );
}

export default ListingUserCards;
