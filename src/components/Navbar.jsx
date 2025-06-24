"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/lib/navLinks";

const Navbar = () => {
  const path = usePathname();

  return (
    <header className='p-2 px-4 flex justify-between items-center'>
      <Link href={"/"} className='flex gap-1 items-center'>
        <p className='bg-secondary w-fit py-1 px-2.5 rounded-full font-extrabold'>
          A
        </p>
        <p className='text-secondary font-extrabold text-xl'>Artistly</p>
      </Link>
      <div className='flex items-center gap-4'>
        <div className='flex gap-4'>
          {NavLinks.map((item) => (
            <Link 
            key={item.label} 
            href={item.link} 
            className={path === item.link ? 'font-bold text-secondary' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
