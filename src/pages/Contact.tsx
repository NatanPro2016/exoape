import React, { useRef, useState, useEffect, useContext } from "react";
import Nav from "../components/Nav";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Footer from "../components/Footer";
import Lenis from "lenis";
import { PageTranstionContext } from "../context/PageTranstion";
import useIsMobile from "../hook/useIsMobile";
import Loader from "../components/Loader";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  const isMobile = useIsMobile();

  useEffect(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vw"]);
  const menuOpend = useContext(PageTranstionContext);

  return (
    <div className="relative">
      <Loader show={loading} />

      {!loading && (
        <div
          className="bg-white h-screen md:text-[0.97vw] text-[3.7vw] contact"
          ref={ref}
        >
          <Nav color="black" />

          <motion.div
            transition={{ duration: 0.8 }}
            exit={{ scale: 1.2 }}
            initial={{ scale: 1.2, marginTop: "10vw" }}
            animate={{ scale: 1, marginTop: "0vw" }}
            className="origin-left"
          >
            <div
              className="flex flex-col md:flex-row min-h-screen md:items-end px-[10vw] pb-[2.8vw] relative z-20 bg-white md:pt-0 pt-[14vw] "
              ref={ref}
            >
              <div className="flex w-screen overflow-hidden absolute top-[7vw] left-0 z-0">
                <div className="md:text-[10vw] text-[26vw] flex flex-nowrap animate gap-[2vw] whitespace-nowrap md:mt-[2vw] mt-[24vw]">
                  <p className="w-fit inline-block ">
                    Get in touch · 保持联系 · Ponerse en contacto · Neem contact
                    op ·
                  </p>
                  <p className="w-fit inline-block">
                    Get in touch · 保持联系 · Ponerse en contacto · Neem contact
                    op ·
                  </p>
                </div>
              </div>
              {!isMobile && (
                <div className="flex flex-col w-full relative z-30">
                  <p className="pb-[5vw]">
                    Ready for lift-off Pin, tween message or poke -- and we get
                    back as soon as possible
                  </p>
                  <ul className="md:text-[1.1vw] text-[3.6vw]">
                    <li>
                      <a href="#" className="flex line w-fit mb-[2vw]">
                        hello@exoape.com
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex line w-fit">
                        +41772086200
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              <img
                src="/images/contact.webp"
                alt=""
                className="md:w-[26vw] md:h-[39vw] md:ml-[12vw] w-[80vw] relative z-10"
              />

              {isMobile && (
                <div className="flex flex-col w-full relative z-30 mt-[8vw]">
                  <p className="pb-[5vw] text-[6.4vw] w-[90%]">
                    Ready for lift-off Pin, tween message or poke -- and we get
                    back as soon as possible
                  </p>
                  <ul className="text-[3.6vw]">
                    <li>
                      <a
                        href="#"
                        className="flex line w-fit  mb-[4.6vw] h-[7vw]"
                      >
                        hello@exoape.com
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex line w-fit h-[7vw]">
                        +41772086200
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <div className="flex flex-col justify-start md:ml-[10vw] md:mb-0 mb-[21vw] ">
                <a
                  href="#"
                  className="md:w-[9vw] w-[34vw] md:mb-[2vw] mt-[10vw] mb-[5.6vw]"
                >
                  Willem ll Singel 8 6041 , Roernond The netherlands
                </a>
                <a
                  href="#"
                  className="text-[4.2]vw line w-fit md:h-fit h-[7vw] "
                >
                  View on Maps
                </a>
              </div>
            </div>
            <motion.div className="md:h-[200vh] h-[100vh] md:mt-[-100vh] mt-[-80vw] z-10 relative md:block flex items-end">
              <motion.div className="sticky top-0 bottom-0 left-0">
                <Footer />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default Contact;
