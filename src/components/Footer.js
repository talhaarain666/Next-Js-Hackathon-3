// Footer Component
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F3F5FF] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Newsletter */}
        <div>
          <h1 className="text-2xl font-bold">Hekto</h1>
          <div className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 p-3 rounded-l-md bg-white outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-3 rounded-r-md">
              Sign Up
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600">Contact Info</p>
          <p className="text-sm text-gray-600">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold">Categories</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="text-lg font-bold">Customer Care</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-lg font-bold">Pages</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
