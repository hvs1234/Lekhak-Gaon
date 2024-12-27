/* eslint-disable no-unused-vars */
// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeExperience from "./HomeExperience";
import HomeSlider from "./HomeSlider";
import HomeWheather from "./HomeWheather";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeExperience />
      {/* <HomeWheather /> */}
      <HomeSlider />

      {/* Footer */}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Home;
