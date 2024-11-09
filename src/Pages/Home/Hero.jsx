// import React from 'react'

import Header from "../../Components/Header/Header";
import Handlers from "../../Services/Handlers";

const Hero = () => {
  const { useStickyNavbar } = Handlers();
  useStickyNavbar();

  return (
    <>
      <Header />
      <div className="section-main w-[100%] relative object-cover h-[70vh] px-[20rem] py-[9rem] transition-all duration-[0.2s] ease-linear max-xl:px-[5rem] max-md:px-[2rem]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-[0.4s] ease-linear"
          src="/Media/hero-video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#2525d1] opacity-[0.5]"></div>
      </div>
    </>
  );
};

export default Hero;
