import React  from "react";

const Footer = () => {


 
  return (
    <div className="bg-black min-h-screen text-sand pl-[8vw] pt-[6vw] mt-[0vw] flex flex-col">
      <div className="flex items-center">
        <div className="flex flex-col">
          <h1 className="max-w-[50vw] leading-[10vw] text-[10vw] capitalize tracking-[-0.2vw]">
            Our Story
          </h1>
          <p className="text-[1.6vw] flex flex-col mt-[2vw] text-sand-6">
            <span>The story behind Exo Ape is one of</span>
            <span>exploration, creativity and curiosity.</span>
          </p>
        </div>
        <video
          className="w-[60vw]"
          src="/video/The story behind Exo Ape is one of exploration, creativity and curiosity..mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="w-[85vw] h-[0.1vw] bg-sand-6 my-[4vw]"></div>
      <div className="flex pb-[3vw]">
        <ul className="flex flex-col gap-[1vw] text-sand-6 text-[0.9vw]">
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
