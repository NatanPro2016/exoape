import { useScroll, useTransform , motion} from "framer-motion";
import React, { useRef } from "react";

const How = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const height= useTransform(scrollYProgress, [0, 1], ["20vw", "-30vw"]);


  
  return (
    <motion.div className="bg-dark-blue fle flex-col mt-[15vw] px-[8vw] py-[12vw] text-light-gray z-10">
      <span className="flex gap-[0.8vw] items-center text-[0.996vw] ">
        <svg
          data-v-669b4a84=""
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon w-[0.9vw]"
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="#fff"
          ></path>
        </svg>
        How we work
      </span>
      <h1 className="text-[2.2vw] leading-[3vw] mt-[7vw] w-[48vw]">
        We believe that all good things are achieved by those who are willing to
        put in passion, courage and craftsmanship.
      </h1>
      <div className="flex">
        <div className="flex items-center">
          01
          <div className="flex flex-col">
            <h1>Elevating sophistication across all senses</h1>
            <p>
              We ensure that the high standards and sophistication of your
              product are experienced by all senses while blurring the lines
              between the physical and the digital world. We go deep into
              details to provide a holistic experience that leaves a lasting
              impression on your customers and fits seamlessly into your
              existing ecosystem.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default How;
