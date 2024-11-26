import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "../components/Project";

const works = [
  {
    id: 1,
    title: "Amertrasu",
    des: "page aterj ther ea ehte ",
    image: "/images/image-0.webp",
    background: "/images/image-14.webp",
  },
  {
    id: 2,
    title: "Amertrasu",
    des: "page aterj ther ea ehte ",
    image: "/images/image-1.webp",
    background: "/images/image-14.webp",
  },
  {
    id: 3,
    title: "Amertrasu",
    des: "page aterj ther ea ehte ",
    image: "/images/image-2.webp",
    background: "/images/image-14.webp",
  },
];
const WorksFix = () => {
  const variants = {
    enter: (direction: number) => {
      return {
        y: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 1.5,
        width: "100vw",
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1,
      width: "100vw",
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        y: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 1.5,
        width: "100vw",
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  function wrap(min: number, max: number, value: number): number {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
  }
  const workIndex = wrap(0, works.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const lastScrollTop = useRef(0);

  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      paginate(1); // Wheel scroll down
    } else if (event.deltaY < 0) {
      paginate(-1); // Wheel scroll up
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="example ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className=" h-screen w-screen text-white"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.y, velocity.y);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Project
            key={works[workIndex].id}
            title={works[workIndex].title}
            des={works[workIndex].des}
            image={works[workIndex].image}
            background={works[workIndex].background}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WorksFix;
