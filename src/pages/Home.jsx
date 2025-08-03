import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { AboutUs } from "../components/AboutUs";
import HomeCard from "../components/HomeCard";
import { Categories } from "../components/Categories";
import Slider from "../components/Slider";
import { motion } from "framer-motion";
import {
  zoomIn,
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  fadeInUp,
} from "../utils/Animations";
import Products from "../components/products";
const Home = () => {
  const products = [
    {
      img: "/images/Frame 9.png",
      title: "Plant Pot 1",
      price: "120",
    },
    {
      img: "/images/Frame 7.png",
      title: "Plant Pot 2",
      price: "180",
    },
    {
      img: "/images/Frame 8.png",
      title: "Plant Pot 3",
      price: "90",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 w-full py-5">
      <motion.div 
      variants={zoomIn}
      initial="hidden"
      whileInView="show"
      className="bg-tertiary rounded-xl grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-7 h-[calc(100vh-120px)]">
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start gap-4 md:gap-8 p-4 pt-0">
          {/*  */}
          <div className="">
            <motion.h1 
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            className="text-black text-xl md:text-4xl font-bold">
              HBuy your <br className="hidden md:block" /> dream plantsome
            </motion.h1>
          </div>
          {/*  */}
          <motion.div 
          variants={fadeInDown}
          initial="hidden"
          whileInView="show"
          className="flex justify-start items-start divide-x divide-gray-700">
            <div className="flex flex-col justify-center items-center p-2 pl-0">
              <p className="text-xl md:text-4xl font-bold">50+</p>
              <span>Plant Species</span>
            </div>

            <div className="flex flex-col justify-center items-center p-2">
              <p className="text-xl md:text-4xl font-bold">100+</p>
              <span>Rare Plants</span>
            </div>
          </motion.div>
          {/* search */}
          <div className="flex items-center justify-center bg-white rounded px-2 py-2 min-w-[180px] sm:min-w-[250px] md:min-w-[350px] ">
            <input
              className="w-full border-none outline-none bg-transparent"
              type="text"
              placeholder="What are you looking for?"
            />
            <button className="bg-tertiary text-black rounded p-2">
              <FaSearch />
            </button>
          </div>
        </div>
        {/*  */}
        <div className="relative z-50">
          <img
            className="photo-1 object-cover absolute -bottom-7 right-4 z-0"
            src="/images/Rectangle 2.png"
            alt=""
          />
          <img
            className="photo-2 object-cover absolute -bottom-7 right-12 z-1"
            src="/images/uu.png"
            alt=""
          />
          <img
            className="hidden lg:block w-[100px] md:w-[170px] object-cover absolute arrow-t z-10"
            src="/images/Vector 186.png"
            alt=""
          />
          <img
            className="hidden lg:block w-[50px] md:w-[70px] object-cover absolute arrow-b z-10"
            src="/images/Vector 187.png"
            alt=""
          />
        </div>
      </motion.div>
      {/* frist section */}
      <motion.div 
      variants={zoomIn}
      initial="hidden"
      whileInView="show"
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-4 md:gap-8 p-4">
          <h2 className="text-xl md:text-2xl font-bold">
            Best Selling <br className="hidden md:block" />
            Plants
          </h2>
          <p className="text-gray-500 text-center md:text-left">
            Easiest way to healthy life by buying your favorite plants{" "}
          </p>
          <button className="bg-tertiary text-black rounded p-2  flex justify-center items-center gap-2">
            See more
            <BsArrowRight />
          </button>
        </div>
        {products.map((product, index) => {
          const animationVariant =
            index === 0
              ? fadeInLeft
              : index === 1
              ? fadeInUp
              : index === 2
              ? fadeInRight
              : fadeInDown;

          return (
            <motion.div
              key={index}
              variants={animationVariant}
              initial="hidden"
              whileInView="show"
            >
              <HomeCard
                img={product.img}
                title={product.title}
                price={product.price}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* second section */}

      <div className="w-full">
        <Products />
      </div>

      {/* about */}
      <AboutUs />
      <Categories />
      <Slider />
    </div>
  );
};

export default Home;
