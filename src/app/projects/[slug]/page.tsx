import type { Metadata } from "next";
import PageHeader from '@/components/PageHeader';
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
    gallery: Array.from({ length: 12 }, (_, i) => `/images/projects/koshi/${i + 1}.webp`),
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
    gallery: Array.from({ length: 9 }, (_, i) => `/images/projects/ntpc/ntpc${i + 1}.webp`),
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectsData[params.slug];
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
  ];
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug];

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
        "item": `https://radixinfra.com/projects/${params.slug}`
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
