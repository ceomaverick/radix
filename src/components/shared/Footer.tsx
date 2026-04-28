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
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center w-10 h-10" aria-label="Facebook">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center w-10 h-10" aria-label="LinkedIn">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center w-10 h-10" aria-label="Twitter">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z"></path>
                </svg>
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
