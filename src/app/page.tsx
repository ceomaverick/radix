import type { Metadata } from "next";
import HeroSlider from '@/components/shared/HeroSlider';
import HomeOverview from '@/components/home/HomeOverview';
import ProjectCarousel from '@/components/shared/ProjectCarousel';
import HomeQuickLinks from '@/components/home/HomeQuickLinks';

export const metadata: Metadata = {
  title: "Radix Infra Projects | Turnkey Infrastructure Excellence",
  description: "Radix Infra is a premier turnkey infrastructure firm specializing in earthworks, RCC projects, hard landscaping, and road construction across India.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Radix Infra Projects",
    "url": "https://radixinfra.com",
    "logo": "https://radixinfra.com/images/shared/logo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-22-65346466",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://facebook.com/radixinfra",
      "https://linkedin.com/company/radixinfra",
      "https://twitter.com/radixinfra"
    ]
  };

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSlider />
      <HomeOverview />
      <ProjectCarousel />
      <HomeQuickLinks />
    </main>
  );
}
