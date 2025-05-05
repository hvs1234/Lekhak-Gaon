// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Festival from "./Pages/Festival/Festival";
import Media from "./Pages/Media/Media";
import MediaPhotos from "./Pages/Media/MediaPhotos";
import MediaVideos from "./Pages/Media/MediaVideos";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Donate from "./Pages/Donate/Donate";
import DonateMain from "./Pages/Donate/DonateMain";
import TravelStay from "./Pages/TravelStay/TravelStay";
import Partners from "./Pages/Partners/Partners";
import Vision from "./Pages/Vision/Vision";
import Events from "./Pages/Events/Events";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/festival" element={<Festival />}></Route>
          <Route path="/media" element={<Media />}></Route>
          <Route path="/mediapics" element={<MediaPhotos />}></Route>
          <Route path="/mediavideos" element={<MediaVideos />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/donatebook" element={<DonateMain />}></Route>
          <Route path="/travelstay" element={<TravelStay />}></Route>
          <Route path="/vision" element={<Vision />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/partners" element={<Partners />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
