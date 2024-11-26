import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Gallary = () => {
  const ref = useRef<HTMLDivElement>(null);
  const first = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  const img_1 = useTransform(first.scrollYProgress, [0, 1], ["-2vw", "3vw"]);
  const video_1 = useTransform(first.scrollYProgress, [0, 1], ["2vw", "-7vw"]);

  const second = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });
  const img_2 = useTransform(second.scrollYProgress, [0, 1], ["-2vw", "12vw"]);
  const video_2 = useTransform(
    second.scrollYProgress,
    [0, 1],
    ["0vw", "-3vw"]
  );

  return (
    <div
      className="min-h-[120vh] relative flex items-center justify-center"
      ref={ref}
    >
      <img
        src="/images/awwwards annual nominee.webp"
        alt=""
        className="w-[25vw] mt-[30vh]"
      />
      <div className="flex absolute justify-center gap-[15vw] items-end w-full ml-[-10vw]">
        <motion.video
          src="/video/home-news-diesel-be-a-follower.mp4"
          className="w-[26.3vw] h-[14.7vw] object-contain -mb-[8vw]"
          autoPlay
          muted
          loop
          style={{ x: video_1 }}
        ></motion.video>
        <motion.img
          src="/images/ottografie site of the year.webp"
          alt=""
          className="w-[12.1vw] h-[17vw] object-cover"
          style={{ x: img_1 }}
        />
      </div>
      <div className="absolute flex justify-center mt-[140vh] gap-[20vw] ml-[-10vw]">
        <motion.img
          src="/images/fwaawwward aebele interiors.webp"
          alt=""
          className="w-[26vw] h-[17vw]"
          style={{ x: video_2 }}
        />
        <motion.video
          src="/video/news-rino-pelle.mp4"
          className="w-[26vw] h-[15vw]"
          autoPlay
          style={{ x: img_2 }}
        />
      </div>
    </div>
  );
};

export default Gallary;
