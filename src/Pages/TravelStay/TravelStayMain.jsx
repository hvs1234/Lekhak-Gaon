// import React from 'react'

import { useState } from "react";
import WatchVideo from "../../Components/Card/WatchVideo";
import { HomeWatchVideoData } from "../../APIs/WatchVideoAPI";

const TravelStayMain = () => {
  const [homewatchvideodata] = useState(HomeWatchVideoData);

  return (
    <>
      <div className="pt-[9rem] px-[20rem] max-2xl:px-[5rem] max-md:px-[2rem] w-[100%] relative object-cover">
        <div className="flex flex-col gap-[2rem] w-[100%]">
          <h2 className="text-[4rem] max-md:text-[3rem] text-[crimson]">
            Route Map
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4295.044258223837!2d78.213773!3d30.242589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE0JzMzLjMiTiA3OMKwMTInNDkuNiJF!5e1!3m2!1sen!2sin!4v1732122371175!5m2!1sen!2sin"
            width={"100%"}
            height={"800px"}
            className="rounded-md"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-col gap-[1rem] w-[100%] mt-[4rem]">
            <h2 className="text-[4rem] max-md:text-[3rem] text-[crimson] capitalize">
              How to reach Lekhak Gaon
            </h2>
            <p className="text-[2rem] max-md:text-[1.6rem] text-justify">
              By Air: Just 7 km from Jolly Grant Airport, Dehradun. Taxis are
              easily available for a short 15-minute drive.
            </p>
            <p className="text-[2rem] max-md:text-[1.6rem] text-justify">
              By Train: Located 21 km from Rishikesh Railway Station. You can
              take a cab or bus for a scenic drive through the hills.
            </p>
            <p className="text-[2rem] max-md:text-[1.6rem] text-justify">
              By Road: Well-connected by road, Lekhak Gaon is accessible via
              private cabs or buses from Rishikesh, Dehradun, and other nearby
              cities.
            </p>
          </div>
          <WatchVideo watchvideodata={homewatchvideodata} />
        </div>
      </div>
    </>
  );
};

export default TravelStayMain;
