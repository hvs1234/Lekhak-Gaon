import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import temple_icon from "/Media/temple-icon.png";

const AboutMedia = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full bg-[#f2f2f2]">
      <div className="flex flex-col gap-8 justify-center items-center text-center pt-[4rem] pb-[4rem]">
        <div className="flex items-center justify-center w-full">
          <img
            src={temple_icon}
            alt="img"
            className="w-[30%] max-sm:w-[50%] max-[400px]:w-full"
          />
        </div>
        <h2 className="text-6xl font-normal text-[#47476c] max-md:text-4xl">
          Lekhak Gaon Festival Highlights 2024
        </h2>
      </div>
      <div
        className="relative w-full h-[70vh] group flex items-center justify-center"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        <video
          ref={videoRef}
          src="/Media/lekhakGaon-video.mp4"
          loop
          muted
          playsInline
          className="w-full h-full object-cover shadow-xl"
        ></video>
        {showControls && (
          <button
            onClick={togglePlayPause}
            className="absolute flex items-center justify-center bg-black bg-opacity-50 text-white text-[4rem] rounded-full 
            px-[2rem] py-[2rem] transition-opacity duration-300"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        )}
      </div>
    </div>
  );
};

export default AboutMedia;
