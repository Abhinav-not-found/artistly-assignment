import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className='h-[90vh] flex flex-col justify-between relative'>
      <div>
        <p className='w-1/2 m-auto text-6xl font-semibold text-center mt-10'>
          Find the Perfect Artist for Every Occasion
        </p>
        <p className='w-3/6 m-auto text-center mt-10 text-xl'>
          Whether you're organizing a corporate event or a private party, find
          verified artists and manage your bookings — all in one place.
        </p>
        <div className='mt-10 flex gap-2 justify-center'>
          <Button className='bg-black rounded-full text-lg p-5'>
            <p className="cursor-pointer">Explore</p>
          </Button>
          <Button className='bg-stone-200 text-black  text-lg p-5 hover:bg-stone-300 rounded-full'>
            Join as artist
          </Button>
        </div>
      </div>
      <div className='absolute bottom-0 w-[98%] flex items-end gap-2'>
        <div className='w-full h-96 flex flex-col gap-2'>
          <div className='w-full h-3/4 bg-red-50 rounded-3xl'></div>
          <div className='w-full h-1/4  bg-red-50 rounded-3xl'></div>
        </div>
        <div className='w-full h-68 bg-red-50 rounded-3xl'></div>
        <div className='w-full h-44 bg-red-50 rounded-3xl'></div>
        <div className='w-full h-60 bg-red-50 rounded-3xl'></div>
        <div className='w-full h-96 flex flex-col gap-2'>
          <div className='w-full h-3/4 bg-red-50 rounded-3xl'></div>
          <div className='w-full h-1/4  bg-red-50 rounded-3xl'></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
