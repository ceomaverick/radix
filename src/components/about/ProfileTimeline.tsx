/**
 * @component ProfileTimeline
 * @page Profile (/app/about/profile/page.tsx)
 * @description Historical timeline of the company milestones with a background image.
 * @shared false
 * @props milestones: { year: string, title: string, description: string }[]
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileTimelineProps {
  milestones: {
    year: string;
    title: string;
    description: string;
  }[];
}

export default function ProfileTimeline({ milestones }: ProfileTimelineProps) {
  return (
    <section className="py-20 relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/home/hero/new-flyover.webp" 
          alt="Infrastructure background" 
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f3a3a]/95"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white uppercase tracking-wider">Our Journey</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        <div className="relative">
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 hidden lg:block"></div>
           <div className="space-y-12">
              {milestones.map((item, idx) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 lg:text-right w-full">
                     <div className={idx % 2 === 0 ? '' : 'lg:text-left'}>
                      <span className="text-4xl font-black text-primary/50 block mb-2">{item.year}</span>
                      <h4 className="text-2xl font-bold mb-3 uppercase">{item.title}</h4>
                      <p className="text-gray-300 max-w-md mx-auto lg:mx-0 font-medium">{item.description}</p>
                     </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary relative z-10 hidden lg:block shadow-[0_0_15px_rgba(47,155,155,1)]"></div>
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
