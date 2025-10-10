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
import ServicesSection from "../components/ServicesSection";
const Home = () => {
  const products = [
    {
      img: "/images/سباك.jfif",
      title: "صيانة وسباكة",
      price: "ابتداءً من 200 جنيه",
    },
    {
      img: "/images/كهربائي (1).jfif",
      title: "أعمال الكهرباء",
      price: "ابتداءً من 180 جنيه",
    },
    {
      img: "/images/شغاله.jfif",
      title: "تنظيف المنازل",
      price: "ابتداءً من 150 جنيه",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 w-full py-5">
      <motion.div 
      variants={zoomIn}
      initial="hidden"
      whileInView="show"
      className="bg-tertiary rounded-xl grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-7 h-[calc(100vh-120px)]">
        <div className="flex flex-col justify-center items-center sm:justify-centrt sm:items-start gap-4 md:gap-8 p-4 pt-0">
          {/*  */}
          <div className="">
            <motion.h1 
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            className="text-white text-center md:text-start text-2xl md:text-3xl font-bold">
              ... اختار خدمتك وسيب الباقي علينا<br className="hidden md:block" /> أكتر من 50 خدمة منزلية و100 عامل معتمد
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
              <span>خدمة منزلية</span>
            </div>

            <div className="flex flex-col justify-center items-center p-2">
              <p className="text-xl md:text-4xl font-bold">100+</p>
              <span>فني محترف</span>
            </div>
          </motion.div>
          {/* search */}
          <div className="flex items-center justify-center bg-white rounded px-2 py-2 min-w-[180px] sm:min-w-[250px] md:min-w-[350px] ">
            <input
              className="w-full border-none outline-none bg-transparent"
              type="text"
              placeholder="ابحث عن الخدمة اللي محتاجها..."
              />
            <button className="bg-tertiary text-black rounded p-2">
              <FaSearch />
            </button>
          </div>
        </div>
        {/* photo for hero section */}
        <div className="relative z-50">
          <img
            className="photo-1 object-cover absolute -bottom-7 right-4 z-0"
            src="/images/Rectangle 2.png"
            alt=""
          />
          <img
            className="photo-2 object-cover absolute -bottom-9 right-12 z-1"
            src="/images/ff.png"
            alt=""
          />
          {/* <img
            className="hidden lg:block w-[100px] md:w-[170px] object-cover absolute arrow-t z-10"
            src="/images/Vector 186.png"
            alt=""
          /> */}
          {/* <img
            className="hidden lg:block w-[50px] md:w-[70px] object-cover absolute arrow-b z-10"
            src="/images/Vector 187.png"
            alt=""
          /> */}
        </div>
      </motion.div>
      {/* frist section */}
      <div className="w-full">
        <ServicesSection />
      </div>
      
       {/* second section */}
      <motion.div 
      variants={zoomIn}
      initial="hidden"
      whileInView="show"
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-4 md:gap-8 p-4">
          <h2 className="text-xl md:text-2xl font-bold">
          اكثر الخدمات طلبًا <br className="hidden md:block" />
            
          </h2>
          <p className="text-gray-500 text-center md:text-left">
          أسهل طريقة تطلب بيها خدمتك من البيت — اختار الخدمة المناسبة وسيب الباقي علينا!          </p>
          <button className="bg-tertiary text-black rounded p-2  flex justify-center items-center gap-2">
          شوف كل الخدمات
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

      {/* about */}
      {/* <AboutUs />
      <Categories />
      <Slider /> */}
    </div>
  );
};

export default Home;
