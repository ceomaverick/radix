/**
 * @component VisionDisplay
 * @page Vision (/app/about/vision/page.tsx)
 * @description Displays the corporate vision statement with its introduction.
 * @shared false
 * @props none
 */

'use client';

import { motion } from 'framer-motion';

export default function VisionDisplay() {
  return (
    <section className="py-24 border-b border-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm border-l-4 border-primary pl-4 mb-4 block">
                The Core Goal
              </span>
              <h2 className="text-4xl font-bold text-dark uppercase tracking-tight">
                Our Vision
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-primary leading-tight uppercase italic border-l-2 border-gray-100 pl-12"
            >
              "To emerge as a world leader in the infrastructure domain widely recognized for Value, Innovation and Landmarks with motivated and committed team."
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
