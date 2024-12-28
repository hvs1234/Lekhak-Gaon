// import React from 'react'
import { useState } from "react";
import LogoCard from "../../Components/Card/LogoCard";
import temple_icon from "/Media/temple-icon.png";
import { PartnersLogoData } from "../../APIs/LogoCardAPI";
import HomeSlider from "../Home/HomeSlider";
import Handlers from "../../Services/Handlers";

const PartnersMain = () => {
  const [partnersLogoData] = useState(PartnersLogoData);
  const { language } = Handlers();

  return (
    <>
      <div className="py-[6rem] px-[20rem] max-2xl:px-[5rem] max-md:px-[2rem] w-[100%] relative object-cover">
        <div className="relative flex flex-col items-center justify-center text-center gap-[2rem] pb-[2rem] w-[100%]">
          <div className="flex items-center justify-center w-[100%]">
            <img
              src={temple_icon}
              alt="img"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <h2 className="text-[4rem] max-md:text-[3rem] text-[#212121]">
            {language === "Hindi" ? `सहभागी` : `Participant`}
          </h2>
        </div>
        <LogoCard logodata={partnersLogoData} />
      </div>
      <HomeSlider />
    </>
  );
};

export default PartnersMain;
