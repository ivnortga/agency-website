'use client'
import React from 'react';
import CanvasMenu from './CanvasMenu';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className='flex justify-between items-center w-full fixed z-50 px-12 py-6'>
        <div className='flex items-center text-white text-xl font-semibold pt-9'>
            <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J0BZCv2vqmwQiV4k0CGTYdmTlHyqUZ.png"
                alt="Moon Productions"
                width={180}
                height={60}
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
