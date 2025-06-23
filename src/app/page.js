import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import Navbar from '@/components/Navbar'
import React from 'react'

const HomePage = () => {
  return (
    <div className='p-4'>
      <Navbar/>
      <HeroSection/>
      <HowItWorksSection/>
    </div>
  )
}

export default HomePage
