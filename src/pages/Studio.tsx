import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/studio/Hero";
import Lenis from "lenis";
import Partners from "../components/studio/Partners";
import How from "../components/studio/How";

const Studio = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-white">
      <Nav />
      <Hero />
      <Partners />
      <How />
    </div>
  );
};

export default Studio;
