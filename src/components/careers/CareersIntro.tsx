/**
 * @component CareersIntro
 * @page Careers (/app/careers/page.tsx)
 * @description Header and introductory text for the careers page.
 * @shared false
 * @props none
 */

'use client';

import { motion } from 'framer-motion';

export default function CareersIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <span className="text-primary font-bold uppercase tracking-widest text-sm border-l-4 border-primary pl-4 mb-4 block">
        Growth Opportunities
      </span>
      <h2 className="text-4xl font-bold text-dark mb-8 uppercase tracking-tight">
        Join the Radix Force
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed max-w-3xl border-l-2 border-gray-100 pl-8">
        Being a rapidly growing organization, we understand the aspirations of talented professionals. We seek individuals who deliver their best every day. In return, we offer a challenging and highly rewarding career.
      </p>
    </motion.div>
  );
}
