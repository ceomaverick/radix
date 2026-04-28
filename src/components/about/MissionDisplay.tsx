/**
 * @component MissionDisplay
 * @page Vision (/app/about/vision/page.tsx)
 * @description Outlines the corporate mission intro and a grid of the five core mission pillars.
 * @shared false
 * @props missionPoints: string[]
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MissionDisplayProps {
  missionPoints: string[];
}

export default function MissionDisplay({ missionPoints }: MissionDisplayProps) {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-1">
            <span className="text-primary font-bold uppercase tracking-widest text-sm border-l-4 border-primary pl-4 mb-4 block">
              The Path
            </span>
            <h2 className="text-4xl font-bold text-dark mb-8 uppercase tracking-tight">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              To make our vision come true, we have a definitive strategy in place: a combination of short- and long-term goals to be achieved with absolute faith.
            </p>
            <div className="relative rounded-none overflow-hidden shadow-xl grayscale h-64">
              <Image
                src="/images/shared/team-culture.webp"
                alt="Radix Team Culture"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 bg-white border-t-4 border-primary shadow-sm hover:shadow-xl transition-all duration-300 ${index === 4 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary font-black text-xs uppercase tracking-widest">Pillar 0{index + 1}</span>
                    <div className="h-px flex-1 bg-gray-100"></div>
                  </div>
                  <p className="text-gray-700 font-bold uppercase text-sm tracking-tight leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
