import { useState } from "react";
import Handlers from "../../Services/Handlers";
import temple_icon from "/Media/temple-icon.png";
import { OurVisionData } from "../../APIs/VisionAPI";
import Our_vision_img from "/Media/Vision/3.jpeg";

const OurVision = () => {
  const { language } = Handlers();
  const [ourvisiondata] = useState(OurVisionData);

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem]">
        <div className="flex flex-col gap-[2rem] justify-center items-center text-center w-[100%]">
          <div className="w-[100%] flex items-center justify-center">
            <img
              src={temple_icon}
              alt="icon"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <h2 className="text-[4rem] font-normal text-[#212121] max-md:text-[3rem]">
            {language === "Hindi" ? `हमारी दृष्टि` : `Our Vision`}
          </h2>
        </div>

        <div className="grid grid-cols-2 mt-[6rem] w-[100%] gap-[4rem] justify-center max-xl:grid-cols-1">
          <div className="flex flex-col justify-center gap-[1rem] w-[100%] opacity-0 translate-x-[-50px] animate-[fadeInLeft_1s_ease-out_forwards]">
            <h2 className="text-[3rem] text-[#212121] font-normal">
              {language === "Hindi"
                ? `एक नई दिशा, एक नया उद्देश्य`
                : `A New Direction, A New Purpose`}
            </h2>
            <div className="my-[1rem] w-[100%] h-[1px] bg-[#d2d2d2]"></div>
            <div className="flex flex-col gap-[1rem] w-[100%] mt-[0rem]">
              {ourvisiondata.map((e) => {
                return (
                  <p
                    key={e.id}
                    className="text-[1.8rem] text-[#212121] font-normal"
                  >
                    {language === "Hindi" ? e.title : e.title2}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-center w-[auto] h-[100%] opacity-0 translate-x-[50px] animate-[fadeInRight_1s_ease-out_forwards]">
            <img src={Our_vision_img} alt="img" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
