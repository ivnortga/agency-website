import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='w-full flex items-center relative justify-between'>
        <div className='flex items-center'>
            <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_white%20%281%29-Zhed6jkweIimNS4Hc85RhOrD7VZE9q.png"
                alt="Moon Productions"
                width={200}
                height={50}
                className="object-contain"
            />
        </div>
        <div className='flex items-center gap-10'>
            <ul className='flex gap-10 text-gray-400'>
                <li>Inicio</li>
                <li>Sobre Nosotros</li>
                <li>Precios</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
            <span className='text-xl font-semibold'>Hablemos</span>
        </div>
        
    </header>
  )
}

export default Header
