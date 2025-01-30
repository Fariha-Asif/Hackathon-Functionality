'use client'

import React from 'react'
import Hero from './Components/HeroSection'
import BrandLogos from './Components/BrandLogos'
import Featured1 from './Components/Featured1'
import Featured2 from './Components/Featured2'
import DressStyle from './Components/DressStyle'
import HappyCustomers from './Components/CustomersReview'

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
