import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import ImageVideo from "./ImageVideo";

const Work = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["60vh", "00vh"]);

  return (
    <motion.div
      className=" bg-white min-h-screen relative z-30 px-[10vw] md:pl-[15vw] md:pr-[7vw] flex flex-col mt-[-80vh] work"
      style={{ y }}
    >
      <span className="gap-1 w-fit h-[1vh] items-center text-[3.7vw] mt-[12vh] md:hidden flex">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon w-[3.9vw]"
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
          ></path>
        </svg>
        Featured Projects
      </span>
      <h1 className="pt-[2vh] md:text-[15vw] text-[16vw] font-Lausanne">
        Work
      </h1>
      <div className="flex md:gap-[8vw] gap-[4vw] items-start flex-col md:flex-row">
        <p className="text-[4.6666vw] mt-[1vh] flex md:hidden w-full ">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="w-full md:w-[42vw]">
          <ImageVideo
            image="/images/woman feeling the sun with her eyes closed.webp"
            video="/video/file-3.mp4"
            title="Amaterasu"
            description="Frontier Health invoation"
            link="https://amaterasu.ai/"
          />
        </div>
        <div className="flex flex-col w-full md:w-[22vw]">
          <span className="gap-1 w-fit h-[1vh] items-center text-[0.996vw] md:mt-[8vh] hidden md:flex">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon w-[0.9vw]"
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              ></path>
            </svg>
            Featured Projects
          </span>
          <p className="text-[1.6666vw] mt-[8vh] hidden md:block">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
          <div className="flex relative md:w-[26vw] w-full cursor-pointer md:mt-[26vh]">
            <ImageVideo
              image="/images/Columbia Pictures.webp"
              video="/video/file-4.mp4"
              title="columba Pictures "
              description="celebraing century of cenima"
              link="https://columbia100.watson.la/"
            />
          </div>
        </div>
      </div>
      <div className="flex md:gap-[12vw] gap-[4vw] md:mt-[30vh] mt-[4vw] flex-col md:flex-row ">
        <div className="w-full md:w-[18vw] md:mt-[50vh]">
          <ImageVideo
            image="/images/Studio D.webp"
            video="/video/file.mp4"
            title="Studio D"
            description="Urban and Landscape Design"
            link="https://cambiumcarbon.com/"
          />
        </div>
        <div className="md:w-[33vw] w-full">
          <ImageVideo
            image="/images/Mother with child in front of a modern house with wooden elements.webp"
            video="/video/file-2.mp4"
            title="camblum"
            description="camblum"
            link="https://studiod.nu/"
          />
        </div>
      </div>
      <div className="flex justify-end md:mt-[15vh] mt-[4vw] pr-[10vw] text-[1.2vw]">
        <a href="#"> Browse all Work </a>
      </div>
    </motion.div>
  );
};

export default Work;
