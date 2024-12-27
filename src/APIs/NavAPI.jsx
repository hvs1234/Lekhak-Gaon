import { BiChevronDown } from "react-icons/bi";

export const NavLinkData = [
  {
    id: 1,
    to: "/",
    name: "Home",
  },
  {
    id: 2,
    to: "/about",
    name: "About Us",
    icon: <BiChevronDown size={20} />,
    dropdown: [
      { name: "About LekhakGaon", to: "/about" },
      { name: "Book Your Festival", to: "/contact" },
      { name: "Donate Book", to: "/donatebook" },
      { name: "Partners", to: "/partners" },
    ],
  },
  {
    id: 3,
    to: "/festival",
    name: "SHM 2024",
  },
  {
    id: 4,
    to: "/media",
    name: "Media",
    icon: <BiChevronDown size={20} />,
    dropdown: [
      { name: "Photos", to: "/mediapics" },
      { name: "Videos", to: "/mediavideos" },
    ],
  },
  {
    id: 5,
    to: "/travelstay",
    name: "Location",
  },
  {
    id: 6,
    to: "/contact",
    name: "Contact Us",
  },
];
