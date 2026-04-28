import type { Metadata } from "next";
import PageHeader from '@/components/shared/PageHeader';
import ProjectDetails from '@/components/projects/ProjectDetails';
import ProjectGallery from '@/components/projects/ProjectGallery';
import Link from 'next/link';

const projectsData: Record<string, any> = {
  koshi: {
    title: 'Koshi Canal Project, Bihar',
    headerImage: '/images/projects/koshi-dam.webp',
    overview: 'The Bihar Floods claimed lives of several people and left thousands roofless. The river deposited a thick layer of silt in the adjoining areas turning the fertile agricultural land into a desert. Radix took on the challenge to restore the dam and clear the silt.',
    challenges: [
      'Extension, renovation and modernisation of Eastern Koshi Canal System',
      'The removal of debris and silt in and around the dam area that extends upto 60 Sq.km',
      'Embankment and rebuilding of the canal.',
      'Off site disposal of the silt',
    ],
    gallery: [
      '/images/projects/koshi/koshi-canal-project-1.webp',
      '/images/projects/koshi/koshi-canal-project-2.webp',
      '/images/projects/koshi/koshi-canal-project-3.webp',
      '/images/projects/koshi/koshi-canal-project-4.webp',
    ],
  },
  sonbhadra: {
    title: 'Nallah Diversion for NTPC',
    headerImage: '/images/projects/ntpc-head.webp',
    overview: "Construction of a 3km Nallah to divert the waste water at NTPC's power plant located at Sonbhadra. This project required precise engineering and timely execution to ensure the power plant's operations were not affected.",
    challenges: [
      'Complex terrain navigation for Nallah diversion',
      'Strict adherence to environmental safety protocols',
      'Coordinating with NTPC operational schedules',
    ],
    gallery: [
      '/images/projects/ntpc/ntpc-nallah-diversion-1.webp',
      '/images/projects/ntpc/ntpc-flyash-project-2.webp',
    ],
  },
  chitrangi: {
    title: 'Area Leveling for Reliance, Chitrangi',
    headerImage: '/images/projects/common-header.webp',
    overview: "Large-scale area leveling and grading for Reliance Power's plant located at Chitrangi. This project involves enormous planning for man and machinery management in a remote location to meet strict construction deadlines.",
    challenges: [
      'Massive earthwork and area grading in remote terrain',
      'Complex logistics for heavy machinery deployment',
      'Stringent safety and quality benchmarks',
    ],
    gallery: [
      '/images/projects/chit/ct1.webp',
    ],
  },
  sasan: {
    title: 'Area Leveling for Sasan UMPP',
    headerImage: '/images/projects/common-header.webp',
    overview: "Earth work for area grading at the 4000 MW Ultra Mega Power Project (UMPP) at Sasan for Reliance Power. As a high-priority fast-track project, it requires meticulous site management and high-volume daily output.",
    challenges: [
      'High-volume daily earthmoving targets',
      '24/7 site operations and management',
      'Adherence to international environmental standards',
    ],
    gallery: [
      '/images/projects/icons/sasanthumb.webp',
      '/images/projects/sas/sas1.webp',
    ],
  },
  flyash: {
    title: 'NTPC Flyash Project',
    headerImage: '/images/projects/ntpc-head.webp',
    overview: 'Successful removal and management of Flyash at Rihandnagar thermal power plant for NTPC. This project was executed with strict adherence to environmental protocols and safety standards, managing hazardous materials efficiently.',
    challenges: [
      'Safe handling and transport of Flyash',
      'Minimizing environmental impact during removal',
      'Strict adherence to NTPC safety protocols',
    ],
    gallery: [
      '/images/projects/ntpc/ntpc-flyash-project-2.webp',
    ],
  },
  rewa: {
    title: 'C.C. Road Construction, Rewa',
    headerImage: '/images/projects/common-header.webp',
    overview: 'Construction of a premium 1km cement concrete roadway for the Public Works Department at Rewa, MP. Work included clearing, grading, seeding, and complex multi-layered paving to national highway standards.',
    challenges: [
      'High-precision concrete paving',
      'Managing traffic flow during construction',
      'Multi-layered road structure stability',
    ],
    gallery: [
      '/images/projects/koshi/koshi-canal-project-2.webp',
    ],
  },
  banquet: {
    title: 'Banquet Hall Construction, Chunabhatti',
    headerImage: '/images/projects/common-header.webp',
    overview: 'Turnkey construction of a modern banquet facility at Chunabhatti, Mumbai. The project focused on high-quality structural finishing, load-bearing RCC work, and aesthetic landscaping for a premium social venue.',
    challenges: [
      'High-quality structural finishing',
      'Complex RCC design and execution',
      'Integrated site development and landscaping',
    ],
    gallery: [
      '/images/projects/koshi/koshi-canal-project-3.webp',
    ],
  },
  swadeshi: {
    title: 'Swadeshi Mill Premises Development',
    headerImage: '/images/projects/common-header.webp',
    overview: 'Large-scale structural work and site development at the historic Swadeshi Mill premises in Chunabhatti, Mumbai. The project involved complex reinforced concrete construction and extensive area grading for future residential development.',
    challenges: [
      'Historical site preservation constraints',
      'Large-scale area grading and leveling',
      'Advanced reinforced concrete structural work',
    ],
    gallery: [
      '/images/projects/koshi/koshi-canal-project-4.webp',
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.title} | Radix Infra Projects`,
    description: project.overview.substring(0, 155),
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'koshi' },
    { slug: 'sonbhadra' },
    { slug: 'chitrangi' },
    { slug: 'sasan' },
    { slug: 'flyash' },
    { slug: 'rewa' },
    { slug: 'banquet' },
    { slug: 'swadeshi' },
  ];
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you are looking for does not exist or has been moved.</p>
          <Link href="/projects" className="text-primary font-bold hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://radixinfra.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://radixinfra.com/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://radixinfra.com/projects/${slug}`
      }
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader title={project.title} backgroundImage={project.headerImage} />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ProjectDetails project={project} />
          <ProjectGallery project={project} />
        </div>
      </section>
    </div>
  );
}
