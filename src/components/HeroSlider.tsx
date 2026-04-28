/**
 * @component HeroSlider
 * @page Home (/app/page.tsx)
 * @description Animated hero slider featuring high-impact infrastructure project images and messaging.
 * @shared true
 * @props none
 */

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/images/home/hero/building-infra.webp',
    title: 'SHAPING 21ST CENTURY INFRASTRUCTURE',
    subtitle: 'Radix Infrastructure — born to grow.',
  },
  {
    image: '/images/home/hero/new-flyover.webp',
    title: 'GLOBAL STANDARDS, LOCAL EXPERTISE',
    subtitle: 'Driven by excellence at every level.',
  },
  {
    image: '/images/home/hero/new-dam.webp',
    title: 'COMPLETE END-TO-END SOLUTIONS',
    subtitle: 'Building bridges, flyovers, and dams.',
  },
  {
    image: '/images/home/hero/sealink.webp',
    title: 'PRECISION IN EVERY DEADLINE',
    subtitle: 'Meticulous planning, delivered ahead of schedule.',
  },
  {
    image: '/images/home/hero/construction-site.webp',
    title: 'FROM CONTRACTS TO MEGA PROJECTS',
    subtitle: 'We execute on demand. On time. On the money.',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[320px] lg:h-[420px] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 will-change-opacity"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase drop-shadow-lg will-change-transform"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="text-lg md:text-xl lg:text-2xl text-white font-semibold italic drop-shadow-md inline-block will-change-transform"
              >
                {slides[current].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === i ? 'bg-primary w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
