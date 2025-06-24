import ArtistCard from '@/components/explore/ArtistCard'
import { Funnel } from 'lucide-react'
import React from 'react'

// make filter controls & funcitonality
// make dummy data for this page and render it in artistcards

const ExplorePage = () => {
  return (
    <div className='p-4 m-auto'>
      <h1 className='text-5xl font-bold mt-4'>Discover Amazing Artists</h1>
      <p className='text-2xl mt-2'>Browse through our curated collection of talented performers</p>
      <div className='w-full h-40 bg-stone-100 dark:bg-stone-900 mt-10 rounded-3xl p-4 px-6'>
        <div className='flex justify-between items-center'>
        <p className='font-semibold text-xl flex gap-1 items-center'><Funnel className='size-5' />Filters</p>
        <button>change</button>
        </div>
      </div>
      <div className='w-fit m-auto grid grid-cols-4 auto-rows-max gap-x-10 gap-y-10 mt-10'>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
      </div>
    </div>
  )
}

export default ExplorePage
