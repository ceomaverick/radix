/**
 * @component Header
 * @page Global
 * @description Main navigation header with desktop dropdowns and a mobile menu.
 * @shared true
 * @props none
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { useState } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '#',
    children: [
      { name: 'Profile', href: '/about/profile' },
      { name: 'Key People', href: '/about/team' },
      { name: 'Ethics', href: '/about/ethics' },
      { name: 'Vision & Mission', href: '/about/vision' },
    ],
  },
  {
    name: 'Projects',
    href: '/projects',
    children: [
      { name: 'Current Projects', href: '/projects/current' },
      { name: 'Completed Projects', href: '/projects/completed' },
    ],
  },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 py-2">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Radix Infra</span>
            <Image
              src="/images/shared/logo.webp"
              alt="Radix Infra Logo"
              width={150}
              height={90}
              priority
              style={{ width: 'auto' }}
              className="h-16 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 items-center h-full">
          {navigation.map((item) => (
            <div key={item.name} className="relative group flex items-center h-20">
              {item.children ? (
                <>
                  <button className="flex items-center gap-x-1 text-xs font-bold uppercase tracking-wider leading-6 text-gray-700 group-hover:text-primary transition-colors">
                    {item.name}
                    <ChevronDownIcon className="h-3 w-3 text-gray-400 group-hover:text-primary group-hover:rotate-180 transition-transform duration-200" aria-hidden="true" />
                  </button>
                  
                  <div className="absolute -left-4 top-[calc(100%-1.5rem)] hidden group-hover:block pt-0 w-64 z-50">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden border border-gray-100"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="group/item flex items-center justify-between px-5 py-2.5 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-primary transition-all"
                          >
                            {child.name}
                            <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </>
              ) : (
                <Link href={item.href} className="text-xs font-bold uppercase tracking-wider leading-6 text-gray-700 hover:text-primary transition-colors">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <Button href="/contact" size="sm" className="text-xs py-1.5">
            Enquire Now
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-50 bg-white p-4 overflow-y-auto"
          >
             <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/images/shared/logo.webp" alt="Radix Infra" width={100} height={60} style={{ width: 'auto' }} className="h-10 w-auto" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-4 py-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-1">
                      <p className="px-3 py-2 text-xs font-black uppercase tracking-widest text-primary border-b border-gray-100 mb-2">{item.name}</p>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block rounded-lg px-6 py-3 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50 active:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-base font-bold uppercase tracking-wider leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100">
               <Button href="/contact" className="w-full" size="lg" onClick={() => setMobileMenuOpen(false)}>
                  Enquire Now
               </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
