import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
        {/* Left Column: FAQ Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-8">General Information</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Eu dictumst cum at sed euismod condimentum?
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
                tristique mollis vitae, consequat gravida sagittis.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Magna bibendum est fermentum eros.
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
                tristique mollis vitae, consequat gravida sagittis.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Odio muskana hak eris conseekin skeleeton?
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
                tristique mollis vitae, consequat gravida sagittis.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Elit id blandit sabara boi velit gua mara?
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
                tristique mollis vitae, consequat gravida sagittis.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Ask a Question</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                Your Name<span className="text-red-500">*</span>
              </label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">
                Subject<span className="text-red-500">*</span>
              </label>
              <Input id="subject" placeholder="Subject" />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="message"
              >
                Type Your Message<span className="text-red-500">*</span>
              </label>
              <Textarea id="message" placeholder="Type Your Message" />
            </div>
            <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2">
              Send Mail
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
