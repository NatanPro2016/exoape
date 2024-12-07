import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import UpAnimtion from "./UpAnimtion";
import useIsMobile from "../hook/useIsMobile";

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  const isMobile = useIsMobile();

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale_scroll = useScroll({
    target: ref,
    offset: ["start start", "center center"],
  });
  const opacity_scroll = useScroll({
    target: ref,
    offset: ["center start", "center center"],
  });
  const top_scroll = useScroll({
    target: ref,
    offset: ["center center", "end end"],
  });

  const scroll = useTransform(
    scale_scroll.scrollYProgress,
    [0, 1],
    ["50vh", "0vh"]
  );

  const top = useTransform(
    top_scroll.scrollYProgress,
    [0, 1],
    ["0vw", "-50vw"]
  );

  const y = useTransform(scrollYProgress, [0, 1], ["30vh", "-100vh"]);
  const scale = useTransform(scale_scroll.scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(top_scroll.scrollYProgress, [0, 1], [1, 0]);
  const opacity_bg = useTransform(top_scroll.scrollYProgress, [0, 1], [0, 0.4]);
  const opacity_first_P = useTransform(
    opacity_scroll.scrollYProgress,
    [0, 1],
    [0, 1]
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <div
      ref={ref}
      className="relative md:h-[130vw] hero"
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
            Scroll
          </motion.span>
        )}
      </AnimatePresence>
      {isMobile ? (
        <div className=" h-[200vh] w-screen">
          <div className="sticky top-0 w-screen h-screen overflow-hidden">
            <motion.img
              src="/images/Venice Grand Canal.webp"
              alt=""
              className="h-screen w-screen object-cover object-center"
              style={{ scale }}
            />
            <motion.div
              className="absolute top-0 left-0 h-full w-full bg-black z-10"
              style={{ opacity: opacity_bg }}
            ></motion.div>
            <motion.div
              className="px-[7vw] py-[24vw] absolute top-0"
              style={{ marginTop: scroll }}
            >
              <motion.div
                className="text-white font-Lausanne  md:text-[1.6666vw] text-[4.8vw] relative"
                style={{ opacity: opacity_first_P }}
              >
                Global digital design studio partnering with brands and
                businesses that create exceptional experiences where people
                live, work, and unwind.
              </motion.div>
              <h1 className="pt-[5vh] text-[15vw] font-Lausanne text-white flex flex-col relative">
                <div className="h-[23vw] flex overflow-hidden">
                  <motion.div style={{ marginTop: top, opacity }}>
                    <UpAnimtion content="Digital" />
                  </motion.div>
                </div>
                <div className="h-[24vw] flex overflow-hidden mt-[-9vw]">
                  <motion.div style={{ marginTop: top, opacity }}>
                    <UpAnimtion content="Design" />
                  </motion.div>
                </div>
                <div className="h-[23vw] flex overflow-hidden mt-[-9vw]">
                  <motion.div style={{ marginTop: top, opacity }}>
                    <UpAnimtion content="Experience" />
                  </motion.div>
                </div>
              </h1>
              <div className="flex flex-col text-white font-Lausanne text-[4.8vw] relative">
                We help experience-driven companies thrive by making their
                audience feel the refined intricacies of their brand and product
                in the digital space. Unforgettable journeys start with a click.
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="absolute">
          <motion.img
            src="/images/Venice Grand Canal.webp"
            alt=""
            className=" w-screen object-cover object-center"
          />
        </div>
      )}
      {!isMobile && (
        <motion.div className="px-[7vw] relative" style={{ y }}>
          <div className="text-white font-Lausanne  text-[1.6666vw] relative">
            <motion.div>
              Global digital design studio partnering with
            </motion.div>
            <motion.div>
              brands and businesses that create exceptional
            </motion.div>
            <motion.div>
              experiences where people live, work, and unwind.
            </motion.div>
          </div>
          <h1 className="pt-[5vh] text-[15vw] font-Lausanne text-white flex flex-col relative">
            <div className="h-[23vw] flex overflow-hidden">
              <UpAnimtion content="Digital" />
            </div>
            <div className="h-[23vw] flex overflow-hidden mt-[-9vw]">
              <UpAnimtion content="Design" />
            </div>
            <div className="h-[23vw] flex overflow-hidden mt-[-9vw]">
              <UpAnimtion content="Experience" />
            </div>
          </h1>
          <div className="flex flex-col text-white font-Lausanne text-[1.6666vw] relative">
            <motion.span>
              We help experience-driven companies thrive
            </motion.span>
            <motion.span>by making their audience feel the refined</motion.span>
            <motion.span>
              intricacies of their brand and product in the
            </motion.span>
            <motion.span>
              digital space. Unforgettable journeys start with
            </motion.span>
            <motion.span>a click.</motion.span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
