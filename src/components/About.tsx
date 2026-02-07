'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Ensure the animation plays only once
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
          setHasAnimated(false); // Reset the animation when scrolling up
        }
      },
      {
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className='relative flex flex-col w-full h-screen p-12 lg:p-24 justify-center items-center bg-black z-10'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className='flex z-50 flex-col w-full text-xl leading-[2] md:text-3xl max-w-4xl md:leading-[2]'
      >
        Bienvenido a Moon Productions, donde la creatividad audiovisual ilumina tu música. Somos una productora especializada en videoclips y visualizers para artistas emergentes y consolidados en Canarias. Con experiencia en la escena urbana y trap, transformamos tu visión artística en contenido visual impactante que conecta con tu audiencia. Desde la preproducción hasta la postproducción, cada proyecto es una experiencia cinematográfica única diseñada para elevar tu carrera musical.
      </motion.div>
    </div>
  );
};

export default About;
