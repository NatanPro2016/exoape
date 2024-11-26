import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface pro {
  image: string;
  video: string;
  title: string;
  description: string;
}
const ImageVideo = ({ image, video, title, description }: pro) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const handlehover = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const video_ref = useRef<HTMLVideoElement>(null);
  return (
    <div
      className="flex flex-col relative w-full cursor-pointer"
      onMouseMove={(e) => handlehover(e)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <AnimatePresence>
        {isHover && (
          <motion.span
            key="modal"
            className={` pointer-events-none absolute z-10 text-white h-[5vw] w-[5vw] flex justify-center items-center rounded-full bg-[#00000023] backdrop-blur-xl text-[0.8vw] transition-all ease-linear`}
            style={{ translate: `${position.x}px ${position.y}px` }}
            exit={{ scale: 0, opacity: 0 }}
          >
            view
          </motion.span>
        )}
      </AnimatePresence>
      <img
        src={image}
        alt=""
        className="w-full flex items-center justify-center hover:opacity-0"
        onMouseEnter={() => video_ref?.current?.play()}
        onMouseLeave={() => video_ref?.current?.pause()}
      />
      <video
        ref={video_ref}
        src={video}
        className="absolute w-full -z-10"
        loop
        muted
      ></video>

      <p
        className={`text-[0.9vw] mt-[0.5vw] tracking-[0.007vw] ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      >
        <strong>{title} - &nbsp; </strong> {description}
      </p>
    </div>
  );
};

export default ImageVideo;
