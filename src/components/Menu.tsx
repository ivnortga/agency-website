'use client'
import React from 'react';
import CanvasMenu from './CanvasMenu';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className='flex justify-between items-center w-full fixed z-50 px-12 py-6'>
        <div className='flex items-center text-white text-xl font-semibold pt-9'>
            <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_white%20%281%29-Zhed6jkweIimNS4Hc85RhOrD7VZE9q.png"
                alt="Moon Productions"
                width={200}
                height={50}
                className="object-contain"
            />
        </div>
        <>
            <CanvasMenu />
        </>
    </div>
  )
}

export default Menu
