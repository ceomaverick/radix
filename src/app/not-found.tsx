'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLongLeftIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Industrial Icon Accent */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gray-50 flex items-center justify-center border-l-4 border-primary relative">
               <WrenchScrewdriverIcon className="h-10 w-10 text-primary" />
               <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20"></div>
            </div>
          </div>

          {/* 404 Typography */}
          <h1 className="text-[120px] font-black text-dark/5 leading-none mb-4 select-none">
            404
          </h1>
          
          <div className="relative -mt-20 mb-12">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              System Error
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-dark uppercase tracking-tight mb-6">
              Path Not Found
            </h2>
            <p className="text-gray-500 font-medium max-w-sm mx-auto leading-relaxed">
              The requested infrastructure coordinate is not part of our current operational blueprint.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/" 
              className="group flex items-center gap-3 text-dark font-black uppercase tracking-widest text-xs hover:text-primary transition-colors"
            >
              <ArrowLongLeftIcon className="h-5 w-5 group-hover:-translate-x-2 transition-transform" />
              Back to Base
            </Link>
            <div className="h-px w-12 bg-gray-100 hidden sm:block"></div>
            <Link 
              href="/projects" 
              className="text-dark font-black uppercase tracking-widest text-xs hover:text-primary transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </motion.div>
        
        {/* Subtle background structural lines */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02] -z-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-dark"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-dark"></div>
        </div>
      </div>
    </div>
  );
}
