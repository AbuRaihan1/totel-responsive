import ListingPartner from "./ListingPartner";

type Props = {};

function ListingUserCards({}: Props) {
  return (
    // self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start text-[0.88rem] text-gray-700  lg:h-auto lg:flex-[unset] lg:self-stretch  md:flex-[unset] md:self-stretch sm:flex-col sm:flex-[unset] sm:self-stretch
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 px-5 py-4 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
          <ListingPartner key={i} />
        ))}
      </div>
    </div>
  );
}

export default ListingUserCards;
