// import React from 'react'
import { Link } from "react-router-dom";
import book_img from "/Media/book-img.jpg";
import Handlers from "../../Services/Handlers";

const DonateContent = () => {
  const { handleOnClick, language } = Handlers();

  return (
    <>
      <div className="w-[100%] relative object-cover">
        <div className="grid grid-cols-2 w-[100%] justify-center max-xl:grid-cols-1">
          <div className="w-[100%] h-[100%] flex items-center justify-center max-xl:order-2">
            <img src={book_img} alt="img" className="w-[100%] h-[100%]" />
          </div>
          <div className="py-[4rem] px-[4rem] max-[400px]:px-[2rem] max-[400px]:py-[2rem] w-[100%] flex flex-col gap-[2rem] justify-center">
            <h2 className="text-[4rem] text-[#212121] max-md:text-[3rem] font-normal">
              Our Books
            </h2>
            <p className="text-[2rem] max-md:text-[1.6rem] text-[#212121] text-justify font-normal">
              {language === "Hindi"
                ? "हमारी कहानियाँ शुरुआती और आत्मविश्वासी पाठकों दोनों के लिए हैं और इनमें कथा, गैर-कथा, नाटक और कविता जैसे कई प्रकार की विधाएँ शामिल हैं। रंगीन चित्रों, भारतीय भाषाओं में स्थानीयकृत सामग्री और आसान पहुँच के साथ, हमारी किताबें बच्चों को पढ़ने की बाधाओं को पार करने और आजीवन सीखने वाले बनने में मदद करती हैं।"
                : "Our stories are for both beginner and confident readers, and they include various genres such as fiction, non-fiction, drama, and poetry. With colorful illustrations, localized content in Indian languages, and easy access, our books help children overcome reading barriers and become lifelong learners."}
            </p>
            <p className="text-[2rem] max-md:text-[1.6rem] text-[#212121] text-justify font-normal">
              {language === "Hindi"
                ? "हमने बच्चों को पढ़ने की दुनिया में आकर्षित करने के लिए कई नवाचारों में भी निवेश किया है, जैसे ओपन सोर्स डिजिटल और ऑडियो किताबें। क्योंकि पढ़ाई साक्षरता की पहली सीढ़ी है।"
                : "We have also invested in several innovations to engage children in the world of reading, such as open-source digital and audiobooks. Because education is the first step to literacy."}
            </p>
            <p className="text-[2rem] max-md:text-[1.6rem] text-[#212121] text-justify font-normal">
              {language === "Hindi"
                ? "हमारा उद्देश्य बच्चों को पढ़ने और सीखने का आनंद प्रदान करना है। हमारी किताबें विभिन्न आयु समूहों और पठन स्तरों के लिए डिज़ाइन की गई हैं, जो उनकी रुचियों और सांस्कृतिक पृष्ठभूमि को ध्यान में रखती हैं। सरल भाषा और दिलचस्प कहानियों के माध्यम से, हम बच्चों के भीतर कल्पना, रचनात्मकता और ज्ञान की भूख को बढ़ावा देते हैं। हमारा मानना है कि पढ़ने की आदत न केवल ज्ञान का स्रोत है, बल्कि यह बच्चों की सोचने की क्षमता, शब्दावली और आत्मविश्वास को भी मजबूत करती है। हमारी किताबें स्थानीय परिवेश और संस्कृति को दर्शाते हुए बच्चों के लिए एक पहचान का अनुभव प्रदान करती हैं। हमने यह सुनिश्चित किया है कि हमारे संसाधन समावेशी हों और विशेष जरूरतों वाले बच्चों के लिए भी उपयोगी बनें। डिजिटल माध्यमों और ऑडियोबुक्स के जरिए, हम बच्चों तक उनकी पसंदीदा कहानियाँ हर जगह पहुँचाते हैं। हमारा लक्ष्य है कि हर बच्चा पढ़ने की ताकत से सशक्त बने और अपने सपनों को साकार करे।"
                : "Our goal is to provide children with the joy of reading and learning. Our books are designed for various age groups and reading levels, taking into account their interests and cultural backgrounds. Through simple language and engaging stories, we foster imagination, creativity, and a thirst for knowledge in children. We believe that the habit of reading is not only a source of knowledge but also strengthens children's thinking ability, vocabulary, and self-confidence. Our books offer children an identity experience by reflecting the local environment and culture. We have ensured that our resources are inclusive and useful for children with special needs. Through digital media and audiobooks, we bring children's favorite stories everywhere. Our goal is to empower every child with the power of reading and help them achieve their dreams."}
            </p>
            <div className="mt-[2rem]">
              <Link
                to={"/donatemain"}
                onClick={handleOnClick("/donatemain")}
                className="px-[4rem] py-[1rem] bg-[darkgreen] text-[white] font-normal text-[2rem] rounded-full 
                transition-all duration-[0.2s] ease-linear hover:opacity-[0.8]"
              >
                Donate Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateContent;
