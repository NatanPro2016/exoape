import Lenis from "lenis";
import { useContext, useEffect, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Work from "./components/Work";
import WorkMotion from "./components/WorkMotion";
import Gallary from "./components/Gallary";
import Spread from "./components/Spread";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { PageTranstionContext } from "./context/PageTranstion";

function App() {
  const menuOpend = useContext(PageTranstionContext);

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
    <>
      <Nav />

      <AnimatePresence>
        {menuOpend?.menuOpend && (
          <motion.div
            transition={{ duration: 0.8 }}
            exit={{ scale: 1.2 }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="origin-bottom-left h-screen w-full"
          >
            <Hero />
            <Work />
            <WorkMotion />
            <Gallary />
            <Spread />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
