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
    offset: ["start end", "end center"],
  });
  const img_2 = useTransform(second.scrollYProgress, [0, 1], ["-2vw", "12vw"]);
  const video_2 = useTransform(
    second.scrollYProgress,
    [0, 1],
    ["0vw", "-3vw"]
  );

  return (
    <div
      className="md:min-h-[120vh] relative flex items-center justify-center bg-white gallary"
      ref={ref}
    >
      <img
        src="/images/awwwards annual nominee.webp"
        alt=""
        className="md:w-[25vw] w-[35vw] mt-[30vh]"
      />
      <div className="flex absolute justify-center gap-[15vw] items-end w-full ml-[-10vw]">
        <motion.video
          src="/video/home-news-diesel-be-a-follower.mp4"
          className="md:w-[26.3vw] md:h-[14.7vw] w-[36] h-[19.7vw] object-contain -mb-[8vw]"
          autoPlay
          muted
          loop
          style={{ x: video_1 }}
        ></motion.video>
        <motion.img
          src="/images/ottografie site of the year.webp"
          alt=""
          className="md:w-[12.1vw] md:h-[17vw] w-[22.1vw] object-cover"
          style={{ x: img_1 }}
        />
      </div>
      <div className="absolute flex justify-center md:mt-[140vh] mt-[45vh] gap-[20vw] ml-[-10vw]">
        <motion.img
          src="/images/fwaawwward aebele interiors.webp"
          alt=""
          className="md:w-[26vw] md:h-[19vw] w-[36vw] h-[20vw] object-cover"
          style={{ x: video_2 }}
        />
        <motion.video
          src="/video/news-rino-pelle.mp4"
          className="w-[36vw] h-[20vw] md:w-[26vw] md:h-[15vw] object-cover"
          autoPlay
          style={{ x: img_2 }}
        />
      </div>
    </div>
  );
};

export default Gallary;
