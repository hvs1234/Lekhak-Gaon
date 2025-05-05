/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import EventCard from "../../Components/Card/EventCard";
import { EventMainCardData } from "../../APIs/EventCardData";

const EventsMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="px-[20rem] py-[6rem] w-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <div
          ref={sectionRef}
          id="courseCard"
          className="relative mt-[4rem] grid grid-cols-3 w-full h-full gap-[4rem] max-xl:grid-cols-2 max-md:grid-cols-1"
        >
          <EventCard eventCardData={EventMainCardData} isVisible={isVisible} />
        </div>
      </div>
    </>
  );
};

export default EventsMain;
