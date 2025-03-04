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
          <div className="flex flex-col max-xl:order-2 justify-center gap-[1rem] w-[100%] opacity-0 translate-x-[-50px] animate-[fadeInLeft_1s_ease-out_forwards]">
            <h2 className="text-[2.5rem] text-[#212121] font-normal">
              {language === "Hindi"
                ? `एक नई दिशा, एक नया उद्देश्य`
                : `A New Direction, A New Purpose`}
            </h2>
            <div className="my-[0rem] w-[100%] h-[1px] bg-[#d2d2d2]"></div>
            <div className="flex flex-col gap-[1rem] w-[100%] mt-[0rem]">
              {ourvisiondata.map((e) => {
                return (
                  <p
                    key={e.id}
                    className="text-[1.7rem] text-[#212121] font-normal"
                  >
                    {language === "Hindi" ? e.title : e.title2}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-col gap-[0.2rem] w-full mt-[1rem]">
              <p className="text-[1.7rem] text-[#212121] font-normal">
                Dr. Ramesh Pokhriyal Nishank
              </p>
              <p className="text-[1.7rem] text-[#212121] font-normal">
                (Former Minister of Education of India)
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-[auto] px-[1rem] py-[1rem] h-[100%] opacity-0 translate-x-[50px] animate-[fadeInRight_1s_ease-out_forwards] border-[1px] border-[#d2d2d2] rounded-md shadow-xl">
            <div className="absolute bottom-[1rem] left-[1rem] z-[10] bg-[#353537] w-[auto] px-[2rem] py-[1rem] rounded-r-xl">
              <div className="flex flex-col gap-[0.2rem] justify-center">
                <p className="text-[1.6rem] text-[white] font-normal">
                  Dr. Ramesh Pokhriyal Nishank
                </p>
                <p className="text-[1.6rem] text-[white] font-normal">
                  (Former Minister of Education of India)
                </p>
              </div>
            </div>
            <img
              src={Our_vision_img}
              alt="img"
              className="w-[100%] h-[auto] rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
