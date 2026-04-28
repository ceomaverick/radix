/**
 * @component ContactInfo
 * @page Contact (/app/contact/page.tsx)
 * @description Displays corporate contact information including address, phone, and email.
 * @shared false
 * @props none
 */

'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4 uppercase">
        GET IN TOUCH
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        At Radix, collaboration is at the heart of every interaction. It influences the way we respond, behave and communicate. Customer dialogue and feedback is taken very seriously.
      </p>

      <div className="space-y-8">
        <div className="flex gap-4 items-start">
          <div className="shrink-0 bg-primary/10 p-3 rounded-lg">
            <MapPinIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-secondary text-lg">Address</h3>
            <p className="text-gray-600">5/503, Kenwood Park, Behind Akash Nidhi Complex,<br />Shivar Garden, Mira Road (East),<br />Mumbai - 401107</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="shrink-0 bg-primary/10 p-3 rounded-lg">
            <PhoneIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-secondary text-lg">Phone</h3>
            <p className="text-gray-600">+91 22 65346466</p>
            <p className="text-gray-600">+91 9559903333</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="shrink-0 bg-primary/10 p-3 rounded-lg">
            <EnvelopeIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-secondary text-lg">Email</h3>
            <p className="text-gray-600">info@radixinfra.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
