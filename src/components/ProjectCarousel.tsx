/**
 * @component ProjectCarousel
 * @page Home (/app/page.tsx)
 * @description Responsive grid displaying current project icons and brief info.
 * @shared true
 * @props none
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Koshi Canal Project',
    info: 'The removal of debris and silt in and around the dam area that extends upto 60 Sq.km',
    image: '/images/projects/icons/truck.webp',
    href: '/projects/koshi',
  },
  {
    name: 'Nallah Diversion for NTPC',
    info: "Construction on 3km Nallah to divert the waste water at NTPC's power plant located at Sonbhadra.",
    image: '/images/projects/icons/wheel.webp',
    href: '/projects/sonbhadra',
  },
  {
    name: 'Area Leveling for Reliance',
    info: "Area Grading for Reliance's Power at Chitrangi.",
    image: '/images/projects/icons/transit.webp',
    href: '/projects/chitrangi',
  },
  {
    name: 'Area Leveling for Sasan',
    info: "Area Grading for Reliance's 4,000 MW UMPP at Sasan.",
    image: '/images/projects/icons/sasanthumb.webp',
    href: '/projects/sasan',
  },
];

export default function ProjectCarousel() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between mb-8 border-b-2 border-primary pb-2">
          <h2 className="text-2xl font-bold text-dark">CURRENT PROJECTS</h2>
          <Link href="/projects" className="text-sm font-semibold text-primary hover:text-secondary transition-colors uppercase">View All Projects</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md group"
            >
              <Link href={project.href}>
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{project.info}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
