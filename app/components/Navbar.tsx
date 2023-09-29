"use client";
import Image from 'next/image';
import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-5 shadow-sm border-b-[1px]'>
        <Image src='/logo.png' alt='logo' width={100} height={100}/>
        <div className="hidden md:flex gap-5">
            <h2 className="capitalize hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-full hover:text-white">home</h2>
            <h2 className="capitalize hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-full hover:text-white">history</h2>
            <h2 className="capitalize hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-full hover:text-white">contact us</h2>
        </div>
    </div>
  )
}

export default Navbar