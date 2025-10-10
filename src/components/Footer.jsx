import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { zoomIn, fadeInLeft } from "../utils/Animations";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-black px-6 md:px-16 py-10">
      <motion.div
        variants={zoomIn}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
      >

        {/* العمود الأول - اللوجو والسوشيال */}
        <div className="flex flex-col justify-between">
          <div>
            <motion.h2
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              className="text-xl font-bold mb-4"
            >
              HomeDo Pro
            </motion.h2>
            <motion.p
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              className="text-sm text-gray-800 mb-6 leading-relaxed"
            >
              نوفّر لك خدمات منزلية احترافية وسريعة <br /> 
              من أفضل الفنيين في كل المجالات.
            </motion.p>
            <div className="flex gap-4">
              <a href="#"><FaFacebookF className="text-black hover:text-gray-700" /></a>
              <a href="#"><FaInstagram className="text-black hover:text-gray-700" /></a>
              <a href="#"><FaTwitter className="text-black hover:text-gray-700" /></a>
            </div>
          </div>
        </div>

        {/* العمود الثاني - معلومات */}
        <div>
          <motion.h3
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            className="font-bold mb-4"
          >
            معلومات
          </motion.h3>
          <motion.ul
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-2 text-sm text-gray-800"
          >
            <li><a href="#">من نحن</a></li>
            <li><a href="#">الخدمات</a></li>
            <li><a href="#">الأسئلة الشائعة</a></li>
          </motion.ul>
        </div>

        {/* العمود الثالث - الشركة */}
        <div>
          <motion.h3
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            className="font-bold mb-4"
          >
            الشركة
          </motion.h3>
          <motion.ul
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-2 text-sm text-gray-800"
          >
            <li><a href="#">سياسة الخصوصية</a></li>
            <li><a href="#">الشروط والأحكام</a></li>
            <li><a href="#">انضم إلينا كفني</a></li>
          </motion.ul>
        </div>

        {/* العمود الرابع - تواصل معنا */}
        <div>
          <motion.h3
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            className="font-bold mb-4"
          >
            تواصل معنا
          </motion.h3>
          <motion.ul
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-2 text-sm text-gray-800"
          >
            <li><a href="#">ابدأ الآن</a></li>
            <li><a href="#">الأسعار</a></li>
            <li><a href="#">مركز الدعم</a></li>
          </motion.ul>
        </div>
      </motion.div>

      {/* النص السفلي */}
      <div className="mt-10 text-sm text-gray-700 text-center md:text-left">
        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
        >
          © 2025 جميع الحقوق محفوظة لـ <span className="font-semibold">HomeDo Pro</span> | تم التصميم بحب ❤️ في مصر
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
