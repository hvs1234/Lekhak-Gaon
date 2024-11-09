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
    to: "/",
    name: "Programme",
  },
  {
    id: 4,
    to: "/",
    name: "Media",
    icon: <BiChevronDown size={20} />,
    dropdown: [
      { name: "Photos", to: "/" },
      { name: "Videos", to: "/" },
    ],
  },
  {
    id: 5,
    to: "/",
    name: "Contact Us",
  },
];
