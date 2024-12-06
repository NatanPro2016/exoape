import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import UpAnimtion from "../UpAnimtion";
import useIsMobile from "../../hook/useIsMobile";

const TheApe = () => {
  const isMobile = useIsMobile()
  const ref = useRef(null);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["85vw", "100vw"]);

  const scrollListner = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });
  const y = useTransform(
    scrollListner.scrollYProgress,
    [0, 1],
    ["0vw", "-30vw"]
  );
  return (
    <div className="the-ape">
      <div className="flex w-full md:h-screen justify-center" ref={ref}>
        <motion.img
          style={{ width }}
          src="/images/studio/exo ape-14.webp"
          alt=""
          className="md:h-screen object-cover h-[100vw]"
        />
      </div>
      <div
        className="flex
       flex-col bg-dark-blue text-light-gray -gray "
      >
        <div className="flex md:flex-row flex-col px-[8vw] py-[12vw]">
          <span className="flex gap-1 items-center md:text-[0.996vw] text-[3.5vw] w-[10vw]">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon md:w-[0.9vw] w-[3.5vw]"
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              ></path>
            </svg>
            The apes
          </span>
          <div className="flex flex-col md:ml-[12vw]">
            <h1 className="pt-[5vh] md:text-[10vw] text-[15vw] flex flex-col relative text-light-gray ">
              <div className="h-[19vw] flex overflow-hidden">
                <UpAnimtion content="Design &" />
              </div>
              <div className="h-[19vw] flex overflow-hidden md:mt-[-9vw] mt-[-5vw]">
                <UpAnimtion content="Technology" />
              </div>
              <div className="h-[19vw] flex overflow-hidden md:mt-[-9vw] mt-[-5vw]">
                <UpAnimtion content="Enthusiasts" />
              </div>
            </h1>
            <p className="md:w-[25vw] md:text-[1.6vw] text-[4.6vw] md:mt-0 mt-[4vw]">
              We are a team* of like-minded design enthusiasts and tech
              aficionados that explore the digital frontier with grit and
              dedication. Intrigued by beauty, fascinated by technology and
              fuelled with an everlasting devotion to digital craftsmanship and
              meaningful aesthetics.
            </p>
          </div>
        </div>
        <div
          className="flex md:items-center md:justify-normal items-start md:flex-row flex-col pl-[16vw] -mt-[10vw]  p-[8vw]  pb-[21vw]"
          ref={container}
        >
          <motion.img
            src="/images/studio/exo ape-15.webp"
            alt=""
            className="md:w-[30vw]"
            style={{ marginBottom: y }}
          />
          <div className="flex flex-col md:ml-[12vw] md:w-[22.1vw] ml-[-12vw] w-[49vw]">
            <img
              src="/images/studio/exo ape-16.webp"
              alt=""
              className="md:w-[22.1vw] w-[40vw]"
            />

            <div className="flex-flex-col md:text-[0.8vw] text-[3.2vw] border-t-light-gray-08 border-t-[0.1vw] pt-[2vw] mt-[3vw]">
              *We believe in a fluid team approach that allows us to bring
              together the best designers, developers and agencies in the world
              in order to serve the needs of today’s clients.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheApe;
