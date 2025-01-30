'use client'

import React, { useEffect, useState } from 'react'
import { getCartItems, removeFromCart, updateCartQuantity } from '../addToCart/actions'
import { Product } from '../../../types/products'
import swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';

export default function Cart() {
    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
        setCartItems(getCartItems())
    }, [])

    const handleRemove = (id: string) => {
        swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id)
                setCartItems(getCartItems())
                swal.fire("Deleted!", "Your item has been removed.", "success")
            }
        })
    }

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems())
    }

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) handleQuantityChange(id, product.inventory + 1)
    }

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1)
    }

    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
    }

    const router = useRouter();

    const handleProceed = () => {
        swal.fire({
            title: "Proceed to Checkout?",
            text: "Please review your cart before checkout",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Proceed!"
        }).then((result) => {
            if (result.isConfirmed) {
                swal.fire("Success!", "Your order has been successfully placed", "success");

                router.push('/checkout') // Redirect to checkout page

                // Clear the cart after successful order
                setCartItems([])
            }

        })
    }

    return (
        <main className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">🛒 Your Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="text-gray-600 text-center py-10">Your cart is empty 🛍️</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div
                                key={item._id}
                                className="flex justify-between items-center border-b py-4"
                            >
                                {/* Product Image */}
                                {item.image && (
                                    <Image
                                        src={urlFor(item.image).url()}
                                        className="w-16 h-16 object-cover rounded-lg"
                                        alt={item.name}
                                        width={500}
                                        height={500}
                                    />
                                )}

                                {/* Product Details */}
                                <div className="flex-1 ml-4">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">
                                        Price: ${item.price} x {item.inventory} ={' '}
                                        <span className="font-bold">
                                            ${item.price * item.inventory}
                                        </span>
                                    </p>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg"
                                        onClick={() => handleDecrement(item._id)}
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{item.inventory}</span>
                                    <button
                                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg"
                                        onClick={() => handleIncrement(item._id)}
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                    className="ml-4 text-red-500 hover:text-red-700"
                                    onClick={() => handleRemove(item._id)}
                                >
                                    🗑️
                                </button>
                            </div>
                        ))}

                        {/* Total Section */}
                        <div className="flex justify-between items-center mt-6 border-t pt-4">
                            <h3 className="text-xl font-semibold">Total Amount:</h3>
                            <span className="text-xl font-bold">${calculatedTotal().toFixed(2)}</span>
                        </div>

                        {/* Checkout Button */}
                        <button
                            onClick={handleProceed}
                            className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
                        >
                            Proceed to Checkout
                        </button>
                    </>
                )}
            </div>
        </main>
    )
}
