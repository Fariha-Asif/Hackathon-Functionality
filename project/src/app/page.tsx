'use client'

import React from 'react'
import Hero from '@/app/Components/HeroSection'
import BrandLogos from '@/app/Components/BrandLogos'
import Featured1 from '@/app/Components/Featured1'
import Featured2 from '@/app/Components/Featured2'
import DressStyle from '@/app/Components/DressStyle'
import HappyCustomers from '@/app/Components/CustomersReview'

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandLogos />
      <Featured1 />
      <Featured2 />
      <DressStyle />
      <HappyCustomers />
    </div>
  )
}
