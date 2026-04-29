/**
 * @component TeamManagementGrid
 * @page Team (/app/about/team/page.tsx)
 * @description Displays a grid of management team members with their roles and descriptions.
 * @shared false
 * @props team: { name: string, role: string, image: string, description: string }[]
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48L3N2Zz4=';

interface TeamManagementGridProps {
  team: {
    name: string;
    role: string;
    image: string;
    description: string;
  }[];
}

export default function TeamManagementGrid({ team }: TeamManagementGridProps) {
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
              Leadership
            </span>
            <h3 className="text-4xl font-bold text-dark mb-6 uppercase tracking-tight">
              The Visionary Management Team
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our rapid growth is driven by the strategic vision of our core management professionals, who bring decades of cross-disciplinary expertise to Radix Infra.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 bg-gray-50 p-8 rounded-none border-t-4 border-primary hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={208}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"    
                />
              </div>
              <div className="flex-1">
                <p className="text-primary font-bold uppercase tracking-wider text-xs mb-2">
                  {member.role}
                </p>
                <h4 className="text-2xl font-bold text-dark uppercase mb-4 tracking-tight">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

