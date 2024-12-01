import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import UpAnimtion from "./UpAnimtion";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 750);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["30vh", "-100vh"]);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 750);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={ref}
      className="relative md:h-[130vw] md:overflow-hidden"
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
      {isMobile ? (
        <div className="realtive h-[200vh]">
          <motion.img
            src="/images/Venice Grand Canal.webp"
            alt=""
            className="h-screen w-screen  object-center sticky top-0"
          />
        </div>
      ) : (
        <div className="absolute">
          <motion.img
            src="/images/Venice Grand Canal.webp"
            alt=""
            className=" w-screen"
          />
        </div>
      )}
      <motion.div className="px-[7vw] relative" style={{ y }}>
        <div className="text-white font-Lausanne  text-[1.6666vw] relative">
          <motion.div>Global digital design studio partnering with</motion.div>
          <motion.div>brands and businesses that create exceptional</motion.div>
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
          <motion.span>We help experience-driven companies thrive</motion.span>
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
    </div>
  );
};

export default Hero;
