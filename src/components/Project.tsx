import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = ({
  title,
  des,
  image,
  background,
}: {
  title: string;
  des: string;
  image: string;
  background: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <div
      ref={ref}
      className="flex flex-col h-[100vh] overflow-hidden w-screen items-center justify-center text-white relative scroll-center"
    >
      <motion.img
        style={{ y, scale }}
        src={background}
        className="w-screen object-cover absolute top-0 left-0 -z-20 object-left-top origin-center"
      />
      <div className="h-screen w-screen absolute top-0 left-0 bg-[#0d0e132c] -z-10" />
      <div className="flex items-center gap-[8vw] ml-[-20vw]">
        <div className="flex flex-col">
          <h1 className="text-[3.1vw]"> {title}</h1>
          <p className="text-[1.1vw]">{des}</p>
        </div>
        <img src={image} alt="" className="w-[22vw] h-[27vw]" />
      </div>
    </div>
  );
};

export default Project;
