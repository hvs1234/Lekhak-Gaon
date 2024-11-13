// import React from 'react'
import temple_icon from "/Media/temple-icon.png";
import festival_img from "/Media/Festival/1.jpg";

const FestivalMain = () => {
  return (
    <>
      <div className="py-[6rem] px-[20rem] w-[100%] relative object-cover">
        <div className="relative w-[100%] flex flex-col justify-center items-center text-center gap-[2rem]">
          <div className="flex items-center justify-center w-[100%]">
            <img
              src={temple_icon}
              alt="img"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <h2 className="text-[4rem] font-normal text-[#212121] max-md:text-[3rem]">
            स्पर्श हिमालय महोत्सव
          </h2>
          <p className="text-[2rem] font-normal text-[#212121] max-md:text-[1.6rem]">
            राज्य के प्रतिष्ठित रचनाकार एक स्थल पर मिले और अनेक कहानियों का
            स्थानीय बोली में स्थलीय अनुवाद के सत्र में प्रतिभाग किया। शिक्षा
            मंत्रालय ,भारत सरकार के राष्ट्रीय पुस्तक विन्यास द्वारा आयोजित यह
            कार्यक्रम सृजनीय और सराहनीय रहा। गढ़वाल तथा कुमाऊनी रचनाकारों द्वारा
            कवि सम्मेलन एवं पुस्तक चर्चा एक आकर्षण रहा।
          </p>
          <div className="flex items-center justify-center w-[100%]">
            <img src={festival_img} alt="img" className="w-[100%] rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FestivalMain;
