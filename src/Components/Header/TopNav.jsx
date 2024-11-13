// import React from 'react'
import logo_main from "/Media/logo-main.jpg"

const TopNav = () => {
  return (
    <>
      <div
        className="top-nav relative z-[9999] w-[100%] px-[20rem] py-[1rem] flex items-center justify-between gap-[2rem] 
        max-xl:px-[5rem] max-md:px-[2rem] max-[750px]:flex-col max-[750px]:items-start"
      >
        <div className="flex items-center justify-start gap-[1rem]">
          <img src={logo_main} alt="logo" className="w-[50%] rounded-md" />
        </div>
        <div className="flex items-center gap-[4rem]">
          <div className="flex items-center">
            <a
              href="mailto:lekhakgaon309@gmail.com"
              className="text-[1.6rem] text-[white] font-normal hover:opacity-[0.8] transition-all duration-[0.2s] ease-linear"
            >
              <i className="fa-solid fa-envelope rounded-full text-[1.6rem] bg-[#475579] text-[white] px-[0.8rem] py-[0.8rem]"></i>
              &nbsp; lekhakgaon309@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <a
              href="tel:9997277779"
              className="text-[1.6rem] text-[white] font-normal hover:opacity-[0.8] transition-all duration-[0.2s] ease-linear"
            >
              <i className="fa-solid fa-phone rounded-full text-[1.6rem] bg-[#475579] text-[white] px-[0.8rem] py-[0.8rem]"></i>
              &nbsp; +91-9997277779
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
