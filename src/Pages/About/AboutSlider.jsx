import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Handlers from "../../Services/Handlers";
import temple_icon from "/Media/temple-icon.png";

const AboutSlider = () => {
  const { homesliderdata, useScrollAnimation, animatedSections } = Handlers();
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef, "aboutSliderSection", 0);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      swiper.slideNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`py-[6rem] px-[20rem] w-[100%] h-[100%] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem]`}
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
          What Our Attendees Say!
        </h2>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} px-[1rem] py-[0.2rem] w-[auto] h-[auto] bg-blue-500 rounded-full text-white text-center items-center justify-center text-[1.6rem]">${
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
            className={`flex justify-center items-center h-[100%] w-[100%] ${
              animatedSections.aboutSliderSection
                ? "animate-fadeInUp opacity-100"
                : "opacity-0"
            }`}
          >
            <img
              src={e.img}
              alt="img"
              className="w-[100%] h-[100%] rounded-md block object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutSlider;
