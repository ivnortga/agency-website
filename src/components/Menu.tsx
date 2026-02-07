'use client'
import React from 'react';
import CanvasMenu from './CanvasMenu';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className='flex justify-between items-center w-full fixed z-50 px-12 py-6'>
        <div className='flex items-center gap-3 text-white text-xl font-semibold pt-9'>
            <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moon_productions_log-SplLyEpl617gS1Wj6IfUHDnE1IWeWw.png"
                alt="Moon Productions"
                width={40}
                height={40}
                className="object-contain"
            />
            <span>Moon Productions</span>
        </div>
        <>
            <CanvasMenu />
        </>
    </div>
  )
}

export default Menu
