/**
 * @component CareersOpenings
 * @page Careers (/app/careers/page.tsx)
 * @description Accordion list of current job openings with details and application call-to-action.
 * @shared false
 * @props jobs: Job[]
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, BriefcaseIcon, AcademicCapIcon, ClockIcon } from '@heroicons/react/24/outline';

interface Job {
  id: string;
  date: string;
  title: string;
  location: string;
  experience: string;
  education: string;
  description: string[];
}

interface CareersOpeningsProps {
  jobs: Job[];
}

export default function CareersOpenings({ jobs }: CareersOpeningsProps) {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <BriefcaseIcon className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-bold text-dark uppercase tracking-tight">Current Openings</h3>
      </div>
      
      {jobs.map((job) => (
        <div key={job.id} className="border-t-4 border-primary bg-gray-50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <button
            onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
            className={`w-full flex items-center justify-between p-8 bg-white hover:bg-gray-50 transition-colors ${expandedJob === job.id ? 'bg-gray-50' : ''}`}
          >
            <div className="flex gap-10 items-center">
              <span className="text-primary/30 font-black text-3xl italic group-hover:text-primary transition-colors">{job.id}</span>
              <div className="text-left">
                <h4 className="text-xl font-bold text-dark uppercase tracking-tight mb-1">{job.title}</h4>
                <div className="flex flex-wrap gap-4">
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary/20"></span> {job.location}
                   </span>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary/20"></span> Posted: {job.date}
                   </span>
                </div>
              </div>
            </div>
            <div className={`p-2 rounded-full border border-gray-100 transition-transform duration-300 ${expandedJob === job.id ? 'rotate-180 text-primary border-primary/20 bg-primary/5' : 'text-gray-400'}`}>
              <ChevronDownIcon className="h-5 w-5" />
            </div>
          </button>
          
          {expandedJob === job.id && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="p-8 md:p-12 bg-gray-50 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="flex gap-4">
                  <ClockIcon className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Required Experience</p>
                    <p className="text-dark font-bold uppercase text-sm tracking-tight">{job.experience}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <AcademicCapIcon className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Education</p>
                    <p className="text-dark font-bold uppercase text-sm tracking-tight">{job.education}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-primary"></div>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Technical Scope</p>
                </div>
                <ul className="space-y-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-4 font-medium">
                      <span className="text-primary font-bold">0{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 bg-dark text-white border-l-8 border-primary relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h5 className="font-bold uppercase tracking-tight text-lg mb-1">Ready to apply?</h5>
                    <p className="text-gray-400 text-xs uppercase tracking-widest">Send your professional resume to our HR desk</p>
                  </div>
                  <a 
                    href="mailto:careers@radixinfra.com" 
                    className="bg-primary text-white font-black px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-dark transition-all shadow-xl"
                  >
                    careers@radixinfra.com
                  </a>
                </div>
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
