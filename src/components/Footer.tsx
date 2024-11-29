import React from "react";

const Footer = () => {
  return (
    <div className="bg-black md:min-h-screen text-sand pl-[8vw] pt-[6vw] mt-[0vw] flex flex-col">
      <div className="flex items-center">
        <div className="flex flex-col">
          <h1 className="max-w-[50vw] md:leading-[10vw] leading-[14vw] md:text-[10vw] text-[16vw] capitalize tracking-[-0.2vw]">
            Our Story
          </h1>
          <p className="md:text-[1.6vw] text-[4.8vw] flex-col mt-[2vw] text-sand-6 hidden md:flex">
            <span>The story behind Exo Ape is one of</span>
            <span>exploration, creativity and curiosity.</span>
          </p>
        </div>
        <video
          className="md:w-[60vw] w-[50vw]"
          src="/video/The story behind Exo Ape is one of exploration, creativity and curiosity..mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <p className="md:hidden text-[4.8vw] flex flex-col mt-[2vw] text-sand-6">
        <span>The story behind Exo Ape is one of</span>
        <span>exploration, creativity and curiosity.</span>
      </p>

      <div className="w-[85vw] h-[0.1vw] bg-sand-6 my-[4vw]"></div>
      <div className="flex pb-[3vw]">
        <ul className="flex flex-col gap-[1vw] text-sand-6 md:text-[0.9vw] text-[3.7vw]">
          <li>
            <a href="#">Willem II Singel 8</a>
          </li>
          <li>
            <a href="#">6041 HS, Roermond</a>
          </li>
          <li>
            <a href="#">The Netherlands</a>
          </li>
          <li>
            <a href="#">hello@exoape.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
