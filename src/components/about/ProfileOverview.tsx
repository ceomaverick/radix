/**
 * @component ProfileOverview
 * @page Profile (/app/about/profile/page.tsx)
 * @description Corporate overview with text and a grid of project images.
 * @shared false
 * @props none
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfileOverview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm border-l-4 border-primary pl-4 mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl font-bold text-dark mb-8 leading-tight">
              Shaping the Infrastructure <br /> of Tomorrow, Today.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Radix Infra Projects Pvt. Ltd. is a leading turnkey infrastructure firm in India. We pride ourselves on delivering complex engineering solutions across diverse sectors including Earthworks, RCC, and Road Construction.
              </p>
              <p>
                Our journey, which began in 1998, is defined by an unwavering commitment to quality and a culture of relentless innovation. We don't just build structures; we build the foundational frameworks that power the nation's progress.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg">
                <Image src="/images/projects/koshi/1.webp" alt="Koshi Canal Project" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative h-48 w-full overflow-hidden rounded-2xl shadow-lg">
                <Image src="/images/projects/ntpc/ntpc1.webp" alt="NTPC Nallah Diversion" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-48 w-full overflow-hidden rounded-2xl shadow-lg">
                <Image src="/images/projects/koshi/2.webp" alt="C.C. Road Construction" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg">
                <Image src="/images/projects/ntpc/ntpc2.webp" alt="NTPC Flyash Project" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
