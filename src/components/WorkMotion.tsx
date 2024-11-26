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
      className="w-full h-[300vh] relative bg-black text-white mt-[20vh] text-center flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-between w-full text-center h-screen sticky top-0 p-[10vh]">
        <motion.video
          src="/video/work-motion.mp4"
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover absolute top-0 left-0 -z-20"
          style={{ scale }}
        ></motion.video>
        <div className="absolute h-screen top-0 w-full -z-10 bg-[#040a117c]"></div>
        <span className="flex gap-1 items-center text-[0.996vw] ">
          <svg
            data-v-669b4a84=""
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
          Work with motion
        </span>
        <div className="flex pt-[5vh] text-[10vw] font-Lausanne text-white relative capitalize w-full overflow-hidden justify-center ">
          <motion.h1 style={{ x: first }}>play</motion.h1>{" "}
          <motion.h1 style={{ x: second }}> reel</motion.h1>
        </div>
        <p className="text-[0.97vw] w-[20.8vw]">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default WorkMotion;
