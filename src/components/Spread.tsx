import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Spread = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["90vw", "-20vw"]);
  return (
    <div className="relative min-h-screen z-10">
      <motion.div
        className="flex flex-col relatve items-center py-[10vw] bg-white"
        style={{ y }}
      >
        <span className="flex gap-1 w-fit h-[1vh] items-center text-[0.996vw]">
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-[0.9vw]"
          >
            <path
              data-v-669b4a84=""
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          Featured Projects
        </span>
        <div className="flex pt-[5vh] text-[10vw] font-Lausanne relative capitalize w-full overflow-hidden justify-center ">
          <h1 className="max-w-[50vw] text-center lines leading-[10vw]">
            Spread the News
          </h1>
        </div>
        <p className="text-[1.4vw] w-[31vw] text-center mt-[3vw]">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
        <div className="flex justify-center end mt-[2vh] text-[1.2vw]">
          <a href="#"> Browse all Work </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Spread;
