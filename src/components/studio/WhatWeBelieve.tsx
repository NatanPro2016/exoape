import React from "react";
import UpAnimtion from "../UpAnimtion";
import useIsMobile from "../../hook/useIsMobile";

const WhatWeBelieve = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex md:flex-row flex-col w-full px-[8vw] py-[12vw] md:items-end what-we-believe">
      <span className="flex gap-[0.8vw] items-center md:text-[0.996vw] text-[3.6vw] md:mb-[18vw]">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon md:w-[0.9vw] w-[3.6vw]"
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="black"
          ></path>
        </svg>
        How we work
      </span>
      <div className="flex flex-col  md:ml-[12vw] ">
        <h1 className="pt-[5vh] md:text-[10vw] text-[16vw] font-Lausanne flex flex-col relative">
          <div className="h-[19vw] flex overflow-hidden">
            <UpAnimtion content="Data" />
          </div>
          <div className="h-[19vw] flex overflow-hidden md:mt-[-9vw] mt-[-5vw]">
            <UpAnimtion content="Informs," />
          </div>
          <div className="h-[19vw] flex overflow-hidden md:mt-[-9vw] mt-[-5vw]">
            <UpAnimtion content="Emotion" />
          </div>
          <div className="h-[19vw] flex overflow-hidden md:mt-[-9vw] mt-[-5vw]">
            <UpAnimtion content="Converts" />
          </div>
        </h1>
        <p className="md:w-[37vw] md:text-[1.66vw] text-[4.8vw] mt-[8vw]">
          We believe that the most effective outcomes are achieved when
          data-driven insights are used to inspire emotive experiences. Leading
          to increased brand loyalty, long-term customer engagement, and higher
          conversion rates.
        </p>
      </div>
      {!isMobile && (
        <div className="flex-flex-col text-[0.8vw] border-t-light-gray-08 border-t-[0.1vw] pt-[2vw] w-[12vw]">
          "Our approach is informed by insight and research, but at the end of
          the day, we focus on making people feel."
        </div>
      )}
    </div>
  );
};

export default WhatWeBelieve;
