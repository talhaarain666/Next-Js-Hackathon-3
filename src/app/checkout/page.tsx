"use client"
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  country: string;
  postalCode: string;
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // await client.create({
    //   _type: 'order',
    //   ...formData,
    //   orderDetails: [
    //     { productName: 'Ut diam consequat', color: 'Brown', size: 'XL', price: 32 },
    //     { productName: 'Ut diam consequat', color: 'Brown', size: 'XL', price: 32 },
    //     // Add more products here
    //   ],
    // });
  };

  return (
    <div className="container mx-auto p-12 ">
      <h1 className="text-2xl font-bold mb-4">Hekto Demo</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Left Section: Contact and Shipping */}
        <div className="col-span-2 bg-[#F8F8FD] py-16 px-8">
          <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email or mobile phone number"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 "
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="newsletter"
              className="mr-2"
            />
            <label htmlFor="newsletter" className="text-sm">
              Keep me up to date on news and exclusive offers
            </label>
          </div>
          <h2 className="text-lg font-semibold mb-2 mt-16">Shipping Address</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name (optional)"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 "
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 "
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 "
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              value={formData.apartment}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 "
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 "
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 "
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 "
            />
          </div>
          <button
            type="submit"
            className="mt-6 bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Continue Shipping
          </button>
        </div>

        {/* Right Section: Order Summary */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between border-b border-gray-300 pb-2"
              >
                <div>
                  <p className="text-sm font-medium">Ut diam consequat</p>
                  <p className="text-xs text-gray-500">Color: Brown</p>
                  <p className="text-xs text-gray-500">Size: XL</p>
                </div>
                <p className="text-sm font-medium">$32.00</p>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>£219.00</span>
            </p>
            <p className="flex justify-between text-sm">
              <span>Total:</span>
              <span>£325.00</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Shipping & taxes calculated at checkout
            </p>
          </div>
          <button
            type="button"
            className="mt-4 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          >
            Proceed To Checkout
          </button>
        </div>
      </form>
    </div>
  );
}
