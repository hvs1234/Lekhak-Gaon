// import React from 'react'

import { useState } from "react";
import ContentMain from "../../Components/Card/ContentMain";
import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import Handlers from "../../Services/Handlers";
import FestivalMedia from "./FestivalMedia";
import FestivalSlider from "./FestivalSlider";
import temple_icon from "/Media/temple-icon.png";
import { HomeWatchVideoData } from "../../APIs/WatchVideoAPI";
import WatchVideo from "../../Components/Card/WatchVideo";

const Festival = () => {
  const { useStickyNavbar, festivalmaindata } = Handlers();
  useStickyNavbar();

  const [homewatchvideodata] = useState(HomeWatchVideoData);

  return (
    <>
      <Header />
      <div className="section-main py-[9rem] px-[20rem] w-[100%] h-[70vh] relative object-cover bg-[url('/Media/Festival/9.jpg')] bg-no-repeat bg-center bg-cover max-2xl:px-[5rem] max-md:px-[2rem] ">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#333395] opacity-[0.2]"></div>
      </div>
      <div
        className="flex flex-col px-[20rem] max-2xl:px-[5rem] max-md:px-[2rem] justify-center items-center text-center gap-[2rem] w-[100%] 
        pt-[6rem] pb-[6rem]"
      >
        <div className="flex items-center justify-center w-[100%]">
          <img
            src={temple_icon}
            alt="img"
            className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
          />
        </div>
        <h2 className="text-[4rem] font-normal text-[#212121] max-md:text-[3rem]">
          स्पर्श हिमालय महोत्सव 2024
        </h2>
        <h2 className="text-[3rem] font-normal text-[#212121] max-md:text-[2.5rem]">
          (साहित्य, संस्कृति एवं कला सम्मेलन)
        </h2>
        <p className="text-[2rem] font-normal text-[#212121] max-md:text-[1.6rem]">
          मुख्य अतिथि के रूप में पहुंचे पूर्व राष्ट्रपति रामनाथ कोविंद ने कहा,
          देवभूमि में लेखक गांव की स्थापना से नए विचार और लेखन को एक बेहतर मंच
          मिलेगा, जिससे भविष्य में लेखक और साहित्यकार पैदा होंगे। लेखक गांव से
          उपजे विचार देश-दुनिया को प्रभावित करेंगे
        </p>
      </div>

      <ContentMain contentmaindata={festivalmaindata} />
      <FestivalMedia />
      <div className="py-[0] px-[20rem] w-[100%] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem]">
        <WatchVideo watchvideodata={homewatchvideodata} />
      </div>
      <FestivalSlider />
      {/* Footer */}

      <ScrollTop />
      <Footer />
    </>
  );
};

export default Festival;
