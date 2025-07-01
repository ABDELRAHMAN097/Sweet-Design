import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { zoomIn, fadeInLeft, fadeInRight, fadeInDown, fadeInUp } from "../utils/Animations";
import { motion } from "framer-motion";
const Slider = () => {
  const slides = [
    {
      id: 1,
      content:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      img: "/images/p01.png",
      name: "John Deo",
      rate: "4.5",
    },
    {
      id: 2,
      content:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      img: "/images/p02.png",
      name: "John Deo",
      rate: "4.5",
    },
    {
      id: 3,
      content:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      img: "/images/p01.png",
      name: "John Deo",
      rate: "4.5",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <motion.div
    variants={zoomIn}
    initial="hidden"
    whileInView="show"
    className="w-full flex flex-col gap-4 items-end relative"
  >
    <div className="w-full flex flex-col gap-4 items-end relative">
      {/* Header with pagination and text */}
      <div className="w-full flex justify-between items-center">
        <motion.p
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        >
        <p className="text-black text-sm md:text-2xl font-bold">
        What customers say about <br className="hidden md:block"/>GREEMIND?
        </p>
        </motion.p>

        <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="show"
        >
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 h-2 rounded-full ${
                current === i ? "bg-tertiary w-6" : "bg-gray-400 w-2"
              }`}
            ></button>
          ))}
        </div>
        </motion.div>
      </div>

      {/* Slider container */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-xl relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center"
              style={{ width: `${100 / slides.length}%` }}
            >
             
              <div className="w-full flex flex-col items-start justify-start bg-tertiary rounded-xl">
                <div className="p-5 text-start">
                <p className="text-gray-600 font-[420]">{slide.content}</p>
                </div>
                <div className="flex items-center justify-start w-full">
                    <motion.img
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    className="w-20 self-end" src={slide.img} alt="" />
                    
                    <div className="flex items-start justify-between pr-5 w-full">
                        <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        className="text-gray-800 font-[700]"
                        >
                        {slide.name}
                        </motion.p>
                        {/*  */}
                        <motion.p
                        variants={fadeInDown}
                        initial="hidden"
                        whileInView="show"
                        >
                        <p className="text-gray-800 font-[700] flex items-center justify-center gap-1"><FaStar />{slide.rate}</p>
                        </motion.p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Slider;
