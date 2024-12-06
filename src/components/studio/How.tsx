import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import useIsMobile from "../../hook/useIsMobile";

const How = () => {
  const isMobile = useIsMobile();
  return (
    <motion.div className="bg-dark-blue flex-col px-[8vw] py-[12vw] text-light-gray z-10 how">
      <span className="flex gap-[0.8vw] items-center md:text-[0.996vw] text-[3.7vw]">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon md:w-[0.9vw] w-[3.7vw]"
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="#fff"
          ></path>
        </svg> 
        How we work
      </span>
      <h1 className="md:text-[2.2vw] text-[6.4vw] md:leading-[3vw] leading-[7vw] mt-[7vw] md:w-[42vw]">
        We believe that all good things are achieved by those who are willing to
        put in passion, courage and craftsmanship.
      </h1>
      <div className="flex md:flex-row flex-col mt-[2.5vw] md:ml-[12vw] gap-[2vw] ">
        <div className="flex md:items-center md:text-[1.1vw] text-[3.7vw] text-light-gray-08 md:w-[33vw] pr-[10vw] md:gap-[2vw] gap-[10vw] mt-[18vw] md:mt-0">
          01
          <div className="flex flex-col">
            <h1 className="md:text-[3.7vw] text-[7.3vw] text-light-gray md:leading-[4vw] leading-[8vw] tracking-[-0.1vw]">
              Elevating sophistication across all senses
            </h1>
            <div className="md:mt-[2vw] mt-[4vw] flex flex-col">
              {!isMobile ? (
                <>
                  <p>We ensure that the high standards and </p>
                  <p>sophistication of your product are </p>
                  <p> experienced by all senses while </p>
                  <p> blurring the lines between the physical </p>
                  <p>and the digital world. We go deep into</p>
                  <p>details to provide a holistic experience</p>
                  <p>that leaves a lasting impression on</p>
                  <p>your customers and fits seamlessly</p>
                  <p>into your existing ecosystem.</p>
                </>
              ) : (
                <p>
                  We ensure that the high standards and sophistication of your
                  product are experienced by all senses while blurring the lines
                  between the physical and the digital world. We go deep into
                  details to provide a holistic experience that leaves a lasting
                  impression on your customers and fits seamlessly into your
                  existing ecosystem.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex md:items-center md:text-[1.1vw] text-[3.7vw] text-light-gray-08 md:w-[33vw] pr-[10vw] md:gap-[2vw] gap-[10vw] mt-[18vw] ">
          02
          <div className="flex flex-col">
            <h1 className="md:text-[3.7vw] text-[7.3vw] text-light-gray md:leading-[4vw] leading-[8vw] tracking-[-0.1vw]">
              To be human is our greatest quality
            </h1>
            <div className="md:mt-[2vw] mt-[4vw] flex flex-col">
              {!isMobile ? (
                <>
                  <p>We believe that intuition is the most</p>
                  <p>advanced technology we have, and</p>
                  <p> curiosity is our most powerful tool. Our</p>
                  <p>team is guided by the principles of </p>
                  <p>compassion and honesty in our day-</p>
                  <p>to-day communications, and we</p>
                  <p>understand that people value feeling</p>
                  <p>more than information. That's why we</p>
                  <p>pour a lot of soul and passion into our.</p>
                  <p>work, delivering experiences that</p>
                  <p>touch people on a deeper level.</p>
                </>
              ) : (
                <p>
                  {" "}
                  We believe that intuition is the most advanced technology we
                  have, and curiosity is our most powerful tool. Our team is
                  guided by the principles of compassion and honesty in our
                  day-to-day communications, and we understand that people value
                  feeling more than information. That's why we pour a lot of
                  soul and passion into our work, delivering experiences that
                  touch people on a deeper level.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen overflow-hidden left-0 z-0 text-light-gray-03 ml-[-8vw] mt-[4vw]">
        <div className="md:text-[17vw] text-[26vw] flex flex-nowrap animate gap-[2vw] whitespace-nowrap">
          <div className=" w-fit flex gap-[2vw] items-center">
            Forever Upwards
            <svg
              data-v-774e5e2b=""
              viewBox="0 0 169 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[4vw]"
            >
              <path
                data-v-774e5e2b=""
                d="M132 78C117.5 78 101.667 68.9167 84.5 50.75C84 51.25 82 53.0833 78.5 56.25C75.1667 59.25 73 61.1667 72 62C71.1667 62.6667 69.25 64.1667 66.25 66.5C63.4167 68.8333 61.0833 70.4167 59.25 71.25C57.5833 72.0833 55.4167 73.1667 52.75 74.5C50.0833 75.8333 47.4167 76.75 44.75 77.25C42.25 77.5833 39.5833 77.75 36.75 77.75C25.75 77.75 16.8333 74.1667 10 67C3.33333 59.8333 0 50.6667 0 39.5C0 28.5 3.25 19.25 9.75 11.75C16.4167 4.25 25.25 0.500001 36.25 0.500001C42.5833 0.500001 48.9167 2.16667 55.25 5.5C61.75 8.83333 66.6667 12 70 15C73.3333 18 78.1667 22.6667 84.5 29C85 28.5 86.4167 27.0833 88.75 24.75C91.25 22.25 92.8333 20.6667 93.5 20C94.3333 19.3333 95.8333 17.9167 98 15.75C100.333 13.5833 102 12.1667 103 11.5C104.167 10.6667 105.833 9.5 108 8C110.167 6.33334 112 5.16667 113.5 4.5C115.167 3.83333 117 3.08333 119 2.25C121.167 1.41667 123.25 0.833335 125.25 0.500001C127.417 0.166667 129.583 0 131.75 0C142.75 0 151.667 3.66667 158.5 11C165.333 18.3333 168.75 27.5833 168.75 38.75C168.75 50.0833 165.417 59.5 158.75 67C152.083 74.3333 143.167 78 132 78ZM132 17C130 17 128 17.25 126 17.75C124.167 18.25 122.167 19.0833 120 20.25C118 21.25 116.25 22.1667 114.75 23C113.25 23.8333 111.333 25.25 109 27.25C106.833 29.0833 105.25 30.4167 104.25 31.25C103.417 32.0833 101.75 33.6667 99.25 36C96.9167 38.1667 95.5833 39.4167 95.25 39.75C100.583 44.75 104.417 48.25 106.75 50.25C109.083 52.25 112.75 54.5833 117.75 57.25C122.917 59.75 127.917 61 132.75 61C138.917 61 143.75 59 147.25 55C150.75 50.8333 152.5 45.6667 152.5 39.5C152.5 32.8333 150.667 27.4167 147 23.25C143.5 19.0833 138.5 17 132 17ZM36.25 17.25C30.0833 17.25 25.1667 19.4167 21.5 23.75C18 28.0833 16.25 33.3333 16.25 39.5C16.25 46 18.0833 51.25 21.75 55.25C25.4167 59.0833 30.5 61 37 61C47.3333 61 59.5833 53.9167 73.75 39.75C68.9167 35.25 65.1667 31.9167 62.5 29.75C59.8333 27.4167 55.8333 24.75 50.5 21.75C45.1667 18.75 40.4167 17.25 36.25 17.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className=" w-fit flex items-center">
            Forever Upwards
            <svg
              data-v-774e5e2b=""
              viewBox="0 0 169 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-774e5e2b=""
                d="M132 78C117.5 78 101.667 68.9167 84.5 50.75C84 51.25 82 53.0833 78.5 56.25C75.1667 59.25 73 61.1667 72 62C71.1667 62.6667 69.25 64.1667 66.25 66.5C63.4167 68.8333 61.0833 70.4167 59.25 71.25C57.5833 72.0833 55.4167 73.1667 52.75 74.5C50.0833 75.8333 47.4167 76.75 44.75 77.25C42.25 77.5833 39.5833 77.75 36.75 77.75C25.75 77.75 16.8333 74.1667 10 67C3.33333 59.8333 0 50.6667 0 39.5C0 28.5 3.25 19.25 9.75 11.75C16.4167 4.25 25.25 0.500001 36.25 0.500001C42.5833 0.500001 48.9167 2.16667 55.25 5.5C61.75 8.83333 66.6667 12 70 15C73.3333 18 78.1667 22.6667 84.5 29C85 28.5 86.4167 27.0833 88.75 24.75C91.25 22.25 92.8333 20.6667 93.5 20C94.3333 19.3333 95.8333 17.9167 98 15.75C100.333 13.5833 102 12.1667 103 11.5C104.167 10.6667 105.833 9.5 108 8C110.167 6.33334 112 5.16667 113.5 4.5C115.167 3.83333 117 3.08333 119 2.25C121.167 1.41667 123.25 0.833335 125.25 0.500001C127.417 0.166667 129.583 0 131.75 0C142.75 0 151.667 3.66667 158.5 11C165.333 18.3333 168.75 27.5833 168.75 38.75C168.75 50.0833 165.417 59.5 158.75 67C152.083 74.3333 143.167 78 132 78ZM132 17C130 17 128 17.25 126 17.75C124.167 18.25 122.167 19.0833 120 20.25C118 21.25 116.25 22.1667 114.75 23C113.25 23.8333 111.333 25.25 109 27.25C106.833 29.0833 105.25 30.4167 104.25 31.25C103.417 32.0833 101.75 33.6667 99.25 36C96.9167 38.1667 95.5833 39.4167 95.25 39.75C100.583 44.75 104.417 48.25 106.75 50.25C109.083 52.25 112.75 54.5833 117.75 57.25C122.917 59.75 127.917 61 132.75 61C138.917 61 143.75 59 147.25 55C150.75 50.8333 152.5 45.6667 152.5 39.5C152.5 32.8333 150.667 27.4167 147 23.25C143.5 19.0833 138.5 17 132 17ZM36.25 17.25C30.0833 17.25 25.1667 19.4167 21.5 23.75C18 28.0833 16.25 33.3333 16.25 39.5C16.25 46 18.0833 51.25 21.75 55.25C25.4167 59.0833 30.5 61 37 61C47.3333 61 59.5833 53.9167 73.75 39.75C68.9167 35.25 65.1667 31.9167 62.5 29.75C59.8333 27.4167 55.8333 24.75 50.5 21.75C45.1667 18.75 40.4167 17.25 36.25 17.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col mt-[2.5vw] md:ml-[12vw] gap-[2vw]">
        <div className="flex md:items-center md:text-[1.1vw] text-[3.7vw] text-light-gray-08 md:w-[33vw] pr-[10vw] md:gap-[2vw] gap-[10vw] mt-[18vw] md:mt-0">
          03
          <div className="flex flex-col">
            <h1 className="md:text-[3.7vw] text-[7.3vw] text-light-gray md:leading-[4vw] leading-[8vw] tracking-[-0.1vw]">
              Simplicity is the dot on our horizon
            </h1>
            <div className="md:mt-[2vw] mt-[4vw] flex flex-col">
              {isMobile ? (
                <p>
                  In today's world, we have become information-rich and
                  time-poor. It is those who focus on what really matters that
                  set the tone. We approach every project with a keen eye for
                  simplicity and elegance. Great digital design is the perfect
                  blend of form and function that focuses on the essentials and
                  leaves behind the frivolous.
                </p>
              ) : (
                <>
                  <p>In today's world, we have become </p>
                  <p>information-rich and time-poor. It is</p>
                  <p> those who focus on what really </p>
                  <p> matters that set the tone. We </p>
                  <p>approach every project with a keen</p>
                  <p>eye for simplicity and elegance. Great</p>
                  <p>digital design is the perfect blend of</p>
                  <p>form and function that focuses on the</p>
                  <p>essentials and leaves behind the</p>
                  <p>frivolous.</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex md:items-center md:text-[1.1vw] text-[3.7vw] text-light-gray-08 md:w-[33vw] pr-[10vw] md:gap-[2vw] gap-[10vw] mt-[18vw] ">
          04
          <div className="flex flex-col">
            <h1 className="md:text-[3.7vw] text-[7.3vw] text-light-gray md:leading-[4vw] leading-[8vw] tracking-[-0.1vw]">
              Uncompromising standard of excellence
            </h1>
            <div className="md:mt-[2vw] mt-[4vw] flex flex-col">
              {!isMobile ? (
                <>
                  <p>We aim to push boundaries and</p>
                  <p>exceed expectations with every</p>
                  <p> project, consistently delivering award-</p>
                  <p>winning digital experiences. We </p>
                  <p>recognize that true art lies in the</p>
                  <p>intricacies, so we approach each</p>
                  <p>project with a meticulous eye for detail</p>
                  <p>and a commitment to crafting tailor-</p>
                  <p>made experiences that capture the</p>
                  <p>essence of your brand. Down to earth</p>
                  <p>but reaching for the stars</p>
                </>
              ) : (
                <p>
                  We aim to push boundaries and exceed expectations with every
                  project, consistently delivering award-winning digital
                  experiences. We recognize that true art lies in the
                  intricacies, so we approach each project with a meticulous eye
                  for detail and a commitment to crafting tailor-made
                  experiences that capture the essence of your brand. Down to
                  earth but reaching for the stars
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default How;
