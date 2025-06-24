import CategorySection from '@/components/home/CategorySection'
import Footer from '@/components/home/Footer'
import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import NumberSection from '@/components/home/NumberSection'
import Head from 'next/head'
import React from 'react'
// optimize code for all these components below
// test dark mode for everything
// divide heroSection into more sub-components [do the same for HowItWorksSection]
// make the classnames in a variable 
// fix explore button navigation in hero section

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Artistly | Book Performing Artists for Any Event</title>
        <meta name="description" content="Discover and book verified artists for events. Singers, DJs, dancers & more — all in one place." />
        <meta property="og:title" content="Artistly - Discover & Book Artists" />
        <meta property="og:description" content="Connecting event planners with top-rated performers." />
        <meta property="og:image" content="/artistly-og.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className='p-4'>
        <HeroSection />
        <NumberSection />
        <CategorySection />
        <HowItWorksSection />
        <Footer />
      </main>
    </>
  )
}

export default HomePage
