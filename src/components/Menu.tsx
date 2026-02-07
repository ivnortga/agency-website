'use client'
import React, { useState, useEffect } from 'react';
import CanvasMenu from './CanvasMenu';
import Image from 'next/image';

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='flex justify-between items-center w-full fixed z-50 px-12 py-6'>
        <div className={`transition-opacity duration-500 pt-9 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_white%20%281%29-Zhed6jkweIimNS4Hc85RhOrD7VZE9q.png"
                alt="Moon Productions"
                width={200}
                height={50}
                className="object-contain"
            />
        </div>
        <CanvasMenu />
    </div>
  )
}

export default Menu
