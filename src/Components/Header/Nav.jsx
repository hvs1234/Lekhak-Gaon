import { Link, useNavigate } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import "./Nav.css";
import { HiMenu } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const { navlinkdata, handleOnClick, isActive, toggleNavbar } = Handlers();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = (id) => {
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(null);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`header w-[100%] top-0 left-0 transition-all duration-[0.3s] ease-out 
        px-[20rem] py-[1rem] flex items-center gap-[2rem] justify-between max-xl:px-[5rem] max-md:px-[2rem] z-[99] ${
          isActive ? "active" : ""
        }`}
    >
      <div className="nav-overlay absolute top-0 left-0 bg-[#272751] w-[100%] h-[100%] opacity-[0.2]"></div>
      <div className="flex items-center gap-[4rem]">
        <nav className="navbar max-md:px-[2rem] max-md:py-[4rem] z-[99]">
          <ul className="flex items-center gap-[4rem] w-[100%]">
            {navlinkdata.map((e) => (
              <li
                key={e.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(e.id)}
              >
                <Link
                  to={e.dropdown ? "" : e.to}
                  className="flex items-center gap-[0.2rem] navlink text-[1.6rem] text-white font-normal transition-all duration-[0.2s] ease-linear hover:opacity-[0.5]"
                  onClick={() => !e.dropdown && handleNavigation(e.to)}
                >
                  {e.name} {e.icon}
                </Link>
                {e.dropdown && openDropdown === e.id && (
                  <ul
                    className="absolute top-[100%] w-[200px] max-h-[300px] overflow-y-auto left-0 bg-[white] shadow-lg rounded-md py-[1rem] 
                      px-[1rem] mt-[1rem] max-[768px]:left-[-4rem] max-[768px]:w-[200px] max-[768px]:bg-[#65659c] 
                      max-[768px]:border-[1px] max-[768px]:border-[grey]"
                    onMouseLeave={handleMouseLeave}
                    ref={dropdownRef}
                  >
                    {e.dropdown.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.to}
                          className="flex flex-col w-[auto] text-[1.6rem] text-[#212121] px-[1rem] py-[0.5rem] hover:bg-gray-200 
                            max-[768px]:text-[white]"
                          onClick={() => handleNavigation(item.to)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="relative z-[9999]">
          <HiMenu
            size={20}
            className="cursor-pointer nav-btn text-[white]"
            onClick={toggleNavbar}
          />
        </div>
      </div>
      <div className="flex items-center gap-[2rem] z-[99]">
        <div>
          <Link
            to={"/donate"}
            onClick={() => handleNavigation("/donate")}
            id="nav-register"
            className="bg-[#6464a2] text-[white] text-[1.6rem] font-normal 
              px-[2rem] py-[0.8rem] rounded-md hover:opacity-[0.8] transition-all duration-[0.2s] ease-linear max-sm:px-[1rem]"
          >
            Donate Book
          </Link>
        </div>
        <div>
          <a
            href="https://www.youtube.com/@lekhakgaon/streams"
            target="_blank"
            id="nav-more"
            className="bg-[crimson] text-[white] text-[1.6rem] font-normal px-[2rem] py-[0.8rem] rounded-md hover:opacity-[0.8] 
              transition-all duration-[0.2s] ease-linear max-sm:px-[1rem]"
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
