/**
 * @component ProfileVerticals
 * @page Profile (/app/about/profile/page.tsx)
 * @description Grid of core competencies/verticals.
 * @shared false
 * @props none
 */

'use client';

import { motion } from 'framer-motion';
import { 
  TruckIcon, 
  BuildingOffice2Icon, 
  WrenchScrewdriverIcon, 
  CheckBadgeIcon 
} from '@heroicons/react/24/outline';

const coreVerticals = [
  { name: 'Earthworks', icon: TruckIcon, description: 'Bulk excavation, site leveling, and large-scale land development.' },
  { name: 'RCC Projects', icon: BuildingOffice2Icon, description: 'Reinforced Concrete Construction for industrial and residential complexes.' },
  { name: 'Road Construction', icon: WrenchScrewdriverIcon, description: 'National highways, state roads, and complex urban infrastructure.' },
  { name: 'Hard Landscaping', icon: CheckBadgeIcon, description: 'Premium site finishing and aesthetic infrastructure development.' },
];

export default function ProfileVerticals() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">Core Competencies</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreVerticals.map((vertical, idx) => (
            <motion.div
              key={vertical.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <vertical.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{vertical.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{vertical.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
