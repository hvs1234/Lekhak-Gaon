import PropTypes from "prop-types";
import temple_icon from "/Media/temple-icon.png";
import Handlers from "../../Services/Handlers";
import { useRef } from "react";

const WatchVideo = ({ watchvideodata }) => {
  const { useScrollAnimation, animatedSections } = Handlers();

  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef, "watchvideosection", 0);

  return (
    <>
      <div className={`py-[6rem] w-[100%] relative object-cover`}>
        <div
          className={`flex flex-col gap-[2rem] w-[100%] justify-center items-center text-center`}
        >
          <div className={`flex items-center justify-center w-[100%] relative`}>
            <img
              src={temple_icon}
              alt="img"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <h2 className="text-[4rem] max-md:text-[3rem] font-normal text-[#48486e]">
            2024 के आयोजन की झलकियाँ
          </h2>
          <h2 className="text-[3rem] max-md:text-[2.5rem] font-normal text-[#212121]">
            नई शुरुआत का वादा
          </h2>
          <div className="w-[100%] h-[1px] bg-[grey] my-[2rem]"></div>
          <div
            ref={sectionRef}
            className={`py-[2rem] w-[100%] relative grid grid-cols-4 gap-[2rem] max-lg:grid-cols-2 ${
              animatedSections.watchvideosection
                ? "animate-fadeInUp opacity-100"
                : "opacity-0"
            }`}
          >
            {watchvideodata.map((e, index) => {
              return (
                <div
                  className={`rounded-md h-[100%] w-[100%] bg-[#f2f2f2] flex flex-col justify-center shadow-sm transition-all duration-[0.4s] ease-linear
                  animate-wave`}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: "3s",
                  }}
                  key={e.id}
                >
                  <div className="flex flex-col rounded-md justify-start items-center text-center bg-[tomato] px-[2rem] py-[2rem] w-[100%]">
                    <h2 className="text-[white] text-[2rem] max-md:text-[1.6rem] font-normal">
                      {e.title}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-between items-center text-center gap-[4rem] w-[100%] px-[2rem] py-[2rem]">
                    <p className="text-[2rem] max-md:text-[1.6rem] text-[#212121] font-normal">
                      {e.desc}
                    </p>
                    <div className="flex">
                      <a
                        href={e.videolink}
                        target="_blank"
                        className="text-[2rem] text-[blue] border-[2px] border-[yellow] rounded-md px-[4rem] py-[1rem] transition-all duration-[0.2s] ease-linear hover:opacity-[0.8] cursor-pointer max-sm:px-[2rem] max-sm:text-[1.6rem]"
                      >
                        Watch Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

WatchVideo.propTypes = {
  watchvideodata: PropTypes.array.isRequired,
};

export default WatchVideo;
