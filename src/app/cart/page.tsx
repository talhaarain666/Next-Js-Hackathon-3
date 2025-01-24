'use client';

import Header from '@/components/Header';
import { getCart, removeFromCart, updateQuantity } from '@/utils/cart';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ShoppingCart() {
    type CartItem = {
        _id: string;
        name: string;
        price: number;
        image: string;
        quantity: number;
    };

    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const handleQuantityChange = (id: string, delta: number) => {
        updateQuantity(id, delta);
        setCart(getCart());
    };

    const handleRemove = (id: string) => {
        removeFromCart(id);
        setCart(getCart());
    };

    const calculateTotal = () =>
        cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal + 10; // Assuming $10 shipping charge

    return (
        <>
            <Header title="Shopping Cart" />

            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="flex-1">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-left">
                                    <th className="border-b-2 pb-2">Product</th>
                                    <th className="border-b-2 pb-2">Price</th>
                                    <th className="border-b-2 pb-2">Quantity</th>
                                    <th className="border-b-2 pb-2">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item._id} className="border-b">
                                        <td className="py-4 flex gap-4 items-center">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <div>
                                                <p className="font-semibold">{item.name}</p>
                                                <p className="text-sm text-gray-500">Color: Brown</p>
                                                <p className="text-sm text-gray-500">Size: XL</p>
                                            </div>
                                        </td>
                                        <td className="py-4">${item.price.toFixed(2)}</td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleQuantityChange(item._id, -1)}
                                                    className="px-2 py-1 border rounded"
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() => handleQuantityChange(item._id, 1)}
                                                    className="px-2 py-1 border rounded"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-4">${(item.price * item.quantity).toFixed(2)}</td>
                                        <td className="py-4">
                                            <button
                                                onClick={() => handleRemove(item._id)}
                                                className="text-red-500"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Cart Totals */}
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-lg font-bold mb-4 text-center">Cart Totals</h2>
                        <div className="p-6 border rounded bg-gray-50">
                            <div className="flex justify-between mb-4">
                                <span>Subtotals:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <Link href="/checkout">

                                <button className="w-full bg-green-500 text-white py-2 rounded">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
