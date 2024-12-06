import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Project from "../components/Project";
import Nav from "../components/Nav";
import Loader from "../components/Loader";

const works = [
  {
    id: 1,
    title: "Amertrasu",
    des: "Frontier health innovation.",
    image: "/images/image-10.webp",
    background: "/images/image-10.webp",
    href: "https://amaterasu.ai/",
  },
  {
    id: 2,
    title: "100 Years Columbia picture",
    des: "celebrating a centuy of cinema.",
    image: "/images/image-9.webp",
    background: "/images/image-11.webp",
    href: "https://columbia100.watson.la/",
  },
  {
    id: 3,
    title: "Cambium",
    des: "Pioneering Sustainable Solution",
    image: "/images/image-12.webp",
    background: "/images/image-12.webp",
    href: "https://cambiumcarbon.com/",
  },
  {
    id: 4,
    title: "Studio d",
    des: "urban and landscape design.",
    image: "/images/image-1.webp",
    background: "/images/image-14.webp",
    href: "https://studiod.nu/",
  },
  {
    id: 5,
    title: "Pluuged Live Shows",
    des: "Yet another description for the page.",
    image: "/images/image-2.webp",
    background: "/images/image-15.webp",
    href: "https://pluggedliveshows.com/",
  },
  {
    id: 6,
    title: "Ali Ali",
    des: "Unique director's profolio.",
    image: "/images/image-3.webp",
    background: "/images/image-16.webp",
    href: "https://alitwotimes.com/",
  },
];

const Works = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleImagesLoad = () => {
      // Select all images in the document
      const images = Array.from(document.images);

      const imageLoadPromises = images.map((image) => {
        // If the image is already loaded, resolve immediately
        if (image.complete) return Promise.resolve();

        // Otherwise, create a promise that resolves when the image loads
        return new Promise<void>((resolve) => {
          image.onload = () => resolve();
          image.onerror = () => resolve(); // resolve even if there's an error
        });
      });

      // Create a promise that resolves after 1 second
      const minimumTimePromise = new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
      });

      // Wait for both all images to load and at least 1 second to pass
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
        <div className="w-full h-[100vh] overflow-x-hidden relative scroll-snap">
          <Nav />
          <AnimatePresence>
            <motion.div
              transition={{ duration: 0.8 }}
              exit={{ scale: 1.2 }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="origin-bottom-left h-screen w-full"
            >
              {works.map((work) => {
                return (
                  <div className="flex flex-col h-screen w-screen">
                    <Project {...work} />
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
          <div className="w-full fixed bottom-0 flex justify-between h-[10vw]"></div>
        </div>
      )}
    </>
  );
};

export default Works;
