// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[20rem] w-[100%] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem] bg-[#f2f2f2] ml-auto mr-auto">
        <div className="grid grid-cols-4 gap-[2rem] ml-auto mr-auto w-[100%] justify-center max-lg:grid-cols-2 max-lg:gap-[8rem] max-[560px]:grid-cols-1">
          <div
            className="flex flex-col gap-[2rem] ml-auto mr-auto max-lg:ml-0 max-lg:mr-0 max-[560px]:justify-center max-[560px]:items-center
          max-[560px]:text-center max-[560px]:gap-[4rem]"
          >
            <h3 className="text-[2rem] font-normal text-[#212121] uppercase">
              About
            </h3>
            <div className="flex flex-col gap-[2rem] uppercase">
              <Link
                to={"/about"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/about")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; About Us
              </Link>
              <Link
                to={"/festival"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/festival")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; SHM 2024
              </Link>
              <Link
                to={"/contact"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/contact")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Contact Us
              </Link>
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Terms & conditions
              </Link>
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Privacy Policy
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col gap-[2rem] ml-auto mr-auto max-lg:ml-0 max-lg:mr-0 max-[560px]:justify-center max-[560px]:items-center
          max-[560px]:text-center max-[560px]:gap-[4rem]"
          >
            <h3 className="text-[2rem] font-normal text-[#212121] uppercase">
              Media
            </h3>
            <div className="flex flex-col gap-[2rem] uppercase">
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; News & updates
              </Link>
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Festival
              </Link>
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Contact Us
              </Link>
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Terms and conditions
              </Link>
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Privacy Policy
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col gap-[2rem] ml-auto mr-auto max-lg:ml-0 max-lg:mr-0 max-[560px]:justify-center max-[560px]:items-center
          max-[560px]:text-center max-[560px]:gap-[4rem]"
          >
            <h3 className="text-[2rem] font-normal text-[#212121] uppercase">
              Events
            </h3>
            <div className="flex flex-col gap-[2rem] uppercase">
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Music Stage
              </Link>
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Morning Music
              </Link>
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Classic Music & Dance
              </Link>
              <Link
                to={"/"}
                className="hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear text-[1.6rem] text-[#414141]"
                onClick={handleOnClick("/")}
              >
                <i className="fa-solid fa-chevron-right text-[orange]"></i>
                &nbsp; Programme
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col gap-[2rem] ml-auto mr-auto max-lg:ml-0 max-lg:mr-0 max-[560px]:justify-center max-[560px]:items-center
          max-[560px]:text-center max-[560px]:gap-[4rem]"
          >
            <h3 className="text-[2rem] font-normal text-[#212121] uppercase">
              Social Accounts
            </h3>
            <div className="flex items-center gap-[1rem]">
              <a href="https://www.facebook.com/lekhakgaon" target="_blank">
                <FaFacebook
                  size={40}
                  className="bg-[orangered] text-[white] rounded-full px-[0.5rem] py-[0.5rem] hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear"
                />
              </a>
              <a href="#" target="_blank">
                <RiTwitterXLine
                  size={40}
                  className="bg-[orangered] text-[white] rounded-full px-[0.5rem] py-[0.5rem] hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear"
                />
              </a>
              <a href="#" target="_blank">
                <FaInstagram
                  size={40}
                  className="bg-[orangered] text-[white] rounded-full px-[0.5rem] py-[0.5rem] hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear"
                />
              </a>
              <a href="#" target="_blank">
                <FaYoutube
                  size={40}
                  className="bg-[orangered] text-[white] rounded-full px-[0.5rem] py-[0.5rem] hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear"
                />
              </a>
              <a href="#" target="_blank">
                <FaLinkedin
                  size={40}
                  className="bg-[orangered] text-[white] rounded-full px-[0.5rem] py-[0.5rem] hover:opacity-[0.6] transition-all duration-[0.2s] ease-linear"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w=[100%] relative bg-[#cb3f54] text-[white] px-[2rem] py-[1rem] flex justify-center items-center text-center">
        <p className="text-[2rem] text-[white] font-normal">
          &copy; 2024. Lekhakgaon | All right reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
