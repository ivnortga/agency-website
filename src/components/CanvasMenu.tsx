'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CanvasMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Precios', href: '#services' },
    { label: 'Proyectos', href: '#works' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className='relative z-[100] flex flex-col gap-2 p-4 cursor-pointer group'
        aria-label="Toggle menu"
      >
        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
      </button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className='fixed top-0 right-0 w-full h-screen bg-black z-[90] flex items-center justify-center'
          >
            <div className='container mx-auto px-12 grid md:grid-cols-2 gap-12 items-center'>
              {/* Menu Items */}
              <nav className='flex flex-col gap-8'>
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='text-5xl md:text-7xl font-bold text-white hover:text-gray-400 transition-colors duration-300'
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className='relative w-full h-[60vh] rounded-3xl overflow-hidden'
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0704-DChyzxcj0DLPQJXjfiTyL1ePrp1SGv.jpeg"
                  alt="Moon Productions - Behind the Scenes"
                  fill
                  className='object-cover'
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CanvasMenu;
