// import React from 'react'

import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";

const HomeExperience = () => {
  const { handleOnClick } = Handlers();

  return (
    <>
      <div
        className={`py-[9rem] px-[20rem] w-[100%] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem] bg-[url('/Media/Home/2.jpg')] bg-no-repeat bg-center bg-cover bg-fixed`}
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0.6]"></div>
        <div className="relative w-[100%] h-[100%] flex flex-col gap-[2rem] justify-center items-center text-center">
          <h2 className="text-[4rem] text-[white] font-normal max-md:text-[3rem]">
            स्पर्श हिमालय महोत्सव 2024 (साहित्य, संस्कृति एवं कला सम्मेलन)
          </h2>
          <p className="text-[1.6rem] text-[white] font-normal max-w-[80%] max-[500px]:max-w-[100%]">
            मुख्य अतिथि के रूप में पहुंचे पूर्व राष्ट्रपति रामनाथ कोविंद ने कहा,
            देवभूमि में लेखक गांव की स्थापना से नए विचार और लेखन को एक बेहतर मंच
            मिलेगा, जिससे भविष्य में लेखक और साहित्यकार पैदा होंगे। लेखक गांव से
            उपजे विचार देश-दुनिया को प्रभावित करेंगे
          </p>
          <div className="mt-[3rem]">
            <Link
              to={"/festival"}
              onClick={handleOnClick("/festival")}
              className="px-[4rem] py-[2rem] text-[2rem] text-[white] border-[1px] border-[white] rounded-full transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
            >
              Check Highlights of Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeExperience;
