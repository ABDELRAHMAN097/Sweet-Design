import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { zoomIn, fadeInLeft } from "../utils/Animations";
const Footer = () => {
  return (
    <footer className="bg-tertiary text-black  px-6 md:px-16 py-10">
      <motion.div 
      variants={zoomIn}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1 - Logo and Social */}
        <div className="flex flex-col justify-between">
          <div>
            <motion.h2 
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            className="text-xl font-bold mb-4">
              GREENMIND
              </motion.h2>
            <motion.p 
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            className="text-sm text-gray-800 mb-6">
              We help you find <br /> your dream plant
            </motion.p>
            <div className="flex gap-4">
              <a href="#"><FaFacebookF className="text-black hover:text-gray-700" /></a>
              <a href="#"><FaInstagram className="text-black hover:text-gray-700" /></a>
              <a href="#"><FaTwitter className="text-black hover:text-gray-700" /></a>
            </div>
          </div>
        </div>

        {/* Column 2 - Information */}
        <div>
          <motion.h3 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          className="font-bold mb-4">Information</motion.h3>
          <motion.ul 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-2 text-sm text-gray-800">
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Blog</a></li>
          </motion.ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <motion.h3 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          className="font-bold mb-4">Company</motion.h3>
          <motion.ul 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-2 text-sm text-gray-800">
            <li><a href="#">Community</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Our story</a></li>
          </motion.ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <motion.h3 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          className="font-bold mb-4">Contact</motion.h3>
          <motion.ul 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-2 text-sm text-gray-800">
            <li><a href="#">Getting Started</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </motion.ul>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <div className="mt-10 text-sm text-gray-700">
        <motion.p 
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        >2023 all Right Reserved Term of use GREENMIND</motion.p>
      </div>
    </footer>
  );
};

export default Footer;
