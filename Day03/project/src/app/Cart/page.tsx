import { ArrowRight, ChevronRight, Minus, Plus, Tag, Trash2 } from 'lucide-react'
import React from 'react'
import Image from 'next/image'


export default function Cart() {
  return (
    <main>
        <section className='flex mt-20 ml-16'>
            <span className='text-slate-500'>Home</span>
            <ChevronRight className='text-slate-500'/>
            <span className='text-black'>Cart</span>
        </section>
        <h3 className='font-black text-3xl mt-6 ml-16'>
            YOUR CART
        </h3>
        <div className='flex'>
            {/* Left Section */}
            <section className='w-[715px] h-[508px]'>
                {/* 1st row */}
                <div className='flex w-[667px] h-[124px] mt-9 ml-16 space-x-4 border space-y-4 rounded-2xl'>
                    <Image src="/images/14.png" alt="t-shirt image" width={150} height={150}/>
                    <div>
                        <div className='flex'>
                            <h4 className='font-bold text-lg'>Gradient Graphic T-shirt</h4>
                            <Trash2 className='text-red-600 ml-64'/>
                        </div>
                        
                        <div>
                            <span>
                                Size:
                            </span>
                            <span className='text-slate-500 ml-3'>
                                Large
                            </span>
                        </div>
                        <div>
                            <span>
                                Color:
                            </span>
                            <span className='text-slate-500 ml-3'>
                                White
                            </span>
                        </div>
                        <div className='flex'>
                            <span className='font-bold'>$145</span>
                            <span className='flex w-[96px] h-[34px] ml-96 space-x-4 bg-slate-100 rounded-2xl'><Minus className='mr-4'/> 1 <Plus /></span>
                        </div>
                    </div>
                </div>
                {/* 2nd row */}
                <div className='flex w-[667px] h-[124px] mt-9 ml-16 space-x-4 border space-y-4 rounded-2xl'>
                    <Image src="/images/03.png" alt="t-shirt image" width={150} height={150}/>
                    <div>
                        <div className='flex'>
                            <h4 className='font-bold text-lg'>Checkered shirt</h4>
                            <Trash2 className='text-red-600 ml-64'/>
                        </div>
                        
                        <div>
                            <span>
                                Size:
                            </span>
                            <span className='text-slate-500 ml-3'>
                                Medium
                            </span>
                        </div>
                        <div>
                            <span>
                                Color:
                            </span>
                            <span className='text-slate-500 ml-3'>
                                Red
                            </span>
                        </div>
                        <div className='flex'>
                            <span className='font-bold'>$180</span>
                            <span className='flex w-[96px] h-[34px] ml-96 space-x-4 bg-slate-100 rounded-2xl'><Minus className='mr-4'/> 1 <Plus /></span>
                        </div>
                    </div>
                </div>
                {/* 3rd row */}

                <div className='flex w-[667px] h-[124px] mt-9 ml-16 space-x-4 border space-y-4 rounded-2xl'>
                    <Image src="/images/02.png" alt="t-shirt image" width={150} height={150}/>
                    <div>
                        <div className='flex'>
                            <h4 className='font-bold text-lg'>Skinny Fit Jeans</h4>
                            <Trash2 className='text-red-600 ml-64'/>
                        </div>
                        
                        <div>
                            <span>
                                Size:
                            </span>
                            <span className='text-slate-500 ml-3'>
                                Large
                            </span>
                        </div>
                        <div>
                            <span>
                                Color:
                            </span>
                            <span className='text-slate-500 ml-3'>
                                Blue
                            </span>
                        </div>
                        <div className='flex'>  
                            <span className='font-bold'>$240</span>
                            <span className='flex w-[96px] h-[34px] ml-96 space-x-4 bg-slate-100 rounded-2xl'><Minus className='mr-4'/> 1 <Plus /></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Right Section */}
            <section className='ml-16 mt-10 space-y-5 border pl-4 rounded-xl pt-3'>
                <h3 className='font-bold text-xl'>Order Summary</h3>
                <div>
                    <span className='text-slate-600'>Subtotal</span>
                    <span className='ml-60 font-bold'>$565</span>
                </div>
                <div>
                    <span className='text-slate-600'>Discount (-20%)</span>
                    <span className='text-red-500 ml-44'>-$113</span>
                </div>
                <div>
                    <span className='text-slate-600'>Delivery Fee</span>
                    <span className='ml-52 font-bold'>$15</span>
                </div>
                <div className='border py-2'>
                    <span>Total</span>
                    <span className='font-bold ml-64'>$467</span>
                </div>

                <div className='flex'>
                    <Tag  className='text-slate-400'/>
                    <input 
                    type='nunmber'
                    placeholder='Add Promo Code'
                    className='pl-4'/>
                    <button className='w-[98px] h-[38px] rounded-3xl bg-black text-white'>Apply</button>
                </div>
                <button className='flex w-[357px] h-[50px] rounded-3xl bg-black text-white pt-3 pl-28'>
                    Go To Checkout 
                    <ArrowRight className='ml-2'/>
                    </button>

            </section>
        </div>
        
    </main>
  )
}
