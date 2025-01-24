import Header from "@/components/Header";

export default function Contact() {
  return (<>
    <Header title="Contact Us" />

    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between mb-10">
          {/* About Us Section */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Information About Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est.
            </p>
            <div className="flex space-x-3 mt-4">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          {/* Contact Way Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Way</h2>
            <ul className="space-y-3">
              <li className="text-gray-600">
                <span className="font-bold">Tel:</span> 877-67-88-99
              </li>
              <li className="text-gray-600">
                <span className="font-bold">E-Mail:</span> shop@store.com
              </li>
              <li className="text-gray-600">
                <span className="font-bold">Address:</span> 20 Margaret st,
                London, Great Britain, 3NM98-LK
              </li>
              <li className="text-gray-600">
                <span className="font-bold">Free shipping:</span> on all orders
              </li>
            </ul>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="bg-white shadow-md rounded-lg p-6 md:flex items-start justify-between">
          {/* Form */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor lobortis quis.
            </p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
              >
                Send Mail
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <img
              src="/contact-illustration.svg"
              alt="Contact Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
