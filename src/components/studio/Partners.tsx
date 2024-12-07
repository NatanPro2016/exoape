import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import useIsMobile from "../../hook/useIsMobile";

const Partners = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
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
    ["8vw", "-30vw"]
  );
  const img_2 = useTransform(scroll_1.scrollYProgress, [0, 1], ["-20vw", "20vw"]);

  return (
    <div className="bg-white pb-[15vw] h-fit partners">
      <motion.div
        className="w-full relative z-20 mt-[-20vw] px-[8vw] bg-white"
        style={{ marginTop: y }}
      >
        <div className="flex items-end relative z-20 mt-[25vw] md:mt-0">
          {!isMobile && (
            <motion.img
              src="/images/studio/exo ape-11.webp"
              alt=""
              className="h-[37vw] z-40"
              style={{ y: img_1 }}
            />
          )}
          <img
            src="/images/studio/exo ape-12.webp"
            alt=""
            className="md:h-[22.3vw] md:ml-[10vw] ml-[2vw] h-[45vw] mt-[5vw]"
          />
          <motion.img
            src="/images/studio/exo ape-13.webp"
            alt=""
            className="md:h-[16.7vw] h-[50vw] md:ml-[-5vw] ml-[-20vw] md:mb-[-1w] mb-[-20vw] relative z-30"
            style={{ y: img_2 }}
          />
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row  md:items-center md:mt-[-10vw] pt-[40vw] px-[8vw] pb-[18vw] md:gap-[9vw] relative z-10 bg-white">
        <span className="flex gap-1 items-center md:text-[0.996vw] text-[3.6vw] ">
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon md:w-[0.9vw] w-[3.6vw]"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          Partners
        </span>
        <div className="flex flex-col gap-[2.22vw] md:w-[55vw]">
          <h1 className="md:text-[3.6vw] text-[7.7vw] md:leading-[4.6vw] leading-[9vw] mt-[11vw] mb-[5.3vw] md:m-0">
            We partner with brands and businesses that create exceptional
            experiences where people live, work and unwind.
          </h1>
          <p className="md:text-[1.2vw] text-[4.8vw] text-dark-gray">
            Interior Design & Furniture <br /> Architecture & Real <br /> Estate
            Hospitality, Travel & Tourism
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
