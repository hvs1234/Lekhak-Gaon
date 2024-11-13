// import React from 'react'
import temple_icon from "/Media/temple-icon.png";
import Handlers from "../../Services/Handlers";

const MediaMain = () => {
  const { mediamaindata, mediavideodata } = Handlers();

  return (
    <>
      <div className="py-[9rem] px-[2rem] w-[100%] relative object-cover">
        <div className="flex flex-col gap-[2rem] justify-center items-center text-center mb-[4rem]">
          <div className="flex items-center justify-center w-[100%]">
            <img
              src={temple_icon}
              alt="img"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <h2 className="text-[4rem] text-[#212121] max-md:text-[3rem]">
            यादों का संकलन और सफर
          </h2>
        </div>
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {mediamaindata.map((e) => {
            return <img key={e.id} src={e.img} alt="img" className="" />;
          })}
        </div>
        <div className="flex flex-col gap-[2rem] justify-center items-center text-center mt-[6rem]">
          <div className="flex items-center justify-center w-[100%]">
            <img
              src={temple_icon}
              alt="img"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <h2 className="text-[4rem] text-[#212121] max-md:text-[3rem]">
            दृश्यों का रंगीन संसार
          </h2>
          <div className="w-[100%] grid grid-cols-3 gap-[2rem] justify-center items-center rounded-md max-lg:grid-cols-1">
            {mediavideodata.map((e) => {
              return (
                <iframe
                  key={e.id}
                  src={e.src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="w-[100%] h-[400px] rounded-md"
                ></iframe>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaMain;
