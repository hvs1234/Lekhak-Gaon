// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";

const AboutParallex = () => {
  const { handleOnClick, language } = Handlers();

  return (
    <>
      <div
        className="py-[9rem] px-[20rem] w-[100%] relative object-cover bg-[url('/Media/About/7.jpg')] bg-no-repeat bg-center bg-cover bg-fixed 
        max-2xl:px-[5rem] max-md:px-[2rem]"
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#38389a] opacity-[0.5]"></div>
        <div className="relative w-[100%] flex flex-col justify-center items-center text-center gap-[2rem]">
          <h2 className="text-[4rem] max-md:text-[3rem] text-[white] font-normal">
            {language === "Hindi"
              ? `लेखक और कलाकारों का सम्मान: लेखक गाँव`
              : `Honoring writers and artists: Writer's Village`}
          </h2>
          <p className="text-[1.6rem] text-[white] font-normal">
            {language === "Hindi"
              ? `लेखक गाँव साहित्यिक और कला की दुनिया में विलक्षण प्रतिभाओं को सम्मान
            देने के लिए एक अद्भुत पहल है।`
              : `Writer's Village is a wonderful initiative to honour exceptional talents in the literary and art world.`}
          </p>
          <div className="mt-[3rem]">
            <Link
              to={"/"}
              onClick={handleOnClick("/")}
              className="px-[4rem] py-[1rem] text-[2rem] text-[white] border-[1px] border-[white] rounded-full transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
            >
              See Media
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutParallex;
