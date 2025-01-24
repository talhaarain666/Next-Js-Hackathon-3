import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const BottomFooter = () => {
  return (
    <div className="bg-purple-100 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 text-sm text-gray-600">
        {/* Left Section */}
        <p>©Webecy - All Rights Reserved</p>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:bg-purple-200 transition"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4 text-blue-600" />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:bg-purple-200 transition"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:bg-purple-200 transition"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4 text-blue-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
