import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className='bg-secondary w-full h-fit rounded-3xl p-10 flex flex-col justify-between'>
      <div className="flex justify-between items-start">
        <div>
          <Link href={"/"} className='flex gap-1 items-center'>
            <p className='bg-white text-secondary text-2xl w-fit py-1 px-3 rounded-full font-extrabold'>
              A
            </p>
            <p className='text-white font-extrabold text-3xl'>Artistly</p>
          </Link>
          <p className="mt-4 text-xl">Your one-stop platform for discovering and booking talent</p>
        </div>
        <div>
          <div className="capitalize text-xl flex flex-col gap-4">
            <p>instagram</p>
            <p>twitter</p>
            <Link href={'https://www.linkedin.com/in/abhinav-kumar-fullstack/'} target="_blank" className="cursor-pointer hover:underline">linkedIn</Link>
          </div>
        </div>
      </div>
      <div className="border border-x-0 border-b-0 border-t-white/20 pt-5 mt-10 flex justify-between">
        <p>© 2025 Copyright.Artistly</p>
        <p>Made with ❤️ by wAbhinav Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
