// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import Handlers from "../../Services/Handlers";
import temple_icon from "/Media/temple-icon.png";

const MediaVideos = () => {
  const { useStickyNavbar, mediavideodata, language } = Handlers();
  useStickyNavbar();

  return (
    <>
      <Header />
      <div className="section-main py-[9rem] px-[20rem] w-[100%] h-[70vh] relative object-cover bg-[url('/Media/About/28.jpg')] bg-no-repeat bg-center bg-cover max-2xl:px-[5rem] max-md:px-[2rem] ">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#333395] opacity-[0.2]"></div>
      </div>

      <div className="py-[6rem] px-[2rem] w-[100%] relative object-cover">
        <div className="flex flex-col gap-[2rem] justify-center items-center text-center mb-[4rem]">
          <div className="flex items-center justify-center w-[100%]">
            <img
              src={temple_icon}
              alt="img"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <h2 className="text-[4rem] max-md:text-[3rem] font-normal text-[#48486e]">
            {language === "Hindi"
              ? `स्पर्श हिमालय महोत्सव - 2024`
              : `Sparsh Himalaya Festival - 2024`}
          </h2>
          <h2 className="text-[3rem] text-[#212121] font-normal max-md:text-[2.5rem]">
            {language === "Hindi"
              ? `(अंतर्राष्ट्रीय साहित्य,संस्कृति एवं कला उत्सव)`
              : `(International Literature, Culture and Arts Festival)`}
          </h2>
        </div>
        <div className="w-[100%] grid grid-cols-3 gap-[2rem] justify-center items-center rounded-md max-lg:grid-cols-1">
          {mediavideodata.map((e) => {
            return (
              <iframe
                key={e.id}
                src={e.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="w-[100%] h-[400px] rounded-md"
              ></iframe>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default MediaVideos;
