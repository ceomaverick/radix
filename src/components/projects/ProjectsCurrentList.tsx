/**
 * @component ProjectsCurrentList
 * @page Current Projects (/app/projects/current/page.tsx)
 * @description Displays a list of ongoing projects with alternating image/text grid layouts.
 * @shared false
 * @props projects: Project[]
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Project {
  slug: string;
  title: string;
  location: string;
  client: string;
  description: string;
  image: string;
}

interface ProjectsCurrentListProps {
  projects: Project[];
}

export default function ProjectsCurrentList({ projects }: ProjectsCurrentListProps) {
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
              Ongoing Works
            </span>
            <h3 className="text-4xl font-bold text-dark mb-6 uppercase tracking-tight">
              Current Infrastructure Landmarks
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are currently executing several high-impact turnkey projects across India, setting new benchmarks in engineering precision and operational efficiency.
            </p>
          </motion.div>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-video overflow-hidden border-b-8 border-primary shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-primary"></div>
                  <span className="text-primary font-bold uppercase tracking-widest text-xs">{project.location}</span>
                </div>
                <h3 className="text-3xl font-bold text-dark uppercase mb-4 tracking-tight">{project.title}</h3>
                <div className="mb-6">
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-1">Client</span>
                  <span className="text-dark font-bold uppercase text-sm">{project.client}</span>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <Link 
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
                >
                  View Project Details
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
