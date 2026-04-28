/**
 * @component EthicsValuesGrid
 * @page Ethics (/app/about/ethics/page.tsx)
 * @description A responsive grid of testimonial cards. Content passed via props.
 * @shared false
 * @props none
 */

'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, UserGroupIcon, ScaleIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

const values = [
  {
    title: 'Integrity',
    description: 'We promote integrity, openness, trust, honesty in our business. Everything we do must stand the test of public scrutiny.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Accountability & Transparency',
    description: 'Transparency and disclosures about accounts as well as other important issues are communicated to stakeholders in a truthful and prompt manner.',
    icon: PresentationChartLineIcon,
  },
  {
    title: 'Fair Business Practice',
    description: "We compete strongly but fairly: with performance over politics. We're responsible and sensitive to the people and environments in which we work.",
    icon: ScaleIcon,
  },
  {
    title: 'Respect for the Individual',
    description: "We show respect, compassion and humanity for our colleagues and customers, treating people as we would like to be treated ourselves.",
    icon: UserGroupIcon,
  },
];

export default function EthicsValuesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {values.map((value, index) => (
        <motion.div 
          key={value.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 p-10 bg-gray-50 border-t-4 border-primary group hover:bg-white hover:shadow-2xl transition-all duration-300"
        >
          <div className="shrink-0 bg-white w-16 h-16 flex items-center justify-center shadow-sm border border-gray-100 group-hover:bg-primary transition-colors">
            <value.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-dark mb-4 uppercase tracking-tight">{value.title}</h3>
            <p className="text-gray-600 leading-relaxed font-medium">{value.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
