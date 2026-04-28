/**
 * @component ContactMap
 * @page Contact (/app/contact/page.tsx)
 * @description Placeholder for Google Maps integration on the contact page.
 * @shared false
 * @props none
 */

'use client';

export default function ContactMap() {
  return (
    <section className="h-96 bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
       <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 font-semibold uppercase tracking-widest">Google Maps Integration</p>
       </div>
    </section>
  );
}
