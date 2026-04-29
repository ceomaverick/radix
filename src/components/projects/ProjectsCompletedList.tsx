/**
 * @component ProjectsCompletedList
 * @page Completed Projects (/app/projects/completed/page.tsx)
 * @description Displays a list of completed projects with alternating image/text grid layouts.
 * @shared false
 * @props projects: Project[]
 */

'use client';

import { motion } from 'framer-motion';
import { CheckBadgeIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from '@/components/shared/Lightbox';

interface Project {
  title: string;
  location: string;
  client: string;
  year: string;
  description: string;
  type: string;
  image: string;
}

interface ProjectsCompletedListProps {
  projects: Project[];
}

export default function ProjectsCompletedList({ projects }: ProjectsCompletedListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const allImages = projects.map(p => p.image);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm border-l-4 border-primary pl-4 mb-4 block">
              Track Record
            </span>
            <h3 className="text-4xl font-bold text-dark mb-6 uppercase tracking-tight">
              A Legacy of Quality Delivery
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our portfolio of completed projects stands as a testament to our commitment to quality, safety, and timely delivery across diverse engineering sectors.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div 
                  className="aspect-video overflow-hidden border-b-8 border-primary shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 relative group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white font-black px-4 py-2 text-sm shadow-xl z-10">
                    DELIVERED {project.year}
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <ArrowsPointingOutIcon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <CheckBadgeIcon className="h-5 w-5 text-primary" />
                  <span className="text-primary font-bold uppercase tracking-widest text-[10px]">{project.type}</span>
                  <span className="text-gray-300 mx-1">|</span>
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{project.location}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-dark uppercase mb-4 tracking-tight">{project.title}</h3>
                
                <div className="mb-8 border-l-2 border-gray-100 pl-6">
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest block mb-1">Client</span>
                  <span className="text-dark font-bold uppercase text-sm">{project.client}</span>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed italic">
                  "{project.description}"
                </p>
                
                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                  Project Successfully Completed
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        images={allImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNext={() => setCurrentIndex((prev) => (prev + 1) % allImages.length)}
        onPrev={() => setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
      />
    </section>
  );
}
