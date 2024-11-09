// import React from 'react'

import { LuArrowUpWideNarrow } from "react-icons/lu";

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="fixed right-[3rem] bottom-[2rem] bg-[#2b2b54] px-[1rem] py-[1rem] rounded-md 
        cursor-pointer z-[1000] border-[white] border-[1px]"
        onClick={scrollToTop}
      >
        <LuArrowUpWideNarrow size={30} className="text-[white]" />
      </div>
    </>
  );
};

export default ScrollTop;
