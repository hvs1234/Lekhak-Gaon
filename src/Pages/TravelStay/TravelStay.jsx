// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import Handlers from "../../Services/Handlers";
import TravelStayMain from "./TravelStayMain";
import TravelStaySlider from "./TravelStaySlider";

const TravelStay = () => {
  const { useStickyNavbar } = Handlers();
  useStickyNavbar();

  return (
    <>
      <Header />
      <div
        className={`section-main py-[9rem] px-[20rem] w-[100%] h-[70vh] relative object-cover bg-[url('/Media/logo.jpg')] 
        bg-no-repeat bg-center bg-cover max-2xl:px-[5rem] max-md:px-[2rem]`}
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#434075] opacity-[0.5]"></div>
      </div>

      <TravelStayMain />
      <TravelStaySlider />

      {/* Footer */}

      <ScrollTop />
      <Footer />
    </>
  );
};

export default TravelStay;
