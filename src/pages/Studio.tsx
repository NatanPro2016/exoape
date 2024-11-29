import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import Hero from "../components/studio/Hero";
import Lenis from "lenis";
import Partners from "../components/studio/Partners";
import How from "../components/studio/How";
import WhatWeBelieve from "../components/studio/WhatWeBelieve";
import TheApe from "../components/studio/TheApe";
import Recognition from "../components/studio/Recognition";
import { PageTranstionContext } from "../context/PageTranstion";

const Studio = () => {
  const menuOpend = useContext(PageTranstionContext);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 750);

  useEffect(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 750);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Nav />
      <AnimatePresence>
        {menuOpend?.menuOpend && (
          <motion.div
            className="bg-white h-screen w-full origin-bottom-left"
            transition={{ duration: 0.8 }}
            exit={{ scale: 1.2 }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
          >
            <Hero />
            <Partners />
            <How />
            <WhatWeBelieve />
            <TheApe />
            <Recognition />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Studio;
