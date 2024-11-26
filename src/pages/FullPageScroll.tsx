import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const works = [
  {
    id: 1,
    title: "Amertrasu",
    des: "Page description goes here.",
    image: "/images/image-0.webp",
    background: "/images/image-13.webp",
  },
  {
    id: 2,
    title: "Amertrasu",
    des: "Another page description here.",
    image: "/images/image-1.webp",
    background: "/images/image-14.webp",
  },
  {
    id: 3,
    title: "Amertrasu",
    des: "Yet another description for the page.",
    image: "/images/image-2.webp",
    background: "/images/image-15.webp",
  },
  {
    id: 4,
    title: "Amertrasu",
    des: "Yet another description for the page.",
    image: "/images/image-3.webp",
    background: "/images/image-16.webp",
  },
  {
    id: 5,
    title: "Amertrasu",
    des: "Yet another description for the page.",
    image: "/images/image-4.webp",
    background: "/images/image-17.webp",
  },
  {
    id: 6,
    title: "Amertrasu",
    des: "Yet another description for the page.",
    image: "/images/image-5.webp",
    background: "/images/image-18.webp",
  },
  {
    id: 7,
    title: "Amertrasu",
    des: "Yet another description for the page.",
    image: "/images/image-6.webp",
    background: "/images/image-19.webp",
  },
];

const FullPageScroll: React.FC = () => {
  const { scrollYProgress } = useScroll(); // useScroll hook for scroll tracking

  // Example transform effects based on scrollYProgress
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]); // Scale down as you scroll
  const opacity = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]); // Fade out

  return (
    <div className="h-[300vh] bg-black text-white flex flex-col items-center justify-center">
      {works.map((work) => (
        <motion.div
          key={work.id}
          style={{
            scale,
            opacity,
          }}
          className="sticky top-[50%] translate-y-[-50%] w-[60vw] h-[40vw] bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 rounded-2xl flex flex-col items-center justify-center overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${work.background})`,
            }}
          />
          <div className="relative z-10 p-6 flex flex-col items-center justify-center">
            <h2 className="text-center text-xl text-white mb-4">
              {work.title}
            </h2>
            <p className="text-center text-lg text-white mb-4">{work.des}</p>
            <img
              src={work.image}
              alt={work.title}
              className="w-[80%] h-[auto] rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      ))}

      <div className="h-[100vh] flex items-center justify-center">
        <p className="text-white text-center mt-12">
          Scroll down to see more work.
        </p>
      </div>
    </div>
  );
};

export default FullPageScroll;
