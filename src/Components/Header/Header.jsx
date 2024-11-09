// import React from 'react'

import Nav from "./Nav";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-[9999] w-[100%] py-[1rem]">
        <TopNav />
        <div className="bg-[white] w-[100%] h-[1px] my-[1rem]"></div>
        <Nav />
      </div>
    </>
  );
};

export default Header;
