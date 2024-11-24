// import React from 'react'
import PropTypes from "prop-types";

const LogoCard = ({ logodata }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-[4rem] w-[100%] justify-center max-sm:grid-cols-2">
        {logodata.map((e) => {
          return (
            <div
              key={e.id}
              className="flex items-center justify-center w-[100%] h-[100%]"
            >
              <img
                src={e.img}
                alt="img"
                className={`w-[80%] h-[auto] transition-all duration-[0.2s] ease-linear ${e.imgClass}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

LogoCard.propTypes = {
  logodata: PropTypes.array.isRequired,
};

export default LogoCard;
