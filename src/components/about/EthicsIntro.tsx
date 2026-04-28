/**
 * @component EthicsIntro
 * @page Ethics (/app/about/ethics/page.tsx)
 * @description Introduction to the corporate code of ethics with an image.
 * @shared false
 * @props none
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function EthicsIntro() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-primary font-bold uppercase tracking-widest text-sm border-l-4 border-primary pl-4 mb-4 block">
          Corporate Governance
        </span>
        <h2 className="text-4xl font-bold text-dark mb-8 uppercase tracking-tight">
          Our Code of Ethics
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          We are committed to maintaining world-class standards of business integrity everywhere we operate. Our code of ethics is more than a collection of abstract ideas; it’s our longstanding commitment to ethical behavior.
        </p>
      </motion.div>
      
      <div className="relative rounded-none overflow-hidden shadow-2xl h-96 border-b-8 border-primary grayscale hover:grayscale-0 transition-all duration-700">
        <Image
          src="/images/about/ethics.webp"
          alt="Radix Ethics and Governance"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors"></div>
      </div>
    </div>
  );
}
