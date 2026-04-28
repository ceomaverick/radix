/**
 * @component ProfileAdvantage
 * @page Profile (/app/about/profile/page.tsx)
 * @description The Radix Advantage section showcasing core values like Timely Delivery and Quality.
 * @shared false
 * @props none
 */

'use client';

import { ClockIcon, CheckBadgeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function ProfileAdvantage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-dark mb-16">The Radix Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <ClockIcon className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold">Timely Delivery</h3>
            <p className="text-gray-600 italic">"Delivering projects on time and often before the deadline is our core DNA."</p>
          </div>
          <div className="space-y-4">
            <CheckBadgeIcon className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold">Uncompromising Quality</h3>
            <p className="text-gray-600 italic">"We focus on the smallest details to ensure the highest international standards."</p>
          </div>
          <div className="space-y-4">
            <ShieldCheckIcon className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-xl font-bold">Operational Safety</h3>
            <p className="text-gray-600 italic">"Protecting our workforce and the environment is our non-negotiable priority."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
