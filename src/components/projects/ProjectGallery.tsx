/**
 * @component ProjectGallery
 * @page Project Detail (/app/projects/[slug]/page.tsx)
 * @description A responsive grid displaying images from the project gallery.
 * @shared false
 * @props project: Project
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from '@/components/shared/Lightbox';

interface ProjectGalleryProps {
  project: {
    title: string;
    gallery: string[];
  };
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-secondary mb-8 border-b-2 border-primary pb-2 inline-block">PROJECT GALLERY</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {project.gallery.map((img: string, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="relative h-48 rounded-lg overflow-hidden group cursor-pointer shadow-md"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={img}
              alt={`${project.title} gallery ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white text-xs font-bold uppercase tracking-widest border border-white px-3 py-1 bg-black/20 backdrop-blur-sm">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        images={project.gallery}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
