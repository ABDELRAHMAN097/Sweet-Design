import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-black  px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1 - Logo and Social */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">GREENMIND</h2>
            <p className="text-sm text-gray-800 mb-6">
              We help you find <br /> your dream plant
            </p>
            <div className="flex gap-4">
              <a href="#"><FaFacebookF className="text-black hover:text-gray-700" /></a>
              <a href="#"><FaInstagram className="text-black hover:text-gray-700" /></a>
              <a href="#"><FaTwitter className="text-black hover:text-gray-700" /></a>
            </div>
          </div>
        </div>

        {/* Column 2 - Information */}
        <div>
          <h3 className="font-bold mb-4">Information</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-800">
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-800">
            <li><a href="#">Community</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Our story</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-800">
            <li><a href="#">Getting Started</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-sm text-gray-700">
        <p>2023 all Right Reserved Term of use GREENMIND</p>
      </div>
    </footer>
  );
};

export default Footer;
