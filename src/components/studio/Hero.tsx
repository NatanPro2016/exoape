import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";
import UpAnimtion from "../UpAnimtion";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["100vh", "-100vh"]);
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <AnimatePresence>
        {isHover && (
          <motion.span
            className={` pointer-events-none absolute z-10 text-white h-[5vw] w-[5vw] flex justify-center items-center rounded-full bg-[#00000023] backdrop-blur-xl text-[0.8vw] transition-all ease-linear`}
            style={{ translate: `${position.x}px ${position.y}px` }}
            exit={{ scale: 0, opacity: 0 }}
          >
            Scrool
          </motion.span>
        )}
      </AnimatePresence>

      <div className="relative w-full h-full">
        <motion.img
          src="/images/studio/exo ape-10.webp"
          alt=""
          className="absolute top-0 left-0  w-screen"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black z-10"></div>
      </div>

      <motion.div
        className="px-[7vw] pr-[14vw] pt-[6vw] h-[90vw] relative"
        style={{ y }}
      >
        <h1 className="pt-[5vh] text-[10vw] font-Lausanne text-white flex flex-col relative">
          <div className="h-[23vw] flex overflow-hidden">
            <UpAnimtion content="Buliding" />
          </div>
          <div className="h-[23vw] flex overflow-hidden mt-[-14vw]">
            <UpAnimtion content="Digital" />
          </div>
          <div className="h-[23vw] flex overflow-hidden mt-[-14vw]">
            <UpAnimtion content="Presence" />
          </div>
        </h1>
        <div className="flex flex-col text-white font-Lausanne text-[1.1vw] relative mt-[-10vw]">
          <motion.span>
            Digital experience with maximum emotional impact
          </motion.span>
        </div>
        <div className="w-full items-end flex flex-col mt-[20vw] text-white">
          <p className="text-[1.6vw] w-[35vw]">
            We explore and push the boundaries of digital for brands and
            businesses that strive to enhance people's lives through exceptional
            experiences.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
