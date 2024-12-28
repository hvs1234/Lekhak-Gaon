import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Handlers from "../../Services/Handlers";
import temple_icon from "/Media/temple-icon.png";

const FestivalSlider = () => {
  const { homesliderdata, useScrollAnimation, animatedSections, language } =
    Handlers();
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef, "homeSliderSection", 0);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      swiper.slideNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`pb-[6rem] px-[20rem] w-[100%] h-[100%] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem] bg-[white]`}
    >
      <div className="flex flex-col gap-[1rem] w-[100%] justify-center items-center text-center pb-[4rem]">
        <div className="flex items-center justify-center w-[100%]">
          <img
            src={temple_icon}
            alt="img"
            className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
          />
        </div>
        <h2 className="text-[4rem] font-normal text-[#575797] max-md:text-[3rem]">
          {language === "Hindi"
            ? `लेखक गांव में पहुंची विभूतियों ने साझा किए विचार`
            : `The eminent personalities who reached the writer's village shared their views`}
        </h2>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} px-[1rem] py-[0.2rem] w-[auto] h-[auto] bg-blue-500 rounded-full text-white 
            text-center items-center justify-center text-[1.6rem]">${
              index + 1
            }</span>`;
          },
        }}
        loop={true}
        speed={1000}
        modules={[Pagination]}
        className="mySwiper w-[100%] h-[100%] flex justify-center items-center"
      >
        {homesliderdata.map((e) => (
          <SwiperSlide
            key={e.id}
            ref={sectionRef}
            className={`flex justify-center items-center h-[100vh] w-[100%] ${
              e.bgImg
            } bg-no-repeat bg-center bg-cover 
              relative object-cover w-[100%] ${
                animatedSections.homeSliderSection
                  ? "animate-fadeInUp opacity-100"
                  : "opacity-0"
              }`}
          >
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0]"></div>
            <div className="relative flex flex-col gap-[2rem] items-start justify-end h-[100%] px-[10rem] py-[10rem] w-[100%] text-justify max-sm:px-[6rem] max-sm:py-[6rem]">
              <p className="text-[2rem] max-md:text-[1.6rem] bg-[#42371d] text-[white] rounded-md px-[2rem] py-[0.5rem]">
                {language === "Hindi" ? e.desc : e.desc2}
              </p>
              <h2 className="text-[3rem] max-md:text-[2rem] font-normal text-[white] bg-[#222222] rounded-md px-[2rem] py-[0.5rem]">
                {language === "Hindi" ? e.title : e.title2}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FestivalSlider;
