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
import Loader from "../components/Loader";

const Studio = () => {
  const menuOpend = useContext(PageTranstionContext);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleImagesLoad = () => {
      const images = Array.from(document.images);

      const imageLoadPromises = images.map((image) => {
        if (image.complete) return Promise.resolve();
        return new Promise<void>((resolve) => {
          image.onload = () => resolve();
        });
      });

      const minimumTimePromise = new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
      });

      Promise.all([Promise.all(imageLoadPromises), minimumTimePromise]).then(
        () => {
          setLoading(false);
        }
      );
    };

    handleImagesLoad();
  }, []);
  return (
    <>
      <Loader show={loading} />
      {!loading && (
        <>
          <Nav />
          <AnimatePresence>
            {menuOpend?.menuOpend && (
              <motion.div
                className="bg-white h-screen w-full origin-bottom-left studio relative"
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
      )}
    </>
  );
};

export default Studio;
