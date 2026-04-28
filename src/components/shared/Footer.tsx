/**
 * @component Footer
 * @page Global
 * @description Main site footer containing navigation links, contact info, and social media links.
 * @shared true
 * @props none
 */

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  about: [
    { name: 'Profile', href: '/about/profile' },
    { name: 'Key People', href: '/about/team' },
    { name: 'Ethics', href: '/about/ethics' },
    { name: 'Vision & Mission', href: '/about/vision' },
  ],
  currentProjects: [
    { name: 'Koshi Canal Project, Bihar', href: '/projects/koshi' },
    { name: 'Nallah Diversion, Sonbhadra', href: '/projects/sonbhadra' },
    { name: 'Area Leveling, Chitrangi', href: '/projects/chitrangi' },
    { name: 'Area Leveling, Sasan', href: '/projects/sasan' },
  ],
  completedProjects: [
    { name: 'NTPC Flyash Project', href: '/projects/flyash' },
    { name: 'C.C. Road at Rewa', href: '/projects/rewa' },
    { name: 'Banquet Hall at Chunabhatti', href: '/projects/banquet' },
    { name: 'Swadeshi Mill Premises', href: '/projects/swadeshi' },
  ],
  contact: [
    { name: 'Phone 1: +91 22 65346466', href: 'tel:+912265346466' },
    { name: 'Fax: +91 22 67254800', href: '#' },
    { name: 'Email: info@radixinfra.com', href: 'mailto:info@radixinfra.com' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: '/images/shared/icons/facebook.webp' },
    { name: 'Linkedin', href: '#', icon: '/images/shared/icons/linkedin.webp' },
    { name: 'Twitter', href: '#', icon: '/images/shared/icons/twitter.webp' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-slate-700 pt-12 pb-6 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-gray-200 pb-12">
          {/* Logo & Social Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/shared/logo.webp" 
                alt="Radix Infra" 
                width={150} 
                height={90} 
                className="opacity-90"
              />
            </Link>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm border border-gray-100" aria-label="Facebook">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm border border-gray-100" aria-label="LinkedIn">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm border border-gray-100" aria-label="Twitter">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-l-4 border-primary pl-4 text-dark">About Us</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-l-4 border-primary pl-4 text-dark">Current Projects</h3>
            <ul className="space-y-2">
              {footerLinks.currentProjects.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-l-4 border-primary pl-4 text-dark">Completed Projects</h3>
            <ul className="space-y-2">
              {footerLinks.completedProjects.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-l-4 border-primary pl-4 text-dark">Contact Us</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2011 Radix Infra Projects Private Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
            <a href="#top" className="hover:text-primary transition-colors">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
