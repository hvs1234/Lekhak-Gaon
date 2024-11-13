// import React from 'react'
import temple_icon from "/Media/temple-icon.png";

const FestivalMedia = () => {
  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] bg-[#f2f2f2] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem]">
        <div className="flex flex-col gap-[2rem] justify-center items-center text-center">
          <div className="flex items-center justify-center w-[100%]">
            <img
              src={temple_icon}
              alt="img"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <h2 className="text-[4rem] font-normal text-[#47476c] max-md:text-[3rem]">
            Lekhak Gaon Festival Highlights 2024
          </h2>
          <div className="w-[100%] flex justify-center items-center rounded-md">
            <iframe
              src="https://www.youtube.com/embed/mMdVy9fQMy8?si=EEmisknqoz_YufrW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="w-[100%] h-[600px] rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default FestivalMedia;
