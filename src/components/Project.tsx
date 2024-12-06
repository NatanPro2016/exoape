import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const Project = ({
  title,
  des,
  image,
  background,
  href,
}: {
  title: string;
  des: string;
  image: string;
  background: string;
  href: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };
  return (
    <a
      ref={ref}
      className="flex flex-col h-[100vh] overflow-hidden w-screen items-center justify-center text-white relative scroll-center"
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={href}
    >
      <AnimatePresence>
        {isHover && (
          <motion.span
            className={` pointer-events-none absolute z-10 text-white h-[5vw] w-[5vw] flex justify-center items-center rounded-full bg-[#00000023] backdrop-blur-xl text-[0.8vw] transition-all ease-linear`}
            style={{ translate: `${position.x - 880}px ${position.y - 400}px` }}
            exit={{ scale: 0, opacity: 0 }}
          >
            view
          </motion.span>
        )}
      </AnimatePresence>
      <motion.img
        style={{ y, scale }}
        src={background}
        className="w-screen  h-screen object-cover absolute top-0 left-0 -z-20 object-left-top origin-center"
      />
      <div className="h-screen w-screen absolute top-0 left-0 bg-[#0d0e132c] -z-10" />
      <div className="flex items-center gap-[8vw] ml-[-20vw]">
        <div className="flex flex-col">
          <h1 className="text-[3.1vw] max-w-[20vw]"> {title}</h1>
          <p className="text-[1.1vw]">{des}</p>
        </div>
        <img
          src={image}
          alt=""
          className="md:w-[22vw] md:h-[27vw] w-[50vw] h-[50vw] object-cover"
        />
      </div>
    </a>
  );
};

export default Project;
