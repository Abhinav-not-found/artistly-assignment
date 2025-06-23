import { Search, Smile, TicketCheck } from 'lucide-react'
import React from 'react'

const HowItWorksSection = () => {
  return (
    <div className='w-full h-fit bg-primary mt-20 rounded-3xl p-10 flex flex-col gap-32'>
      <p className='text-6xl font-semibold text-center mt-10'>How It Works</p>
      <div className='flex justify-center gap-10 mb-10'>
        <div className='flex flex-col items-center justify-center'>
          <Search className='size-20' />
          <p className='text-2xl font-semibold'> Browse & Filter</p>
          <p className='text-center w-2/3 mt-4'>Search our curated artist collection with advanced filters</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <TicketCheck className='size-20' />
          <p className='text-2xl font-semibold'> Request Quote</p>
          <p className='text-center w-2/3 mt-4'>Send booking requests and get personalized quotes</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Smile className='size-20'/>
          <p className='text-2xl font-semibold'> Book & Enjoy</p>
          <p className='text-center w-2/3 mt-4'>Finalize your booking and enjoy an amazing performance</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection
