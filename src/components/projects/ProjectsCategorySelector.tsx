/**
 * @component ProjectsCategorySelector
 * @page Projects (/app/projects/page.tsx)
 * @description Two large interactive cards for selecting between current and completed project categories.
 * @shared false
 * @props none
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, BuildingOffice2Icon, CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function ProjectsCategorySelector() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm border-l-4 border-primary pl-4 mb-4 block">
              Infrastructure Excellence
            </span>
            <h2 className="text-5xl font-bold text-dark mb-8 uppercase tracking-tight">
              Our Work <span className="text-primary">&</span> Impact
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From complex earthworks to high-scale road construction, explore how Radix Infra is delivering critical infrastructure that powers the nation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href="/projects/current" className="block relative overflow-hidden bg-dark p-12 h-full border-b-8 border-primary transition-all duration-500 hover:pb-16">
              <div className="relative z-10">
                <BuildingOffice2Icon className="h-16 w-16 text-primary mb-8 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-4xl font-bold text-white uppercase tracking-tight mb-4">Current Projects</h3>
                <p className="text-gray-400 text-lg mb-8 max-w-sm">
                  Explore our ongoing high-impact turnkey projects across India's most challenging terrains.
                </p>
                <div className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm">
                  Explore ongoing works <ArrowRightIcon className="h-4 w-4" />
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href="/projects/completed" className="block relative overflow-hidden bg-gray-50 p-12 h-full border-b-8 border-primary transition-all duration-500 hover:pb-16 border border-gray-100">
              <div className="relative z-10">
                <CheckBadgeIcon className="h-16 w-16 text-primary mb-8 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-4xl font-bold text-dark uppercase tracking-tight mb-4">Completed Projects</h3>
                <p className="text-gray-600 text-lg mb-8 max-w-sm">
                  Browse our successful track record of projects delivered on time and beyond expectations.
                </p>
                <div className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm">
                  View project archive <ArrowRightIcon className="h-4 w-4" />
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-dark/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
