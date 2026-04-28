/**
 * @component ProjectGallery
 * @page Project Detail (/app/projects/[slug]/page.tsx)
 * @description A responsive grid displaying images from the project gallery.
 * @shared false
 * @props project: any
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectGalleryProps {
  project: {
    title: string;
    gallery: string[];
  };
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
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
          >
            <Image
              src={img}
              alt={`${project.title} gallery ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
