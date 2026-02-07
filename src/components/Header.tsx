import React from 'react'
const Header = () => {
  return (
    <header className='w-full flex items-center relative justify-between'>
        <div className='flex items-center gap-2'>
            <span className='text-2xl'>🌙</span>
            <span className='text-2xl font-bold'>Moon Productions</span>
        </div>
        <div className='flex items-center gap-10'>
            <ul className='flex gap-10 text-gray-400'>
                <li>Inicio</li>
                <li>Precios</li>
                <li>Portfolio</li>
                <li>Contacto</li>
            </ul>
            <span className='text-xl font-semibold'>Hablemos</span>
        </div>
        
    </header>
  )
}

export default Header
