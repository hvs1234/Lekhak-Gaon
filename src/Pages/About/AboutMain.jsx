// import React from 'react'
import temple_icon from "/Media/temple-icon.png";
import about_img from "/Media/About/5.jpg";

const AboutMain = () => {

  return (
    <>
      <div
        className={`py-[6rem] px-[20rem] w-[100%] relative object-cover max-2xl:px-[5rem] max-md:px-[2rem]`}
      >
        <div className="flex flex-col gap-[1rem] justify-center items-center text-center">
          <div className="flex items-center justify-center w-[100%]">
            <img
              src={temple_icon}
              alt="img"
              className="w-[30%] max-sm:w-[50%] max-[400px]:w-[100%]"
            />
          </div>
          <div className="">
            <h2 className="text-[4rem] font-normal text-[#212121]">
              हिमालय का लेखक गांव
            </h2>
          </div>
        </div>
        <div className="py-[6rem] grid grid-cols-2 gap-[4rem] w-[100%] justify-center text-justify max-md:text-[1.6rem] max-xl:grid-cols-1">
          <div className="flex flex-col gap-[2rem] justify-center w-[100%]">
            <p className="text-[2rem] font-normal text-[#212121] max-md:text-[1.6rem]">
              ‘स्पर्श हिमालय’ का यह ‘लेखक गाँव’ हिमालय की गोद में एक ऐसा
              अद्वितीय स्थान होगा, जहाँ रचनाकारों को प्रकृति की छांव में सृजन की
              नई ऊंचाइयों को छूने का अवसर मिलेगा। यहाँ साहित्यकारों को प्रकृति
              के सौंदर्य, हिमालय की पवित्रता और उसकी शांतिमय आभा के साथ एकात्मता
              का अनुभव होगा। ‘लेखक गाँव’ का उद्देश्य न केवल सृजनात्मकता को
              प्रोत्साहित करना है, बल्कि विभिन्न विधाओं में लेखन और कला से जुड़े
              विद्वानों को एक ऐसा मंच देना है, जहाँ वे अपने विचारों, अनुभवों और
              धारणाओं का आदान-प्रदान कर सकें। यह स्थान आधुनिक सुविधाओं के साथ
              साथ पर्यावरण के संरक्षण की दृष्टि से भी महत्वपूर्ण होगा।
            </p>
            <p className="text-[2rem] font-normal text-[#212121] max-md:text-[1.6rem]">
              ‘लेखक गाँव’ में निवास करने वाले साहित्यकारों, कवियों, और कलाकारों
              को हिमालय की अलौकिकता के बीच अपनी रचनात्मक यात्रा को संवारने का
              अनोखा अवसर मिलेगा। यहाँ विभिन्न कार्यशालाएँ, संगोष्ठियाँ और
              विचार-विमर्श के सत्र आयोजित किए जाएंगे, जहाँ साहित्य, कला, और
              संस्कृति के विभिन्न आयामों पर मंथन होगा। स्थानीय परम्पराओं,
              लोककथाओं, और हिमालयी संस्कृति के संरक्षण और संवर्धन के प्रयासों के
              साथ-साथ ‘लेखक गाँव’ में नवीन शोध और अध्यवसाय को भी बढ़ावा दिया
              जाएगा। यह स्थान न केवल सृजनशीलता का केन्द्र बनेगा, बल्कि भविष्य की
              पीढ़ियों के लिए हिमालय के ज्ञान, संस्कृति, और आत्मचेतना का
              महत्वपूर्ण संकलन स्थल भी होगा।
            </p>
          </div>
          <div className="flex items-center justify-center w-[100%]">
            <img src={about_img} alt="img" className="w-[100%] rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
