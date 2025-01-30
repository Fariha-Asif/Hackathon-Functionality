'use client'

import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItems } from '../addToCart/actions'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { CgChevronRight } from 'react-icons/cg'

const checkout = () => {

    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] = useState<number>(0)
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
    })

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        zipCode: false,
        city: false,
    })

    useEffect(() => {
        setCartItems(getCartItems())
        const appliedDiscount = localStorage.getItem("appliedDiscount")
        if(appliedDiscount) {
            setDiscount(Number(appliedDiscount))
        }
    }, [])

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory, 0)

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormValues({
                ...formValues,
                [e.target.id]: e.target.value
            })
        }

        const validateForm = () => {
            const errors = {
                firstName : !formValues.firstName,
                lastName : !formValues.lastName,
                email : !formValues.email.includes("@"),
                phone : !formValues.phone.match(/^[0-9]{10}$/),
                address : !formValues.address,
                zipCode : !formValues.zipCode,
                city : !formValues.city,
            };
            setFormErrors(errors);

            return Object.values(errors).every((error) => !error)
        }

        const handlePlaceOrder = () => {
            if(validateForm()) {
                localStorage.removeItem("appliedDiscount")
            }
        }
  return (
    <div className="min-h-screen bg-gray-50">
        <div className='mt-6'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <nav className='flex items-center gap-2 py-4'>
                    <Link href={"/Cart"}
                    className="text-[#666666] hover:text-black transition text-sm">
                        cart
                    </Link>
                    <CgChevronRight className="w-4 h-4 text-[#666666]"/>
                    <span className="text-sm">
                        CheckOut
                    </span>
                </nav>
            </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* Order Summary */}
                <div className="bg-white border rounded-lg p-6 space-y-4">
                    <h2 className="text-lg font-semibold mb-4 ">
                            Order Summary
                    </h2>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                                <div className="w-16 h-16 rounded overflow-hidden">
                                        {item.image && (
                                            <Image src={urlFor(item.image).url()} 
                                                   alt={item.name}
                                                   width={50}
                                                   height={50}
                                                   className='object-cover rounded-lg w-full h-full' 
                                            />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-gray-500">Quantity : {item.inventory} </p>
                                    <p>
                                        ${item.price * item.inventory}
                                    </p>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No items in Cart</p>
                    )}
                    <div className="text-right pt-4">
                        <p className="text-sm">
                            SubTotal: <span className="font-medium">${subTotal}</span>
                        </p>
                        <p className="text-sm">
                            Discount: <span className="font-medium">${discount}</span>
                        </p>
                        <p className="text-lg font-semibold">
                            Total: <span>${subTotal.toFixed(2)}</span>
                        </p>
                    </div>
                </div>
                {/* Form section */}
                <div className="bg-white border rounded-lg p-6 space-y-6">
                    <h2 className="text-xl font-semibold">Billing Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName">First Name </label>
                            <input 
                            type="text" 
                            id="firstName"
                            placeholder='Enter your First Name' 
                            value={formValues.firstName} 
                            onChange={handleInputChange} 
                            className='border mt-2'
                            />
                            {formErrors.firstName && (
                                <p className="text-sm text-red-500">
                                    First Name is required
                                </p>
                                )}
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name </label>
                            <input 
                            type="text" 
                            id="lastName"
                            placeholder='Enter your Last Name' 
                            value={formValues.lastName} 
                            onChange={handleInputChange}
                            className='border mt-2' 
                            />
                            {formErrors.lastName && (
                                <p className="text-sm text-red-500">
                                    Last Name is required
                                </p>
                                )}
                        </div>

                        <div>
                            <label htmlFor="address">Address </label>
                            <input 
                            type="text" 
                            id="address"
                            placeholder='Enter your Address here' 
                            value={formValues.address} 
                            onChange={handleInputChange} 
                            className='border mt-2'
                            />
                            {formErrors.address && (
                                <p className="text-sm text-red-500">
                                    Address is required
                                </p>
                                )}
                        </div>

                        <div>
                            <label>Phone </label>
                            <input 
                            type="text" 
                            id="phone"
                            placeholder='Enter your Phone Number' 
                            value={formValues.phone} 
                            onChange={handleInputChange} 
                            className='border mt-2'
                            />
                            {formErrors.phone && (
                                <p className="text-sm text-red-500">
                                    Phone is required
                                </p>
                                )}
                        </div>

                        <div>
                            <label>City </label>
                            <input 
                            type="text" 
                            id="city"
                            placeholder='Enter your city here' 
                            value={formValues.city} 
                            onChange={handleInputChange} 
                            className='border mt-2'
                            />
                            {formErrors.city && (
                                <p className="text-sm text-red-500">
                                    City is required
                                </p>
                                )}
                        </div>

                        <div>
                            <label>Zip Code </label>
                            <input 
                            type="text" 
                            id="zipCode"
                            placeholder='Enter your Zip Code' 
                            value={formValues.zipCode} 
                            onChange={handleInputChange}
                            className='border mt-2' 
                            />
                            {formErrors.zipCode && (
                                <p className="text-sm text-red-500">
                                    Zip Code is required
                                </p>
                                )}
                        </div>

                        <div>
                            <label>Email </label>
                            <input 
                            type="text" 
                            id="email"
                            placeholder='Enter your Email here' 
                            value={formValues.email} 
                            onChange={handleInputChange}
                            className='border mt-2' 
                            />
                            {formErrors.email && (
                                <p className="text-sm text-red-500">
                                    Email is required
                                </p>
                                )}
                        </div>
                    </div>
                    <button 
                        className='w-full h-12 bg-blue-500 hover:bg-blue-700 text-white rounded-lg'
                        onClick={handlePlaceOrder}>
                            Place Order
                    </button>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default checkout
