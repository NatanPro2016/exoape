import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className="min-h-screen w-full bg-black text-white flex justify-center items-center">
        hellow
      </div>
      <div className="bg-red-600 min-h-screen w-full flex justify-center items-center">
        red
      </div>
      <div className="bg-blue-600 min-h-screen w-full flex justify-center items-center text-white">
        blue
      </div>
    </>
  );
}

export default App;
