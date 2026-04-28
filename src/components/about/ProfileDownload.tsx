/**
 * @component ProfileDownload
 * @page Profile (/app/about/profile/page.tsx)
 * @description Section for downloading the corporate profile PDF.
 * @shared false
 * @props none
 */

'use client';

import Button from '@/components/shared/Button';
import { CheckBadgeIcon, DocumentArrowDownIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function ProfileDownload() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 border-l-4 border-primary pl-8 py-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <DocumentArrowDownIcon className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Resources</span>
            </div>
            <h3 className="text-2xl font-black text-dark uppercase tracking-tight">
              Corporate Profile <span className="text-gray-300 mx-2">|</span> 2024
            </h3>
            <p className="text-gray-500 text-sm mt-1 max-w-xl">
              Technical specifications, financial standing, and project track record. PDF Format (4.2MB).
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
              <span className="flex items-center gap-1"><CheckBadgeIcon className="h-3 w-3" /> ISO Certified</span>
              <span className="flex items-center gap-1"><CheckBadgeIcon className="h-3 w-3" /> Safety Audited</span>
            </div>
            <Button 
              href="/Radix-Corporate-Profile.pdf" 
              variant="primary" 
              className="flex items-center gap-3 px-8 py-4 rounded-none font-bold text-sm"
            >
              DOWNLOAD PROFILE
              <ArrowDownTrayIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
