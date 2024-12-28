// import React from 'react'
import temple_icon from "/Media/temple-icon.png";
import ContentColsTwo from "../../Components/Card/ContentColsTwo";
import { useState } from "react";
import { AboutContentColsTwoData } from "../../APIs/ContentColsTwoAPI";
import Handlers from "../../Services/Handlers";

const AboutMain = () => {
  const [aboutcontentcolstwodata] = useState(AboutContentColsTwoData);
  const { language } = Handlers();

  return (
    <>
      <div
        className={`py-[6rem] px-[20rem] w-[100%] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem]`}
      >
        <div className="flex flex-col gap-[1rem] justify-center items-center text-center">
          <div className="flex items-center justify-center w-[100%]">
            <img
              src={temple_icon}
              alt="img"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <div className="mb-[1rem]">
            <h2 className="text-[4rem] font-normal text-[#212121]">
              {language === "Hindi"
                ? `हिमालय का लेखक गांव`
                : `Writer's Village in the Himalayas`}
            </h2>
          </div>
        </div>
        <ContentColsTwo contentcolstwosdata={aboutcontentcolstwodata} />
      </div>
    </>
  );
};

export default AboutMain;
