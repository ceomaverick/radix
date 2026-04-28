/**
 * @component HomeQuickLinks
 * @page Home (/app/page.tsx)
 * @description A 3-column grid providing quick links to Vision, Team, and News & Events.
 * @shared false
 * @props none
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeQuickLinks() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-50 rounded-xl border border-gray-100 group hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary"></span> The Vision
            </h3>
            <p className="text-primary font-bold mb-2 uppercase text-sm tracking-wide">Born to Grow!</p>
            <p className="text-gray-600 mb-6 italic">
              "To emerge as a world leader in the infrastructure domain widely recognized for Value, Innovation and Landmarks with a motivated and committed team."
            </p>
            <Link href="/about/vision" className="text-sm font-bold text-primary hover:text-secondary transition-colors uppercase">KNOW MORE</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-50 rounded-xl border border-gray-100 group hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary"></span> The Team
            </h3>
            <p className="text-primary font-bold mb-2 uppercase text-sm tracking-wide">Meet team Radix</p>
            <p className="text-gray-600 mb-6">
              Professionals with decades of experience in various fields. Their passion and entrepreneurial spirit are enviable and inspire confidence among employees and clients.
            </p>
            <Link href="/about/team" className="text-sm font-bold text-primary hover:text-secondary transition-colors uppercase">KNOW MORE</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-50 rounded-xl border border-gray-100 group hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary"></span> News & Events
            </h3>
            <p className="text-gray-400 text-xs mb-2 font-mono">Date: 28.05.2012</p>
            <p className="text-gray-600 mb-6">
              Radix Infra has received a work order for construction of boundary wall of Welspun Thermal Power project at Anup Pur, M.P.
            </p>
            <Link href="#" className="text-sm font-bold text-primary hover:text-secondary transition-colors uppercase">KNOW MORE</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
