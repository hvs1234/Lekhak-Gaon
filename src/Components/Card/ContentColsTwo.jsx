// import React from 'react'
import PropTypes from "prop-types";

const ContentColsTwo = ({ contentcolstwosdata }) => {
  return (
    <>
      {contentcolstwosdata.map((e) => {
        return (
          <div
            className="py-[4rem] grid grid-cols-2 gap-[4rem] w-[100%] justify-center text-justify max-md:text-[1.6rem] max-xl:grid-cols-1"
            key={e.id}
          >
            <div className={`flex flex-col gap-[2rem] justify-center w-[100%] ${e.textClass}`}>
              <p className="text-[2rem] font-normal text-[#212121] max-md:text-[1.6rem]">
                {e.desc1}
              </p>
              <p className="text-[2rem] font-normal text-[#212121] max-md:text-[1.6rem]">
                {e.desc2}
              </p>
            </div>
            <div className={`flex items-center justify-center w-[100%] ${e.imgClass}`}>
              <img src={e.img} alt="img" className="w-[100%] rounded-md" />
            </div>
          </div>
        );
      })}
    </>
  );
};

ContentColsTwo.propTypes = {
  contentcolstwosdata: PropTypes.array.isRequired,
};

export default ContentColsTwo;