// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import Handlers from "../../Services/Handlers";
import ContactForm from "./ContactForm";
import ContactMain from "./ContactMain";
import ContactSlider from "./ContactSlider";

const ContactUs = () => {
  const { useStickyNavbar } = Handlers();
  useStickyNavbar();

  return (
    <>
      <Header />
      <div
        className={`section-main py-[9rem] px-[20rem] w-[100%] h-[70vh] relative object-cover bg-[url('/Media/About/25.jpg')] 
        bg-no-repeat bg-center bg-cover max-2xl:px-[5rem] max-md:px-[2rem]`}
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#2e2e86] opacity-[0.2]"></div>
      </div>

      <ContactMain />
      <ContactForm />
      <ContactSlider />

      {/* Footer */}

      <ScrollTop />
      <Footer />
    </>
  );
};

export default ContactUs;
