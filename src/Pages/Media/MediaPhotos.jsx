// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import Handlers from "../../Services/Handlers";
import temple_icon from "/Media/temple-icon.png";

const MediaPhotos = () => {
  const { useStickyNavbar, medipicsdata } = Handlers();
  useStickyNavbar();

  return (
    <>
      <Header />
      <div className="section-main py-[9rem] px-[20rem] w-[100%] h-[70vh] relative object-cover bg-[url('/Media/Festival/1.jpg')] bg-no-repeat bg-center bg-cover max-2xl:px-[5rem] max-md:px-[2rem] ">
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
          <h2 className="text-[4rem] text-[#212121] max-md:text-[3rem]">
            स्पर्श हिमालय महोत्सव 2024
          </h2>
          <h2 className="text-[3rem] text-[#212121] max-md:text-[2.5rem]">
          (साहित्य, संस्कृति एवं कला सम्मेलन)
          </h2>
        </div>
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {medipicsdata.map((e) => {
            return <img key={e.id} src={e.img} alt="img" className="" />;
          })}
        </div>
      </div>

      {/* Footer */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default MediaPhotos;
