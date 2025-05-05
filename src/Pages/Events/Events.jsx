/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../Components/Header/Header";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Footer from "../../Components/Footer/Footer";
import EventsMain from "./EventsMain";

const Events = () => {
  return (
    <>
      <Header />
      <div
        className={`section-main py-[9rem] px-[20rem] w-[100%] h-[70vh] relative object-cover bg-[url('/Media/Home/pic5.jpg')] 
        bg-no-repeat bg-center bg-cover max-2xl:px-[5rem] max-md:px-[2rem]`}
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#434075] opacity-[0.5]"></div>
      </div>
      <EventsMain />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Events;
