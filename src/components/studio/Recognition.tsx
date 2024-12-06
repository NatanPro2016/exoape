import React, { useRef } from "react";
import UpAnimtion from "../UpAnimtion";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../Footer";

const Recognition = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vw"]);
  return (
    <div className="flex flex-col relative ">
      <div
        className="flex md:flex-row flex-col px-[4vw] md:items-center md:gap-[15vw]  py-[13vw] z-20 relative bg-white recognition"
        ref={ref}
      >
        <span className="flex gap-1 items-center md:text-[0.996vw] text-[3.6vw] mb-[5vw]">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon md:w-[0.9vw] w-[3.6vw]"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          Recognition
        </span>
        <div className="flex flex-col p-[2vw] md:p-0">
          <h1 className="md:text-[10vw] text-[16vw] font-Lausanne flex flex-col relative text-black ">
            <div className="h-[19vw] flex overflow-hidden">
              <UpAnimtion content="Awards &" />
            </div>
            <div className="h-[19vw]flex overflow-hidden md:mt-[-9vw] mt-[-5vw]">
              <UpAnimtion content="Publications" />
            </div>
          </h1>
          <div className="flex md:flex-row flex-col gap-[15vw] md:items-center md:mt-0 mt-[5vw]">
            <ul className="flex flex-col gap-[1.3vw] md:text-[1.1vw] text-[3.7vw] text-dark-grey-06">
              <li>
                Exo Ape <br /> Webby Nominee '23 <br />
                <a href="https://winners.webbyawards.com/2023/websites-and-mobile-sites/general-websites-and-mobile-sites/professional-services-self-promotion/237132/exo-ape">
                  The Webby Awards
                </a>
              </li>
              <li>
                Ali Ali <br /> Site of the Month <br />
                <a href="https://www.awwwards.com/ali-ali-by-exo-ape-wins-site-of-the-month-august-2020.html">
                  Awwwards
                </a>
              </li>
              <li>
                Ottografie <br /> Photography Site of the Year <br />
                <a href="https://www.cssdesignawards.com/">CSSDA</a>
              </li>
            </ul>
            <ul className="flex flex-col md:text-[1.5vw] text-[4.8vw] gap-[0.6vw]">
              <li className="flex justify-between md:w-[12vw] w-full">
                <p> Awwwards</p> <p> x28</p>
              </li>
              <li className="flex justify-between md:w-[12vw]">
                <p> The FWA </p>
                <p>x10</p>
              </li>
              <li className="flex justify-between md:w-[12vw]">
                <p>CSSDA </p>
                <p>x8</p>
              </li>
              <li className="flex justify-between md:w-[12vw]">
                <p>Commarts</p>
                <p>x04</p>
              </li>
              <li className="flex justify-between md:w-[12vw]">
                <p>Lovie Awards </p>
                <p>x1</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <motion.div className="md:h-[200vh] h-[100vh] md:mt-[-100vh] mt-[-50vh] z-10 relative md:block flex items-end">
        <motion.div className="sticky top-0 bottom-0 left-0" style={{ y }}>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Recognition;
