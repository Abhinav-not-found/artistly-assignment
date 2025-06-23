import Footer from '@/components/home/Footer'
import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import NumberSection from '@/components/home/NumberSection'
import React from 'react'

const HomePage = () => {
  return (
    <div className='p-4'>
      <HeroSection/>
      <NumberSection/>
      <HowItWorksSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
