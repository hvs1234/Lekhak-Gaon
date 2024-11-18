// import React from 'react'
import img from "/Media/About/30.jpg";

const ContactForm = () => {
  return (
    <>
      <div className="w-[100%] relative object-cover">
        <div className="grid grid-cols-2 w-[100%] justify-center h-[100%] max-xl:grid-cols-1">
          <div className="w-[100%] h-[100%] relative object-cover flex items-center justify-center">
            <img src={img} alt="img" className="w-[100%] h-[100%]" />
          </div>
          <div className="bg-[#f2f2f2] w-[100%] px-[4rem] py-[4rem] max-[400px]:px-[2rem] max-[400px]:py-[2rem]">
            <form
              action=""
              method="post"
              className="w-[100%] flex flex-col gap-[2rem]"
            >
              <div className="grid grid-cols-2 max-sm:grid-cols-1 w-[100%] gap-[2rem]">
                <div className="flex flex-col gap-[1rem] w-[100%]">
                  <label
                    htmlFor="firstname"
                    className="text-[1.6rem] font-normal text-[#212121]"
                  >
                    First Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="firstname"
                    className="w-[100%] border-[1px] border-[grey] rounded-md px-[2rem] py-[1rem] text-[1.6rem] font-normal text-[#212121] 
                    bg-[transparent] outline-none capitalize"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="flex flex-col gap-[1rem] w-[100%]">
                  <label
                    htmlFor="firstname"
                    className="text-[1.6rem] font-normal text-[#212121]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="firstname"
                    className="w-[100%] border-[1px] border-[grey] rounded-md px-[2rem] py-[1rem] text-[1.6rem] font-normal text-[#212121] 
                    bg-[transparent] outline-none capitalize"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 max-sm:grid-cols-1 w-[100%] gap-[2rem]">
                <div className="flex flex-col gap-[1rem] w-[100%]">
                  <label
                    htmlFor="email"
                    className="text-[1.6rem] font-normal text-[#212121]"
                  >
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="w-[100%] border-[1px] border-[grey] rounded-md px-[2rem] py-[1rem] text-[1.6rem] font-normal text-[#212121] 
                    bg-[transparent] outline-none capitalize"
                    placeholder="Enter your valid email address"
                  />
                </div>
                <div className="flex flex-col gap-[1rem] w-[100%]">
                  <label
                    htmlFor="phone"
                    className="text-[1.6rem] font-normal text-[#212121]"
                  >
                    Phone Number *
                  </label>
                  <input
                    required
                    type="number"
                    name="phone"
                    id="phone"
                    className="w-[100%] border-[1px] border-[grey] rounded-md px-[2rem] py-[1rem] text-[1.6rem] font-normal text-[#212121] 
                    bg-[transparent] outline-none capitalize"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 w-[100%] gap-[2rem]">
                <div className="flex flex-col gap-[1rem] w-[100%]">
                  <label
                    htmlFor="address"
                    className="text-[1.6rem] font-normal text-[#212121]"
                  >
                    Current Address *
                  </label>
                  <textarea
                    required
                    cols={30}
                    rows={5}
                    type="text"
                    name="address"
                    id="address"
                    className="w-[100%] border-[1px] border-[grey] rounded-md px-[2rem] py-[1rem] text-[1.6rem] font-normal text-[#212121] 
                    bg-[transparent] outline-none capitalize resize-none"
                    placeholder="Enter your current address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 w-[100%] gap-[2rem]">
                <div className="flex flex-col gap-[1rem] w-[100%]">
                  <label
                    htmlFor="address"
                    className="text-[1.6rem] font-normal text-[#212121]"
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    cols={30}
                    rows={5}
                    type="text"
                    name="message"
                    id="message"
                    className="w-[100%] border-[1px] border-[grey] rounded-md px-[2rem] py-[1rem] text-[1.6rem] font-normal text-[#212121] 
                    bg-[transparent] outline-none capitalize resize-none"
                    placeholder="Enter your message"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 w-[100%] gap-[2rem]">
                <div className="">
                  <button
                    type="submit"
                    className="bg-[darkgreen] rounded-md px-[4rem] py-[1rem] text-[white] text-[2rem] font-normal"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
