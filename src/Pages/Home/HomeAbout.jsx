// import React from 'react'
import temple_icon from "/Media/temple-icon.png";
import Handlers from "../../Services/Handlers";
import { useRef, useState } from "react";
import WatchVideo from "../../Components/Card/WatchVideo";
import { HomeWatchVideoData } from "../../APIs/WatchVideoAPI";

const HomeAbout = () => {
  const { homeabouttourdata, useScrollAnimation, animatedSections, language } =
    Handlers();

  const [homewatchvideodata] = useState(HomeWatchVideoData);

  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef, "homeAboutTourSection", 0);

  return (
    <>
      <div
        className={`py-[6rem] px-[20rem] w-[100%] relative max-2xl:px-[5rem] max-md:px-[2rem]`}
      >
        <div className="flex flex-col gap-[2rem] w-[100%] items-center justify-center">
          <div className="w-[100%] flex items-center justify-center">
            <img
              src={temple_icon}
              alt="icon"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <h2 className="text-[4rem] font-normal text-[#212121] max-md:text-[3rem]">
            {language === "Hindi"
              ? `भारत का पहला लेखक गाँव`
              : `Sparsh Himalaya Festival - 2024`}
          </h2>
          <p className="text-[2rem] font-normal text-[#212121] max-md:text-[1.6rem] font-[Saira] text-justify">
            {language === "Hindi"
              ? `धरती का स्वर्ग कहे जाने वाले हिमालय ने विश्व कल्याण के पथ पर
            सुख,समृद्धि, अन्न, धन, आरोग्यता और विश्व शांति के द्वार प्राणी जगत
            के लिए खोले हैं। दिव्य हिमालय के कण-कण की अलौकिकता को महसूस करने,
            उसे आत्मसात करने,संस्कृति, सभ्यता और परम्पराओं को जानने, हिमालय के
            विविध रूपों को देखने-समझने, ज्ञान-विज्ञान, शोध एवं अनुसन्धान की दिशा
            में नवाचारी पहल करने और हिमालय का महत्व पूरे विश्व में प्रसारित करने
            का संकल्प लिया है ‘स्पर्श हिमालय’ अभियान ने। ‘वसुधैव कुटुम्बकम्’ के
            भाव को संस्कृति, आध्यात्म, ज्ञान, विज्ञान के माध्यम से सम्पूर्ण
            विश्व को बन्धुत्व का पाठ पढ़ाने वाले हिमालय और हिमालयीय सरोकारों को
            संजोता ‘स्पर्श हिमालय अभियान’ पूरे विश्व में हिमालय के उच्च मौलिक
            चिन्तन,जीवनदर्शन और अमूल्य विपुल सम्पदाओं के संरक्षण संवर्द्धन के
            लिए संकल्पबद्ध है। इसी संकल्पना की श्रृंखला में ‘स्पर्श हिमालय’ के
            तत्वावधान में निकट भविष्यमें एक अनोखा और अपने विशिष्ट ढंग के ‘लेखक
            गाँव’ की स्थापना प्रस्तावित है। हिमालयीय वैषिश्ट्यता लिए ‘लेखक गाँव’
            का उद्देश्य देश-दुनियाँ के उन विलक्षण,विद्वान साहित्यकारों,
            गीतकारों, कलाकारों को ठौेर प्रदान करना है, जिनकी लेखनी नेअपने समय की
            कालजयी रचनाओं का सृजन कर आमजन के बीच लोकप्रियता हासिल की।`
              : `The Himalayas, called the heaven on earth, have opened the doors of happiness, prosperity, food, wealth, health and world peace for the living world on the path of world welfare. The 'Sparsh Himalaya' campaign has resolved to feel the supernaturalness of every particle of the divine Himalayas, to assimilate it, to know the culture, civilization and traditions, to see and understand the various forms of the Himalayas, to take innovative initiatives in the direction of knowledge, science, research and investigation and to spread the importance of the Himalayas throughout the world. The 'Sparsh Himalaya Abhiyan', which teaches the lesson of brotherhood to the entire world through culture, spirituality, knowledge and science, and cherishes the Himalayas and Himalayan concerns, is committed to the conservation and promotion of the high original thinking, philosophy of life and invaluable abundant wealth of the Himalayas throughout the world. In the series of this concept, under the aegis of 'Sparsh Himalaya', it is proposed to establish a unique and distinctive 'Writer's Village' in the near future. The objective of the 'Writer's Village' with its Himalayan characteristics is to provide a place to those extraordinary, learned writers, lyricists and artists of the country and the world, whose pens have created timeless works of their time and gained popularity among the common people.`}
          </p>
        </div>
        <div className="flex flex-col gap-[2rem] w-[100%] justify-center items-center text-center pt-[4rem]">
          <div className="w-[100%] flex items-center justify-center">
            <img
              src={temple_icon}
              alt="icon"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <h2 className="text-[4rem] font-normal text-[#212121] max-md:text-[3rem]">
            {language === "Hindi"
              ? `लेखक गाँव परिसर`
              : `Writers Village Campus`}
          </h2>
        </div>
        <div
          ref={sectionRef}
          className={`grid grid-cols-3 gap-[1rem] justify-center w-[100%] py-[1rem] max-sm:grid-cols-1 ${
            animatedSections.homeAboutTourSection
              ? "animate-fadeInUp opacity-100"
              : "opacity-0"
          }`}
        >
          {homeabouttourdata.map((e) => {
            return (
              <div
                key={e.id}
                className="flex flex-col gap-[0rem] justify-start items-center text-center w-[100%] h-[100%] bg-[#ffc0e6] rounded-2xl 
                px-[0.1rem] py-[0.1rem] transition-all duration-[0.6s] ease-out hover:translate-y-[-2rem]"
              >
                <div className="flex items-center justify-center w-[100%] h-[100%] rounded-t-2xl">
                  <img
                    src={e.img}
                    alt="img"
                    className="w-[100%] flex justify-center items-center object-cover h-[100%] rounded-t-2xl"
                  />
                </div>
                <div
                  className={`px-[2rem] py-[2rem] text-center flex flex-col gap-[1rem] w-[100%] h-[100%] 
                  justify-start items-center ${e.descBoxClass} rounded-b-2xl`}
                >
                  <p className="text-[2.2rem] text-[white] font-normal">
                    {language === "Hindi" ? e.title : e.title2}
                  </p>
                  <p className="text-[2.2rem] text-[white] font-normal">
                    {language === "Hindi" ? e.subtitle : e.subtitle2}
                  </p>
                  <p className="text-[1.6rem] text-[white]">
                    {language === "Hindi" ? e.desc : e.desc2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <WatchVideo watchvideodata={homewatchvideodata} />
      </div>
    </>
  );
};

export default HomeAbout;
