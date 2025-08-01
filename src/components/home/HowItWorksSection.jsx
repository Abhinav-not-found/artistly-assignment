import { Search, Smile, TicketCheck } from 'lucide-react'
import React from 'react'

const HowItWorksSection = () => {
  return (
    <section className='w-full h-fit bg-[#C1E965] dark:text-black my-20 rounded-3xl p-5 md:p-10 flex flex-col gap-14 md:gap-24'>
      <p className='text-5xl md:text-6xl font-semibold text-center mt-10'>How It Works</p>
      <div className='flex flex-col md:flex-row justify-center gap-10 mb-10'>
        <div className='flex flex-col items-center justify-center'>
          <Search className='size-20' />
          <p className='text-2xl font-semibold'> Browse & Filter</p>
          <p className='text-center text-lg lg:w-2/3 mt-4'>Search our curated artist collection with advanced filters</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <TicketCheck className='size-20' />
          <p className='text-2xl font-semibold'> Request Quote</p>
          <p className='text-center text-lg lg:w-2/3 mt-4'>Send booking requests and get personalized quotes</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Smile className='size-20'/>
          <p className='text-2xl font-semibold'> Book & Enjoy</p>
          <p className='text-center text-lg lg:w-2/3 mt-4'>Finalize your booking and enjoy an amazing performance</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
