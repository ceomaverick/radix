/**
 * @component ContactForm
 * @page Contact (/app/contact/page.tsx)
 * @description A contact form for users to send messages to the company.
 * @shared false
 * @props none
 */

'use client';

import Button from '@/components/shared/Button';

export default function ContactForm() {
  return (
    <div className="bg-gray-50 p-8 lg:p-12 rounded-2xl border border-gray-100 shadow-sm">
      <h3 className="text-2xl font-bold text-secondary mb-8">Send us a Message</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
          <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
          <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"></textarea>
        </div>
        <Button type="submit" className="w-full" size="lg">
          Send Message
        </Button>
      </form>
    </div>
  );
}
