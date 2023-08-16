import {
  FaBusinessTime,
  FaRegSnowflake,
  FaSwimmingPool,
  FaUmbrellaBeach,
} from "react-icons/fa";
import {
  GiBoatFishing,
  GiCampingTent,
  GiCaveEntrance,
  GiDesert,
  GiIsland,
  GiModernCity,
  GiSkis,
} from "react-icons/gi";
import { MdCastle, MdHolidayVillage } from "react-icons/md";
import { TbWindmill } from "react-icons/tb";

const categoryArray = [
  {
    id: 0,
    Icon: FaUmbrellaBeach,
    text: "Beach",
  },
  {
    id: 1,
    Icon: TbWindmill,
    text: "Windmills",
  },
  {
    id: 2,
    Icon: GiModernCity,
    text: "Modern",
  },
  {
    id: 3,
    Icon: MdHolidayVillage,
    text: "Countryside",
  },
  {
    id: 4,
    Icon: FaSwimmingPool,
    text: "Pools",
  },
  {
    id: 5,
    Icon: GiBoatFishing,
    text: "Lake",
  },
  {
    id: 6,
    Icon: GiIsland,
    text: "Islands",
  },
  {
    id: 7,
    Icon: GiSkis,
    text: "Sking",
  },
  {
    id: 8,
    Icon: MdCastle,
    text: "Castles",
  },
  {
    id: 9,
    Icon: GiCaveEntrance,
    text: "Caves",
  },
  {
    id: 10,
    Icon: GiCampingTent,
    text: "Camping",
  },
  {
    id: 11,
    Icon: FaRegSnowflake,
    text: "Arctic",
  },
  {
    id: 12,
    Icon: GiDesert,
    text: "Desert",
  },
  {
    id: 13,
    Icon: FaBusinessTime,
    text: "Education",
  },
];

export default categoryArray;
