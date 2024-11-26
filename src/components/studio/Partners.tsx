import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Partners = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["20vw", "-30vw"]);

  const scroll_1 = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const img_1 = useTransform(
    scroll_1.scrollYProgress,
    [0, 1],
    ["8vw", "-20vw"]
  );
  const img_2 = useTransform(scroll_1.scrollYProgress, [0, 1], ["0vw", "20vw"]);

  return (
    <div className="bg-white">
      <motion.div
        className="w-full relative z-20 mt-[-10vw] px-[8vw] bg-white"
        style={{ marginTop: y }}
      >
        <div className="flex items-end relative z-20">
          <motion.img
            src="/images/studio/exo ape-11.webp"
            alt=""
            className="h-[37vw] z-40"
            style={{ y: img_1 }}
          />
          <img
            src="/images/studio/exo ape-12.webp"
            alt=""
            className="h-[22.3vw] ml-[10vw]"
          />
          <motion.img
            src="/images/studio/exo ape-13.webp"
            alt=""
            className="h-[16.7vw] ml-[-5vw] mb-[-1w] relative z-30"
            style={{ y: img_2 }}
          />
        </div>
      </motion.div>
      <div className="flex items-center mt-[-10vw] pt-[40vw] px-[8vw] gap-[9vw] relative z-10 bg-white">
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
          Partners
        </span>
        <div className="flex flex-col gap-[2.22vw] w-[55vw]">
          <h1 className="text-[3.6vw] leading-[4.6vw]">
            We partner with brands and businesses that create exceptional
            experiences where people live, work and unwind.
          </h1>
          <p className="text-[1.2vw] text-dark-gray">
            Interior Design & Furniture <br /> Architecture & Real <br /> Estate
            Hospitality, Travel & Tourism
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
