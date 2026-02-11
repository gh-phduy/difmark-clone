import {
  SiSteam,
  SiGogdotcom,
  SiEpicgames,
  SiUbisoft,
  SiEa,
  SiRockstargames,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { MdUpcoming } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { BsXbox } from "react-icons/bs";

export interface FilterSubItem {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

export interface FilterItem {
  id: string;
  label: string;
  subItems: FilterSubItem[];
}

const COMMON_SUB_ITEMS: FilterSubItem[] = [
  { id: "steam", label: "Steam", count: 4036, icon: <SiSteam /> },
  {
    id: "dlc",
    label: "DLC",
    count: 833,
    icon: <span className="text-[10px] font-bold">DLC</span>,
  },
  { id: "gog", label: "GOG", count: 151, icon: <SiGogdotcom /> },
  { id: "ea", label: "Electronic arts", count: 93, icon: <SiEa /> },
  { id: "ubisoft", label: "Ubisoft", count: 79, icon: <SiUbisoft /> },
  { id: "upcoming", label: "Upcoming", count: 61, icon: <MdUpcoming /> },
  { id: "epic", label: "Epic Games", count: 35, icon: <SiEpicgames /> },
  {
    id: "rockstar",
    label: "Rockstar",
    count: 12,
    icon: <SiRockstargames />,
  },
  { id: "microsoft", label: "Microsoft", count: 11, icon: <FaWindows /> },
];
const COMMON_PLATFORMS: FilterSubItem[] = [
  { id: "pc", label: "PC", count: 151, icon: <HiComputerDesktop /> },
  { id: "xbox", label: "Xbox", count: 93, icon: <BsXbox /> },
  {
    id: "playstation",
    label: "Playstation",
    count: 79,
    icon: <FaPlaystation />,
  },
  { id: "nintendo", label: "Nintendo", count: 61, icon: <SiNintendoswitch /> },
];

export const PRODUCT_TYPES_DATA: FilterItem[] = [
  {
    id: "game-keys",
    label: "Game Keys",
    subItems: COMMON_SUB_ITEMS,
  },
  {
    id: "game-cards",
    label: "Game Cards",
    subItems: COMMON_SUB_ITEMS, // Duplicated for demo purposes as per user request
  },
  {
    id: "console-games",
    label: "Console Games",
    subItems: COMMON_PLATFORMS,
  },
  {
    id: "gift-cards",
    label: "Gift Cards",
    subItems: [],
  },
  {
    id: "software",
    label: "Software",
    subItems: [],
  },
  {
    id: "pc-games",
    label: "PC Games",
    subItems: [],
  },
  {
    id: "mobile",
    label: "Mobile",
    subItems: [],
  },
];
