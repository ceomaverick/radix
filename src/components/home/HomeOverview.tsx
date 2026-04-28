/**
 * @component HomeOverview
 * @page Home (/app/page.tsx)
 * @description Detailed introduction to Radix Infra as a turnkey infrastructure company with an image.
 * @shared false
 * @props none
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';

export default function HomeOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-dark mb-6 border-l-4 border-secondary pl-4">
              RADIX: A TURN-KEY INFRASTRUCTURE COMPANY.
            </h2>
            <div className="prose prose-slate text-gray-600">
              <p className="mb-6">
                Radix Infra is a premier turnkey infrastructure firm specializing in earthworks, RCC projects, hard landscaping, and road construction. Founded in 1998 as Unicons and incorporated as Radix Infra Pvt Ltd in 2009, we deliver complex, high-scale projects through cost-effective solutions and uncompromising quality standards.
              </p>
              <p className="mb-8">
                Renowned for meeting and often exceeding timelines, our reputation is built on meticulous planning and an exhaustive focus on detail. We are committed to excellence, ensuring every project is delivered on schedule without exception.
              </p>
              <Button href="/about/profile" variant="primary">
                KNOW MORE
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <Image
              src="/images/home/radix-turnkey-company.webp"
              alt="Radix Infra industrial construction site with heavy machinery"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
