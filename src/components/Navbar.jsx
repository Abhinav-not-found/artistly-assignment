import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className='p-2 px-4'>
      <Link href={'/'} className='flex gap-1 items-center'>
        <p className='bg-secondary w-fit py-1 px-2.5 rounded-full font-extrabold'>
          A
        </p>
        <p className='text-secondary font-extrabold text-xl'>Artistly</p>
      </Link>
    </div>
  );
};

export default Navbar;
