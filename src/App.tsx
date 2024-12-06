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
import Loader from "./components/Loader";

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
        <>
          <Nav />

          <AnimatePresence>
            {menuOpend?.menuOpend && !loading && (
              <motion.div
                transition={{ duration: 0.8 }}
                exit={{ scale: 1.1, height: "0vh", marginTop: "100vh" }}
                initial={{ scale: 1.5, height: "0vh", marginTop: "100vh" }}
                animate={{ scale: 1, height: "100vh", marginTop: "0" }}
                className="origin-center w-full"
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
      )}
    </>
  );
}

export default App;
