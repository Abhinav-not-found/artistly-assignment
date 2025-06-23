import React from "react";
import { Button } from "../ui/button";
import { NotebookPen, Sparkle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className='h-[90vh] flex flex-col justify-between relative'>
      <div>
        <h1 className='w-1/2 m-auto text-6xl font-semibold text-center mt-10'>
          Find the Perfect Artist for Every Occasion
        </h1>
        <p className='w-3/6 m-auto text-center mt-10 text-xl'>
          Whether you're organizing a corporate event or a private party, find
          verified artists and manage your bookings — all in one place.
        </p>
        <div className='mt-10 flex gap-2 justify-center'>
          <Button className='bg-black rounded-full text-lg p-5'>
            <p className='cursor-pointer'>Explore</p>
          </Button>
          <Button className='bg-stone-200 text-black  text-lg p-5 hover:bg-stone-300 rounded-full'>
            Join as artist
          </Button>
        </div>
      </div>
      <div className='absolute bottom-0 w-[98%] flex items-end gap-2'>
        <div className='w-full h-96 flex flex-col gap-2'>
          <div className='w-full h-3/4 bg-secondary rounded-3xl flex flex-col items-start justify-start p-8'>
            <p className='text-3xl'>15,000+</p>
            <p className='text-3xl'>Events booked</p>
          </div>
          <div className='w-full h-1/4  bg-black rounded-3xl text-white flex items-center justify-center gap-2 '>
            <Sparkle className='size-8' />
            <p className='font-semibold text-2xl'>Artist Unite</p>
          </div>
        </div>
        <div
          className='w-full h-[17rem] bg-red-50 rounded-3xl relative'
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(80%)"
          }}
        >
          <p className="absolute text-white font-bold text-4xl bottom-8 left-8">Concerts</p>
        </div>
        <div className='w-full h-44 bg-gray-300 rounded-3xl flex flex-col justify-center items-center'>
          <p className='font-semibold text-3xl'>2,500+</p>
          <p className='font-semibold text-3xl'>Active Artists</p>
        </div>
        <div
          className='w-full h-[17rem] bg-red-50 rounded-3xl relative'
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1625355/pexels-photo-1625355.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(80%)"
          }}
        >
          <p className="absolute text-white font-bold text-3xl top-6 left-8">Singers</p>
        </div>
        <div className='w-full h-96 flex flex-col gap-2'>
          <div className='w-full h-3/4 bg-primary rounded-3xl flex p-8'>
            <p className="text-3xl">Available for over 25+ Countries</p>
          </div>
          <div className='w-full h-1/4  bg-green-900 rounded-3xl text-white flex items-center justify-center gap-2 '>
            <NotebookPen className='size-8' />
            <p className='font-semibold text-2xl'>Plan Events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
