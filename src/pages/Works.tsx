import React, { useRef, useEffect, useState } from "react";

import { motion, useTransform, useScroll } from "framer-motion";
import Project from "../components/Project";
import Nav from "../components/Nav";

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

const Works = () => {
  return (
    <div className="w-full h-[100vh] overflow-x-auto relative scroll-snap">
      <Nav />

      {works.map((work) => {
        return (
          <div className="flex flex-col h-screen w-screen">
            <Project
              key={work.id}
              title={work.title}
              des={work.title}
              image={work.image}
              background={work.background}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Works;
