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
      className=" bg-white min-h-screen relative z-30 pl-[15vw] pr-[7vw] flex flex-col mt-[-80vh]"
      style={{ y }}
    >
      <h1 className="pt-[7vh] text-[15vw] font-Lausanne">Work</h1>
      <div className="flex gap-[8vw] items-start">
        <div className="w-[42vw]">
          <ImageVideo
            image="/images/woman feeling the sun with her eyes closed.webp"
            video="/video/file-3.mp4"
            title="Amaterasu"
            description="Frontier Health invoation"
          />
        </div>
        <div className="flex flex-col w-[22vw]">
          <span className="flex gap-1 w-fit h-[1vh] items-center text-[0.996vw]">
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
          <p className="text-[1.6666vw] mt-[8vh]">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
          <div className="flex relative w-[26vw] cursor-pointer mt-[26vh]">
            <ImageVideo
              image="/images/Columbia Pictures.webp"
              video="/video/file-4.mp4"
              title="columba Pictures "
              description="celebraing century of cenima"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[12vw] mt-[30vh]">
        <div className="w-[18vw] mt-[50vh]">
          <ImageVideo
            image="/images/Studio D.webp"
            video="/video/file-2.mp4"
            title="camblum"
            description="camblum"
          />
        </div>
        <div className="w-[33vw]">
          <ImageVideo
            image="/images/Mother with child in front of a modern house with wooden elements.webp"
            video="/video/file-2.mp4"
            title="camblum"
            description="camblum"
          />
        </div>
      </div>
      <div className="flex justify-end mt-[15vh] pr-[10vw] text-[1.2vw]">
        <a href="#"> Browse all Work </a>
      </div>
    </motion.div>
  );
};

export default Work;