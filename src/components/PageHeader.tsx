/**
 * @component PageHeader
 * @page All inner pages
 * @description Uniform page header with a background image and title.
 * @shared true
 * @props title: string, subtitle?: string, backgroundImage?: string
 */

import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, backgroundImage = '/images/projects/common-header.webp' }: PageHeaderProps) {
  return (
    <div className="relative h-64 flex items-center justify-center bg-gray-900">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="relative text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wide">{title}</h1>
        {subtitle && <p className="text-gray-200 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-4 w-20 h-1 bg-primary mx-auto"></div>
      </div>
    </div>
  );
}
