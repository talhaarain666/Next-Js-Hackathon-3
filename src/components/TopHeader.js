import React from "react";
import { Mail, Phone, ChevronDown, User, Heart, ShoppingCart } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-purple-600 text-white py-2 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>mhhasanul@gmail.com</span>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>(12345)67890</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Language Selector */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>English</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          {/* Currency Selector */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>USD</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          {/* Login */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <User className="w-4 h-4" />
            <span>Login</span>
          </div>
          {/* Wishlist */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <Heart className="w-4 h-4" />
            <span>Wishlist</span>
          </div>
          {/* Cart */}
          <div className="flex items-center cursor-pointer">
            <ShoppingCart className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
