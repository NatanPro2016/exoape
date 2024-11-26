import React, { useRef, useState, useEffect } from "react";
import Nav from "../components/Nav";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/Footer";
import Lenis from "lenis";

const Contact = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vw"]);

  return (
    
    <div className="bg-white h-screen text-[0.97vw]" ref={ref}>
      <Nav color="black" />
      <motion.div className="flex h-full max-h-screen items-end px-[10vw] pb-[2.8vw] relative z-20 bg-white">
        <div className="flex w-screen overflow-hidden absolute top-[7vw] left-0 z-0">
          <motion.div className="text-[10vw] flex flex-nowrap animate gap-[2vw] whitespace-nowrap">
            <p className="w-fit inline-block ">
              Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·
            </p>
            <p className="w-fit inline-block">
              Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col w-[22vw] relative z-30">
          <p className="pb-[5vw]">
            Ready for lift-off Pin, tween message or poke -- and we get back as
            soon as possible
          </p>
          <ul className="text-[1.1vw]">
            <li>
              <a href="#" className="flex">
                hello@exoape.com
              </a>
            </li>
            <li>
              <a href="#" className="flex">
                +41772086200
              </a>
            </li>
          </ul>
        </div>
        <img
          src="/images/contact.webp"
          alt=""
          className="w-[26vw] h-[39vw] ml-[12vw] relative z-10"
        />
        <div className="flex flex-col ml-[10vw]">
          <a href="#" className="w-[9vw] mb-[2vw]">
            Willem ll Singel 8 6041 , Roernond The netherlands
          </a>
          <a href="#"> View on Maps</a>
        </div>
      </motion.div>
      <motion.div className="h-[230vh] mt-[-100vh] z-10 relative">
        <motion.div className="sticky top-0 bottom-0 left-0" style={{ y }}>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Contact;
