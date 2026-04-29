/**
 * @component CareersCulture
 * @page Careers (/app/careers/page.tsx)
 * @description Sidebar displaying the professional ecosystem and work culture of the company.
 * @shared false
 * @props none
 */

'use client';

import Image from 'next/image';

const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiMzMzMiLz48L3N2Zz4=';

export default function CareersCulture() {
  return (
    <div className="bg-white border-2 border-gray-100 p-8 shadow-sm">
      <span className="text-primary font-bold uppercase tracking-widest text-[10px] border-l-4 border-primary pl-4 mb-4 block">
         Our Culture
      </span>
      <h3 className="text-2xl font-bold text-dark uppercase tracking-tight mb-6">
         Professional Ecosystem
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium">
        Radix reflects the highest standards of conduct. We focus on making our workplace stimulating, positive, and inclusive.
      </p>
      <div className="aspect-[4/5] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl mb-8">
        <Image
          src="/images/shared/team-culture.webp"
          alt="Radix Infra professional team ecosystem and work culture"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover"
        />
      </div>
      <blockquote className="border-l-2 border-primary pl-6 italic text-sm text-gray-400 leading-relaxed">      
        "Coming together is a beginning. Keeping together is progress. Working together is success."
        <span className="block mt-4 font-black text-dark uppercase tracking-widest text-[10px]">â€” Henry Ford</span>
      </blockquote>
    </div>
  );
}

