// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";

const HomeExperience = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div
        className={`py-[9rem] px-[20rem] w-[100%] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem] bg-[url('/Media/Home/7.jpg')] bg-no-repeat bg-center bg-cover bg-fixed`}
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.6]"></div>
        <div className="relative w-[100%] h-[100%] flex flex-col gap-[2rem] justify-center items-center text-center">
          <h2 className="text-[4rem] text-[white] font-normal max-md:text-[3rem]">
            अंतरराष्ट्रीय साहित्य, संस्कृति एवं कला महोत्सव 2024
          </h2>
          <p className="text-[1.6rem] text-[white] font-normal">
            25 से 27 अक्टूबर 2024 को स्पर्श हिमालय फाउंडेशन के तत्वावधान में
            देहरादून के थानो में स्थित लेखक गाँव में अंतरराष्ट्रीय कला, साहित्य
            और संस्कृति महोत्सव का आयोजन किया जाएगा। इस पाँच दिवसीय महोत्सव में
            40 से अधिक देशों के साहित्यकार, लेखक और कलाकार भाग लेंगे, जो हिंदी
            भाषा और उत्तराखंड की सांस्कृतिक धरोहर को अंतरराष्ट्रीय स्तर पर
            प्रस्तुत करेंगे।
          </p>
          <div className="mt-[3rem]">
            <Link
              to={"/"}
              onClick={handleOnClick("/")}
              className="px-[4rem] py-[2rem] text-[2rem] text-[white] border-[1px] border-[white] rounded-full transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
            >
              Become A Friend Of Festival
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeExperience;
