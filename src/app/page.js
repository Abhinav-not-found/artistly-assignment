import CategorySection from '@/components/home/CategorySection'
import Footer from '@/components/home/Footer'
import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import NumberSection from '@/components/home/NumberSection'
import React from 'react'
// optimize code for all these components below
// test dark mode for everything
// divide heroSection into more sub-components [do the same for HowItWorksSection]

const HomePage = () => {
  return (
    <div className='p-4'>
      <HeroSection/>
      <NumberSection/>
      <CategorySection/>
      <HowItWorksSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
