import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const WorkMotion = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const first = useTransform(scrollYProgress, [0, 1], ["-20vw ", "0vw"]);
  const second = useTransform(scrollYProgress, [0, 1], ["20vw ", "0vw"]);
  return (
    <div
      ref={ref}
      className="w-full h-[300vh] relative bg-dark-blue text-white md:mt-[20vh] mt-[4vw] text-center flex flex-col items-center work-motion"
    >
      <div className="flex flex-col items-center justify-between w-full text-center h-screen sticky top-0 md:p-[10vh] p-[10vw] pt-[16vw] ">
        <div className="flex h-full items-center justify-center w-full absolute top-0 left-0">
          <motion.video
            src="/video/work-motion.mp4"
            autoPlay
            loop
            muted
            className="w-full md:h-screen h-[70vw] object-cover -z-20"
            style={{ scale }}
          ></motion.video>
        </div>
        <div className="absolute h-screen top-0 w-full -z-10 bg-[#040a117c]"></div>
        <span className="flex gap-1 items-center md:text-[0.996vw] text-[3.7vw] ">
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon md:w-[0.9vw] w-[3.7vw]"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          Work with motion
        </span>
        <div className="flex pt-[5vh] text-[10vw] font-Lausanne text-white relative capitalize w-full overflow-hidden justify-center ">
          <motion.h1 style={{ x: first }}>play</motion.h1>
          <motion.h1 style={{ x: second }}> reel</motion.h1>
        </div>
        <p className="md:text-[0.97vw] text-[3.7vw] md:w-[20.8vw]">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default WorkMotion;
