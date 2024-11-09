// import React from 'react'

const TopNav = () => {
  return (
    <>
      <div
        className="top-nav relative z-[9999] w-[100%] px-[20rem] py-[1rem] flex items-center justify-between gap-[2rem] 
        max-xl:px-[5rem] max-md:px-[2rem]"
      >
        <div className="flex items-center justify-start gap-[1rem] max-[420px]:flex-col max-[420px]:items-start">
          <p className="text-[1.6rem] text-[white] font-normal">
            For Queries: Call-{" "}
            <a
              href="tel:010101010101"
              className="hover:opacity-[0.8] transition-all duration-[0.2s] ease-linear"
            >
              +91-010101010101
            </a>
          </p>
          <p className="text-[1.6rem] text-[white] font-normal">
            Other-
            <a
              href="tel:010101010101"
              className="hover:opacity-[0.8] transition-all duration-[0.2s] ease-linear"
            >
              +91-010101010101
            </a>{" "}
          </p>
        </div>
        <div className="flex items-center gap-[4rem]">
          <div className="flex items-center">
            <a
              href="mailto:info@gmail.com"
              className="text-[1.6rem] text-[white] font-normal hover:opacity-[0.8] transition-all duration-[0.2s] ease-linear"
            >
              <i className="fa-solid fa-envelope rounded-full text-[1.6rem] bg-[#475579] text-[white] px-[0.8rem] py-[0.8rem]"></i>
              &nbsp; info@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <a
              href="tel:01010101"
              className="text-[1.6rem] text-[white] font-normal hover:opacity-[0.8] transition-all duration-[0.2s] ease-linear"
            >
              <i className="fa-solid fa-phone rounded-full text-[1.6rem] bg-[#475579] text-[white] px-[0.8rem] py-[0.8rem]"></i>
              &nbsp; +91-0101010101
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
