'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className='w-full flex items-center relative justify-between'>
        <div className={`flex items-center transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_white%20%281%29-Zhed6jkweIimNS4Hc85RhOrD7VZE9q.png"
                alt="Moon Productions"
                width={200}
                height={50}
                className="object-contain"
            />
        </div>
        <div className={`flex items-center gap-10 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <ul className='flex gap-10 text-gray-400'>
                <li><a href="#home" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#works" className="hover:text-white transition-colors">Proyectos</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
            <a href="#contact" className='text-xl font-semibold hover:text-gray-300 transition-colors'>Hablemos</a>
        </div>
        
    </header>
  )
}

export default Header
