
import { Check, ChevronDown, ChevronRight, Minus, NotepadTextDashed, Plus, Star } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

export default function Tshirts() {
  return (
    <main>
        <section className='flex mt-20 ml-16'>
            <span className='text-slate-500'>Home</span>
            <ChevronRight className='text-slate-500'/>
            <span className='text-slate-500'>Shop</span>
            <ChevronRight className='text-slate-500'/>
            <span className='text-slate-500'>Men</span>
            <ChevronRight className='text-slate-500'/>
            <span>T-shirts</span>
        </section>

        <section className='w-[2020px] md:w-[3025px] lg:w-auto flex flex-col lg:flex-row'>
            <div className='lg:w-6/12 ml-16 mt-24 space-x-5 flex flex-col-reverse lg:flex-row'>
                <div className='space-y-3 flex flex-row lg:flex-col'>
                    <Image src="/images/t-shirt1.png" alt="t-shirt" width={150} height={150}/>
                    <Image src="/images/t-shirt2.png" alt="t-shirt" width={150} height={150}/>
                    <Image src="/images/t-shirt3.png" alt="t-shirt" width={150} height={150}/>
                </div>
                <div>
                    <Image src="/images/t-shirt4.png" alt="t-shirt" width={450} height={450}/>
                </div>
            </div>
            <div className='w-6/12 mt-24 space-y-5 ml-6'>
                <h3 className='font-black text-3xl'>ONE LIFE GRAPHIC T-SHIRT</h3>
                <span className='flex space-x-3 '>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <span>4.5/</span>
                    <span className='text-slate-500'>5</span>
                </span>
                <div className='space-x-3'>
                    <span className='text-xl font-bold'>$260</span>
                    <span className='text-xl font-bold text-slate-400 line-through'>$300</span>
                    <span className='text-pink-400'>-40%</span>
                </div>
                <p className='text-gray-500'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                <p className='text-gray-500 border-t'>Select Colors</p>
                <div className='flex space-x-3'>
                    <div className='bg-[#4F4631] text-white rounded-full w-[37px] h-[37px] font-bold pl-2 pt-2'><Check /></div>
                    <span className='bg-[#314F4A] rounded-full w-[37px] h-[37px]'></span>
                    <span className='bg-[#31344F] rounded-full w-[37px] h-[37px]'></span>  
                </div>
                <p className='text-gray-500 border-t'>Choose Size</p>
                <div className='space-x-4 flex border-b mb-3'>
                    <div className='w-[76px] h-[36px] bg-[#F0F0F0] text-slate-600 rounded-3xl pl-3 pt-2'>Small</div>
                    <div className='w-[76px] h-[36px] bg-[#F0F0F0] text-slate-600 rounded-3xl pl-3 pt-2'>Medium</div>
                    <div className='w-[76px] h-[36px] bg-black text-white rounded-3xl pl-3 pt-2'>Large</div>
                    <div className='w-[76px] h-[36px] bg-[#F0F0F0] text-slate-600 rounded-3xl pl-3 pt-2'>X-Large</div>
                </div>

                <div className='flex'>
                    <div className='flex w-[120px] h-[42px] bg-[#F0F0F0] rounded-3xl space-x-3 pl-4 pt-2'>
                        <div><Minus /></div>
                        <span>1</span>
                        <div><Plus /></div>
                    </div>
                    <div className='w-[300px] h-[42px] bg-black rounded-3xl'>
                        <span className='text-white pl-24 pt-3'>Add to Cart</span>
                    </div>
                </div>                                
            </div>
        </section>
        
        <section className='flex border-b'>
            <div className='border-b text-slate-600 mt-20 ml-40'>
                Product Details
            </div>
            <div className='border-b-black text-black mt-20 ml-80'>
                Rating & Reviews
            </div>
            <div className='border-b text-slate-600 mt-20 ml-80'>
                FAQs
            </div>
        </section>
        <section className='flex'>
            <div className='flex ml-36 mt-16'>
                <h3 className='text-lg font-bold '>All Reviews</h3>
                <span className='text-gray-500'>(451)</span>
            </div>
            <div className='flex space-x-5 mt-16 ml-96 pl-40'>
                <NotepadTextDashed className='w-[28px] h-[28px] bg-[#F0F0F0] rounded-full'/>
                <div className='flex bg-[#F0F0F0] rounded-3xl w-[120px] h-[38px] pt-2 pl-4'>
                    <span>Latest</span>
                    <ChevronDown />
                </div>
                <div className='w-[136px] h-[38px] rounded-3xl bg-black text-white pt-2 pl-2'>Write a Review</div>
            </div>            
        </section>
        {/* customer reviews section */}
        <section className='flex flex-wrap space-y-5 mt-4 ml-20'>
            <div className='w-[510px] h-[241.58px] border ml-7 space-y-5 pl-4 mt-4'>
                <div className='flex space-x-96'>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>                    
                </div>
                <div>
                    <span className='font-bold'>Samantha D.</span>
                    <span className="ml-2 text-white bg-green-500 rounded-full font-semibold">✔</span>
                </div>
                <p className='text-slate-500'>
                &quot;I&apos;m blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;
                </p>

                <p className='text-slate-500'>Posted on August 14, 2023</p>                
            </div>

            <div className='w-[510px] h-[241.58px] border ml-7 space-y-5 pl-4'>
                <div className='flex space-x-96'>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>                   
                </div>
                <div>
                    <span className='font-bold'>Alex M.</span>
                    <span className="ml-2 text-white bg-green-500 rounded-full font-semibold">✔</span>
                </div>
                <p className='text-slate-500'>
                &quot;I&apos;m blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;
                </p>

                <p className='text-slate-500'>Posted on August 15, 2023</p>                
            </div>

            <div className='w-[510px] h-[241.58px] border ml-7 space-y-5 pl-4'>
                <div className='flex space-x-96'>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>                    
                </div>
                <div>
                    <span className='font-bold'>Erthan R.</span>
                    <span className="ml-2 text-white bg-green-500 rounded-full font-semibold">✔</span>
                </div>
                <p className='text-slate-500'>
                &quot;I&apos;m blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;
                </p>

                <p className='text-slate-500'>Posted on August 16, 2023</p>                
            </div>

            <div className='w-[510px] h-[241.58px] border ml-7 space-y-5 pl-4'>
                <div className='flex space-x-96'>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>                    
                </div>
                <div>
                    <span className='font-bold'>Olivia P.</span>
                    <span className="ml-2 text-white bg-green-500 rounded-full font-semibold">✔</span>
                </div>
                <p className='text-slate-500'>
                &quot;I&apos;m blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;
                </p>

                <p className='text-slate-500'>Posted on August 17, 2023</p>                
            </div>

            <div className='w-[510px] h-[241.58px] border ml-7 space-y-5 pl-4'>
                <div className='flex space-x-96'>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>                    
                </div>
                <div>
                    <span className='font-bold'>Liam K.</span>
                    <span className="ml-2 text-white bg-green-500 rounded-full font-semibold">✔</span>
                </div>
                <p className='text-slate-500'>
                &quot;I&apos;m blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;
                </p>

                <p className='text-slate-500'>Posted on August 18, 2023</p>                
            </div>

            <div className='w-[510px] h-[241.58px] border ml-7 space-y-5 pl-4'>
                <div className='flex space-x-96'>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>
                    <Star className='text-yellow-500 fill-current'/>                    
                </div>
                <div>
                    <span className='font-bold'>Alva H.</span>
                    <span className="ml-2 text-white bg-green-500 rounded-full font-semibold">✔</span>
                </div>
                <p className='text-slate-500'>
                &quot;I&apos;m blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;
                </p>

                <p className='text-slate-500'>Posted on August 19, 2023</p>                
            </div>
        </section>
        <button className='mt-8 rounded-3xl bg-slate-100 w-[230px] h-[52px] ml-96'>Load More Reviews</button>

        {/* Last section */}
        <section>
          <h3 className='font-black text-4xl ml-96 mt-28'>You Might Also Like</h3>
          <div className='flex space-x-7 ml-6 mt-6'>
             {/* 1st image */}
            <div>
              <Image src="/images/13.png" alt="t-shirt images" width={300} height={300} className='rounded-xl'/>
              <h3 className='font-extrabold text-lg'>Polo With Contrast Strims</h3>
              <div className='flex'>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <span>4.0/</span>
                <span className='text-slate-600'>5</span>
              </div>
              <div className='space-x-3'>
                <span className='text-xl font-bold'>$212</span>
                <span className='text-xl font-bold text-slate-400 line-through'>$242</span>
                <span className='text-pink-400'>-20%</span>
              </div>
            </div>

             {/* 2nd image */}
             <div>
              <Image src="/images/14.png" alt="t-shirt images" width={300} height={300} className='rounded-xl' />
              <h3 className='font-extrabold text-lg'>Gradient Graphic T-shirt</h3>
              <div className='flex'>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <span>3.5/</span>
                <span className='text-slate-600'>5</span>
              </div>
              <div>
                <span className='text-xl font-bold'>$145</span>
              </div>
            </div>

             {/* 3rd image */}
             <div>
              <Image src="/images/15.png" alt="t-shirt images" width={300} height={300} className='rounded-xl'/>
              <h3 className='font-extrabold text-lg'>Polo With Tipping Details</h3>
              <div className='flex'>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <span>4.0/</span>
                <span className='text-slate-600'>5</span>
              </div>
              <div>
                <span className='text-xl font-bold'>$180</span>
              </div>
            </div>

             {/* 4th image */}
             <div>
              <Image src="/images/16.png" alt="t-shirt images" width={300} height={300} className='rounded-xl'/>
              <h3 className='font-extrabold text-lg'>Black Stript T-shirt</h3>
              <div className='flex'>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <Star className='text-yellow-500 fill-current'/>
                <span>5.0/</span>
                <span className='text-slate-600'>5</span>
              </div>
              <div className='space-x-3'>
                <span className='text-xl font-bold'>$120</span>
                <span className='text-xl font-bold text-slate-400 line-through'>$150</span>
                <span className='text-pink-400'>-30%</span>
              </div>
            </div>

          </div>
        </section>

    </main>
  )
}
