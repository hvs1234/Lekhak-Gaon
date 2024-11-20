// import React from 'react'

import Footer from "../../Components/Footer/Footer";
import ScrollTop from "../../Components/Footer/ScrollTop";
import Header from "../../Components/Header/Header";
import Handlers from "../../Services/Handlers";

const DonateMain = () => {
  const { useStickyNavbar } = Handlers();
  useStickyNavbar();

  return (
    <>
      <Header />
      <div
        className={`section-main py-[9rem] px-[20rem] w-[100%] h-[70vh] relative object-cover bg-[url('/Media/hill-img.jpg')] 
        bg-no-repeat bg-center bg-cover max-2xl:px-[5rem] max-md:px-[2rem]`}
      >
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#434075] opacity-[0.5]"></div>
      </div>

      <div className="py-[6rem] px-[20rem] max-2xl:px-[5rem] max-md:px-[2rem] w-[100%] relative flex flex-col gap-[1rem]">
        <p className="text-[2.5rem] max-md:text-[1.8rem] font-normal text-[black]">
          आमंत्रण
        </p>
        <p className="text-[2rem] max-md:text-[1.6rem] font-normal text-[#212121] text-justify">
          देश के पहले लेखक गांव थानों,देहरादून में स्थापित होने वाले भव्य
          पुस्तकालय में आप सभी करें प्रतिभाग:
        </p>
        <p className="text-[2rem] max-md:text-[1.6rem] font-normal text-[#212121] text-justify">
          विगत माह दिनांक 25 अक्टूबर को देश के पहले लेखक गांव का शुभारंभ थानों
          ,देहरादून में देश के पूर्व राष्ट्रपति श्री राम नाथ कोविंद जी द्वारा
          ,उत्तराखंड के माननीय राज्यपाल,मुख्यमंत्री,आध्यात्मिक गुरु महामंडलेश्वर
          अवधेशानंद जी,चिदानंद मुनि जी,योगाचार्य बालकृष्ण जी के सानिध्य में किया
          गया। इस अवसर पर अंतरराष्ट्रीय साहित्य,संस्कृति एवं कला महोत्सव 2024 का
          भी आयोजन किया गया। महोत्सव में देश के माननीय पर्यटन एवं संस्कृति
          मंत्री श्री गजेन्द्र शेखावत, प्रख्यात गीतकार प्रसून जोशी, प्रदेश के
          सभी पद्म विभूषित गणमान्य, राज्यसभा सांसद और प्रख्यात नृत्यांगना सोनल
          मानसिंह, 42 देशों से आमंत्रित लेखक तथा साहित्यकारों सहित लोक
          साहित्यकार,कवि,शोधार्थी,छायाकार आदि सम्मिलित हुए। इस लेखक गांव में
          शीघ्र ही एक भव्य पुस्तकालय की स्थापना नालंदा पुस्तकालय की वैभव अवधारणा
          पर किया जा रहा है। इस अभिनव पहल के लिए आप सभी के योगदान की नितांत
          आवश्यकता है। आपके पास यदि पुस्तकों,पांडुलिपियों,प्राचीन धरोहरों का
          संग्रह है तो आप अपने योगदान के साथ इस लेखक गांव के पुस्तकालय में
          इन्हें संरक्षित कर सकते हैं। इस प्रयास से ये दुर्लभ संकलन देश दुनिया
          को विदित हो सकेगा। आपके योगदान को पुस्तकालय वीथिका में विवरण सहित
          अंकित किया जाएगा।
        </p>
        <div className="flex flex-col gap-[2rem] w-[100%] py-[2rem]">
          <h2 className="text-[2rem] text-[crimson] uppercase">Donate Now</h2>
          <div className="flex flex-wrap items-center gap-[2rem] w-[100%]">
            <a
              href="#"
              className="bg-[orangered] text-[white] font-normal text-[2rem] px-[2rem] py-[1rem] rounded-md 
              transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
            >
              1000 INR
            </a>
            <a
              href="#"
              className="bg-[orangered] text-[white] font-normal text-[2rem] px-[2rem] py-[1rem] rounded-md 
              transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
            >
              5000 INR
            </a>
            <a
              href="#"
              className="bg-[orange] text-[white] font-normal text-[2rem] px-[2rem] py-[1rem] rounded-md 
              transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
            >
              or any amount you wish to contribute
            </a>
          </div>
        </div>
        <p className="text-[2rem] max-md:text-[1.6rem] font-normal text-[#212121] text-justify">
          आप अपने पूर्वजों की विरासतों को हमेशा साझा कीजिए तथा जनमानस तक इन्हें
          पहुंचाते हुए गौरवान्वित होइए। परम्परागत ज्ञान परम्परा को भावी पीढ़ी के
          लिए संजोने के इस अभियान का हिस्सा बने लेखक गांव के साथ।
        </p>
        <p className="text-[2rem] max-md:text-[1.6rem] font-normal text-[#212121] text-justify">
          अधिक जानकारी के लिए कृपया संपर्क कीजिए:{" "}
          <a href="tel:9997277779" className="text-[crimson]">+91-9997277779</a>
        </p>
        <p className="text-[2rem] max-md:text-[1.6rem] font-normal text-[#212121] text-justify">
          For mail query:{" "}
          <a href="mailto:lekhakgaon309@gmail.com" className="text-[crimson]">lekhakgaon309@gmail.com</a>
        </p>
      </div>

      {/* Footer */}

      <ScrollTop />
      <Footer />
    </>
  );
};

export default DonateMain;