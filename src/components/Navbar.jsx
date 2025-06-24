import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <header className='p-2 px-4 flex justify-between items-center'>
      <Link href={"/"} className='flex gap-1 items-center'>
        <p className='bg-secondary w-fit py-1 px-2.5 rounded-full font-extrabold'>
          A
        </p>
        <p className='text-secondary font-extrabold text-xl'>Artistly</p>
      </Link>
      <div className="flex items-center gap-4">
        <div>
          <Link href={'/explore'}>Explore</Link>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
