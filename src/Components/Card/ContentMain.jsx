// import React from 'react'
import Handlers from "../../Services/Handlers";
import temple_icon from "/Media/temple-icon.png";
import PropTypes from "prop-types";

const ContentMain = ({ contentmaindata }) => {
  const { language } = Handlers();

  return (
    <>
      {contentmaindata.map((e) => {
        return (
          <div
            className={`py-[4rem] px-[20rem] w-[100%] relative object-cover ${e.mainClass} grid grid-cols-2 gap-[4rem] justify-center 
            max-2xl:px-[5rem] max-md:px-[2rem] max-md:grid-cols-1`}
            key={e.id}
          >
            <div
              className={`relative w-[100%] flex flex-col justify-start items-center gap-[2rem] ${e.textClass}`}
            >
              <div className="flex items-center justify-center w-[100%]">
                <img
                  src={temple_icon}
                  alt="img"
                  className="w-[50%] max-sm:w-[50%] max-[400px]:w-[100%]"
                />
              </div>
              <h2 className="text-[3rem] font-normal text-[#212121] max-md:text-[2.5rem]">
                {language === "Hindi" ? e.title : e.title2}
              </h2>
              <p className="text-[2rem] font-normal text-[#212121] max-md:text-[1.6rem] text-justify">
                {language === "Hindi" ? e.desc : e.desc2}
              </p>
            </div>
            <div
              className={`flex items-center justify-center w-[100%] ${e.imgClass}`}
            >
              <img src={e.img} alt="img" className={`w-[100%] rounded-md`} />
            </div>
          </div>
        );
      })}
    </>
  );
};

ContentMain.propTypes = {
  contentmaindata: PropTypes.array.isRequired,
};

export default ContentMain;
