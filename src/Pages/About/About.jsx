// import React from 'react'

import { useState } from "react";
import WatchVideo from "../../Components/Card/WatchVideo";
import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import Handlers from "../../Services/Handlers";
import AboutMain from "./AboutMain";
import AboutMedia from "./AboutMedia";
import AboutParallex from "./AboutParallex";
import AboutSlider from "./AboutSlider";
import { HomeWatchVideoData } from "../../APIs/WatchVideoAPI";

const About = () => {
  const { useStickyNavbar } = Handlers();
  useStickyNavbar();

  const [homewatchvideodata] = useState(HomeWatchVideoData);

  return (
    <>
      <Header />
      <div
        className={`section-main py-[9rem] px-[20rem] w-[100%] h-[70vh] relative object-cover bg-[url('/Media/About/3.jpg')] 
        bg-no-repeat bg-center bg-cover max-2xl:px-[5rem] max-md:px-[2rem]`}
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#2e2e86] opacity-[0.2]"></div>
      </div>

      <AboutMain />
      <AboutMedia />
      <div className="py-[0] px-[20rem] w-[100%] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem]">
        <WatchVideo watchvideodata={homewatchvideodata} />
      </div>
      <AboutParallex />
      <AboutSlider />

      {/* Footer */}

      <ScrollTop />
      <Footer />
    </>
  );
};

export default About;
