"use client";
import React from "react";
import { Button } from "../ui/button";
import { NotebookPen, Sparkle } from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className='h-fit md:h-[60vh] lg:h-[90vh] flex flex-col justify-between relative'>
      <div>
        <h1 className='w-full lg:w-1/2 m-auto text-5xl md:text-6xl font-semibold text-center mt-10'>
          Find the Perfect Artist for Every Occasion
        </h1>
        <p className='w-full lg:w-3/6 m-auto text-center mt-10 text-xl'>
          Whether you're organizing a corporate event or a private party, find
          verified artists and manage your bookings — all in one place.
        </p>
        <div className='mt-10 flex gap-2 justify-center'>
          <Button
            onClick={() => router.push("/explore")}
            className='bg-black dark:text-white dark:border dark:border-white rounded-full text-lg p-5 dark:hover:bg-gray-700'
          >
            Explore
          </Button>
          <Button
            onClick={() => router.push("/onboarding")}
            className='bg-stone-200 text-black  text-lg p-5 hover:bg-stone-300 rounded-full'
          >
            Join as artist
          </Button>
        </div>
      </div>
      <div className='md:absolute md:bottom-5 lg:bottom-0 w-[98%] mt-10 md:mt-0 flex flex-col md:flex-row items-end gap-2'>
        <div className='w-full md:h-96 flex flex-row md:flex-col gap-2'>
          <div className='w-full h-fit md:h-3/4 bg-secondary rounded-3xl flex flex-col items-start justify-center md:justify-start p-6 md:p-8'>
            <p className='text-lg md:text-xl lg:text-3xl'>15,000+</p>
            <p className='text-lg md:text-xl lg:text-3xl'>Events booked</p>
          </div>
          <div className='w-full h-fit md:h-1/4  bg-black rounded-3xl text-white flex items-center justify-center gap-2 p-4'>
            <Sparkle className='size-8' />
            <p className='font-semibold text-xl lg:text-2xl '>Artist Unite</p>
          </div>
        </div>
        <div
          className='w-full h-[17rem] bg-red-50 rounded-3xl relative'
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(80%)",
          }}
        >
          <p className='absolute text-white font-bold text-4xl lg:text-4xl bottom-8 left-8'>
            Concerts
          </p>
        </div>
        <div className='w-full h-36 md:h-44 bg-gray-300 dark:bg-gray-600 rounded-3xl flex flex-col justify-center items-center'>
          <p className='font-semibold text-xl lg:text-3xl'>2,500+</p>
          <p className='font-semibold text-xl lg:text-3xl'>Active Artists</p>
        </div>
        <div
          className='w-full h-[17rem] bg-red-50 rounded-3xl relative'
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1625355/pexels-photo-1625355.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(80%)",
          }}
        >
          <p className='absolute text-white font-bold text-4xl lg:text-3xl top-6 left-8'>
            Singers
          </p>
        </div>
        <div className='w-full md:h-96 flex flex-row md:flex-col gap-2'>
          <div className='w-full h-fit md:h-3/4 bg-primary rounded-3xl flex p-8'>
            <p className='text-xl lg:text-3xl dark:text-black'>
              Available for over 25+ Countries
            </p>
          </div>
          <div className='w-full md:h-1/4  bg-green-900 rounded-3xl text-white flex items-center justify-center gap-2 p-3'>
            <NotebookPen className='size-5 md:size-6 lg:size-8' />
            <p className='font-semibold text-lg md:text-xl lg:text-2xl'>Plan Events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
