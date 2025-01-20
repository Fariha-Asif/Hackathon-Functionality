'use client'

import React from 'react'
import HeroSection from './Components/HeroSection'
import BrandLogos from './Components/BrandLogos'
import Featured1 from './Components/Featured1'
import Featured2 from './Components/Featured2'
import DressStyle from './Components/DressStyle'
import HappyCustomers from './Components/CustomersReview'

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <BrandLogos />
      <Featured1 />
      <Featured2 />
      <DressStyle />
      <HappyCustomers />
    </div>
  )
}
