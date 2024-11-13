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
      { name: "Book Your Festival", to: "/" },
      { name: "About LekhakGaon", to: "/about" },
      { name: "Register", to: "/" },
      { name: "Volunteers", to: "/" },
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
    to: "/",
    name: "Contact Us",
  },
];
