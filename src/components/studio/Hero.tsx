import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";
import UpAnimtion from "../UpAnimtion";
import useIsMobile from "../../hook/useIsMobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scrollAnimation = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });
  const y = useTransform(
    scrollAnimation.scrollYProgress,
    [0, 1],
    ["00vw", "-30vw"]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const marginTopScroll = useScroll({
    target: ref,
    offset: ["center center", "end end"],
  });

  const marginTop = useTransform(
    marginTopScroll.scrollYProgress,
    [0, 1],
    ["0vh", "-20vh"]
  );
  const opacity = useTransform(marginTopScroll.scrollYProgress, [0, 1], [1, 0]);
  const reverse_opacity = useTransform(
    marginTopScroll.scrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="max-w-screen studio_hero"
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

      {isMobile ? (
        <div className="relative w-screen h-[200vh]">
          <div className="sticky w-screen h-screen top-0">
            <div className="w-screen h-screen overflow-hidden absolute top-0 left-0 ">
              <motion.img
                src="/images/studio/exo ape-10.webp"
                alt=""
                className="w-screen h-screen object-cover object-center"
                style={{ scale }}
              />
            </div>

            <motion.div
              className="absolute top-0 left-0 h-full w-full bg-[#00000059] z-10"
              style={{ opacity: reverse_opacity }}
            ></motion.div>

            <motion.div className="px-[7vw] pr-[14vw] pt-[6vw] h-[90vw] absolute top-0 mt-[21vw] z-40">
              <h1 className="pt-[5vh] text-[15vw] font-Lausanne text-white flex flex-col relative">
                <div className="h-[28vw] flex overflow-hidden">
                  <motion.div style={{ marginTop, opacity }}>
                    <UpAnimtion content="Buliding" />
                  </motion.div>
                </div>
                <div className="h-[28vw] flex overflow-hidden mt-[-9vw]">
                  <motion.div style={{ marginTop, opacity }}>
                    <UpAnimtion content="Digital" />
                  </motion.div>
                </div>
                <div className="h-[28vw] flex overflow-hidden mt-[-9vw]">
                  <motion.div style={{ marginTop, opacity }}>
                    <UpAnimtion content="Presence" />
                  </motion.div>
                </div>
              </h1>
              <div className="flex flex-col text-white font-Lausanne text-[4.6vw] relative ">
                <motion.span>
                  Digital experience with maximum emotional impact
                </motion.span>
              </div>
              <div className="w-full flex flex-col mt-[20vw] text-white">
                <p className="text-[4.8vw] w-full">
                  We explore and push the boundaries of digital for brands and
                  businesses that strive to enhance people's lives through
                  exceptional experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <motion.img
            src="/images/studio/exo ape-10.webp"
            alt=""
            className="absolute top-0 left-0  w-screen"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black z-10"></div>
        </div>
      )}
      {!isMobile && (
        <motion.div className="px-[7vw] pr-[14vw] pt-[6vw]" style={{ y }}>
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
              businesses that strive to enhance people's lives through
              exceptional experiences.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
