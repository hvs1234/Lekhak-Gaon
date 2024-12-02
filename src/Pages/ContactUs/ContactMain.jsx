// import React from 'react'

const ContactMain = () => {
  return (
    <>
      <div className="w-[100%] relative object-cover">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[black] opacity-[0]"></div>
        <div className="relative py-[6rem] px-[20rem] max-2xl:px-[5rem] max-md:px-[2rem] bg-[darkred] w-[100%] h-[100%] flex flex-col justify-center items-center text-center">
          <h2 className="text-[4rem] max-md:text-[3rem] uppercase text-[white] font-normal">
            Contact Us
          </h2>
          <div className="w-[50%] h-[1px] bg-[white] my-[2rem]"></div>
          <div className="flex flex-col gap-[1rem] justify-center items-center text-center mb-[2rem]">
            <p className="text-[3rem] text-[white] font-normal">India Office</p>
          </div>
          <div className="flex flex-col gap-[1rem] w-[100%] justify-center items-center text-center py-[2rem]">
            <p className="text-[2rem] max-md:text-[1.6rem] text-[white] font-normal uppercase">
              Address
            </p>
            <p className="text-[2rem] max-md:text-[1.6rem] text-[white] font-normal capitalize">
              Lekhak Gaon, Thano, Dehradun (Uttarakhand)
            </p>
          </div>
          <div className="flex flex-col gap-[1rem] w-[100%] justify-center items-center text-center py-[2rem]">
            <p className="text-[2rem] max-md:text-[1.6rem] text-[white] font-normal uppercase">
              Phone
            </p>
            <p className="text-[2rem] max-md:text-[1.6rem] text-[white] font-normal">
              Phone: <a href="tel:9997277779">+91-9997277779</a>
            </p>
          </div>
          <div className="flex flex-col gap-[1rem] w-[100%] justify-center items-center text-center py-[2rem]">
            <p className="text-[2rem] max-md:text-[1.6rem] text-[white] font-normal uppercase">
              Contact
            </p>
            <p className="text-[2rem] max-md:text-[1.6rem] text-[white] font-normal">
              Mail:{" "}
              <a href="mailto:lekhakgaon309@gmail.com">
                lekhakgaon309@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
