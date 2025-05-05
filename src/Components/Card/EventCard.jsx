/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const EventCard = ({ eventCardData, isVisible }) => {
  return (
    <>
      {eventCardData.map((ele, index) => {
        return (
          <div
            key={ele?.id}
            className={`flex flex-col gap-[1rem] w-full h-full shadow-md rounded-xl relative border-[1px] border-[#d2d2d2] transition-all duration-[0.5s] ease-in-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[100px]"
            }`}
            style={{ transitionDelay: `${index * 0.4}s` }}
          >
            <div className="flex justify-center items-center w-auto h-auto overflow-hidden rounded-xl">
              <img
                src={ele?.img}
                alt="img"
                className="w-full h-full object-cover transition-all duration-[0.8s] ease-in-out hover:scale-[1.2] rounded-xl"
              />
            </div>
            <div className="flex flex-col px-[2rem] py-[2rem] justify-center">
              <h2 className="text-[2.5rem] font-normal text-[#212121]">
                {ele?.title}
              </h2>
              <p className="text-[2rem] text-[#414141] font-normal">
                {ele?.desc}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventCard;
